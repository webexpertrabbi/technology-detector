// popup.js

// ধাপ ১: সবগুলো ডাটাবেসকে একটি 'MASTER_DB'-তে একত্রিত করুন
const MASTER_DB = { ...TECHNOLOGIES_DB, ...THEME_DB, ...PLUGIN_DB };

document.addEventListener('DOMContentLoaded', async () => {
    const resultsContainer = document.getElementById('results-container');
    const techCountBadge = document.getElementById('tech-count-badge');
    techCountBadge.style.display = 'none';

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    // detector.js থেকে আসা নতুন ডেটা স্ট্রাকচার লোড করুন
    const result = await chrome.storage.local.get([`${tab.id}`]);
    const detectedData = result[tab.id];

    if (!detectedData || !detectedData.technologies || detectedData.technologies.length === 0) {
        // HTML-এ থাকা লোডারটি সরিয়ে বার্তা দেখান
        resultsContainer.innerHTML = '<p style="text-align: center; color: #5e6c84;">No technologies detected.</p>';
        return;
    }

    processAndDisplayData(detectedData.technologies, resultsContainer, techCountBadge);
});

// === Helper Functions (এগুলো আগের মতোই থাকবে) ===
function getCleanName(name) {
    const nameMappings = {
        "Elementor Website Builder": "Elementor", "WPBakery Page Builder": "WPBakery", 
        "Contact Form 7": "Contact Form 7", "MC4WP: Mailchimp for WordPress": "Mailchimp for WP"
    };
    for (const longName in nameMappings) {
        if (name.includes(longName)) return nameMappings[longName];
    }
    return name.split(' – ')[0].split(' - ')[0];
}

function formatSlugToName(slug) {
    return slug.replace(/[-_]/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
}


// === মূল ফাংশন (নতুন করে লেখা) ===
async function getTechnologyDetails(slug) {
    // ১. প্রথমে আমাদের MASTER_DB থেকে তথ্য খুঁজুন
    if (MASTER_DB[slug]) {
        const data = MASTER_DB[slug];
        return {
            name: data.name,
            iconUrl: data.icon,
            category: data.category || 'Miscellaneous',
            version: '' // লোকাল ডাটাবেস থেকে ভার্সন পাওয়া যায় না
        };
    }

    // ২. যদি না পাওয়া যায়, তাহলে WordPress.org API-তে খুঁজুন
    try {
        const pluginApiUrl = `https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=${slug}`;
        let response = await fetch(pluginApiUrl);
        let apiData = await response.json();
        if (apiData && !apiData.error) {
            return {
                name: apiData.name,
                version: apiData.version || '',
                iconUrl: (apiData.icons ? (apiData.icons.svg || apiData.icons['2x'] || apiData.icons['1x']) : 'generic-plugin-icon.png'),
                category: 'Other Plugins'
            };
        }
    } catch (e) { /* API Fetch ব্যর্থ হলে কিছু করার নেই */ }

    // ৩. সবশেষে, জেনেরিক ফলব্যাক
    return {
        name: formatSlugToName(slug),
        version: '',
        iconUrl: 'generic-plugin-icon.png',
        category: 'Miscellaneous'
    };
}

async function processAndDisplayData(slugs, container, badge) {
    container.innerHTML = ''; // লোডার সরিয়ে দিন
    
    // ক্যাটাগরিগুলো সাজানোর জন্য
    const categoryOrder = ['CMS', 'Ecommerce', 'Page Builder', 'JavaScript Frameworks', 'JavaScript Libraries', 'Themes', 'Other Plugins', 'Miscellaneous', 'CDN'];
    const categoryElements = {};

    const renderItem = (item) => {
        if (!item) return;

        const categoryName = item.category;
        // যদি ক্যাটাগরিটি categoryOrder তালিকায় না থাকে, তবে તેને 'Miscellaneous' হিসেবে ধরুন
        const finalCategoryName = categoryOrder.includes(categoryName) ? categoryName : 'Miscellaneous';

        if (!categoryElements[finalCategoryName]) {
            const categoryBlock = document.createElement('div');
            categoryBlock.className = 'category-block';
            const categoryTitle = document.createElement('h4');
            categoryTitle.className = 'category-title';
            categoryTitle.textContent = finalCategoryName;
            const itemsGrid = document.createElement('div');
            itemsGrid.className = 'items-grid';
            categoryBlock.append(categoryTitle, itemsGrid);
            categoryElements[finalCategoryName] = { block: categoryBlock, grid: itemsGrid };
        }

        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = `
            <img src="${item.iconUrl}" class="item-icon" alt="${item.name}">
            <div class="item-info">
                <span class="item-name">${getCleanName(item.name)}</span>
                ${item.version ? `<span class="item-version">${item.version}</span>` : ''}
            </div>
        `;
        categoryElements[finalCategoryName].grid.appendChild(itemDiv);
    };

    // সবগুলো প্রযুক্তির তথ্য একযোগে আনুন
    const promises = slugs.map(slug => getTechnologyDetails(slug));
    const allDetails = await Promise.all(promises);

    allDetails.forEach(details => renderItem(details));
    
    badge.textContent = allDetails.length;
    badge.style.display = 'inline-block';

    // ক্যাটাগরি ব্লকগুলোকে সঠিক অর্ডারে UI-তে যোগ করুন
    categoryOrder.forEach(categoryName => {
        if (categoryElements[categoryName]) {
            container.appendChild(categoryElements[categoryName].block);
        }
    });
}
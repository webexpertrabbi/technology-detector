// detector.js

(async () => {
    // গার্ড ক্লজ: যদি এই স্ক্রিপ্টটি আগে চলে থাকে, তবে আবার চালাবেন না
    if (window.myDetectorHasRun) {
        return;
    }
    window.myDetectorHasRun = true;

    const detectedSlugs = new Set();
    
    // --- জেনেরিক প্রযুক্তি সনাক্তকরণ ---
    try {
        for (const slug in window.TECHNOLOGIES_DB) {
            const tech = window.TECHNOLOGIES_DB[slug];
            if (tech.rules) {
                // মেটা ট্যাগ পরীক্ষা করুন
                if (tech.rules.meta) {
                    for (const name in tech.rules.meta) {
                        const meta = document.querySelector(`meta[name="${name}"]`);
                        if (meta && meta.content.match(tech.rules.meta[name])) {
                            detectedSlugs.add(slug);
                        }
                    }
                }
                // স্ক্রিপ্ট পরীক্ষা করুন
                if (tech.rules.scripts) {
                    document.querySelectorAll('script[src]').forEach(script => {
                        tech.rules.scripts.forEach(pattern => {
                            if (script.src && script.src.match(pattern)) {
                                detectedSlugs.add(slug);
                            }
                        });
                    });
                }
                // DOM পরীক্ষা করুন
                if (tech.rules.dom) {
                     for (const key in tech.rules.dom) {
                        if (window[key]) {
                            detectedSlugs.add(slug);
                        }
                    }
                }
            }
        }
    } catch (e) {
        // console.error("Generic detection failed:", e);
    }

    // --- ওয়ার্ডপ্রেস থিম ও প্লাগিন সনাক্তকরণ ---
    if (detectedSlugs.has('wordpress')) {
        const scripts = Array.from(document.querySelectorAll('script[src]'));
        const styles = Array.from(document.querySelectorAll('link[href]'));
        const allSources = [...scripts, ...styles];

        const themeRegex = /\/wp-content\/themes\/([a-zA-Z0-9._-]+)\//i;
        const pluginRegex = /\/wp-content\/plugins\/([a-zA-Z0-9._-]+)\//i; // *** এখানে Regex ভুলটি ঠিক করা হয়েছে ***

        let themeSlugFound = false;
        allSources.forEach(source => {
            const url = source.src || source.href;
            
            if (url) {
                // থিম সনাক্তকরণ
                if (!themeSlugFound) {
                    const themeMatch = url.match(themeRegex);
                    if (themeMatch && themeMatch[1]) {
                        detectedSlugs.add(themeMatch[1].toLowerCase());
                        themeSlugFound = true;
                    }
                }
                
                // প্লাগিন সনাক্তকরণ
                const pluginMatch = url.match(pluginRegex);
                if (pluginMatch && pluginMatch[1]) {
                     if (pluginMatch[1].toLowerCase() === 'js_composer') {
                        detectedSlugs.add('wpbakery');
                    } else {
                        detectedSlugs.add(pluginMatch[1].toLowerCase());
                    }
                }
            }
        });
    }

    // সনাক্ত করা প্রযুক্তির তালিকা background.js-এ পাঠান
    chrome.runtime.sendMessage({
        type: "TECHNOLOGY_DATA",
        data: {
            technologies: Array.from(detectedSlugs)
        }
    });

})();
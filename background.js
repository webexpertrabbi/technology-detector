// background.js

// যখন কোনো ট্যাব আপডেট হয় (যেমন, নতুন পেজ লোড হয়)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // পেজটি সম্পূর্ণ লোড হলেই কেবল স্ক্রিপ্ট চালানো হবে
    if (changeInfo.status !== 'complete' || !tab.url) {
        return;
    }

    // সুরক্ষিত ব্রাউজার পেজগুলোতে স্ক্রিপ্ট চালানো থেকে বিরত থাকুন
    try {
        const url = new URL(tab.url);
        if (url.protocol.startsWith('chrome') || url.hostname === 'chrome.google.com') {
            return;
        }
    } catch (e) {
        return;
    }

    // সঠিক নামের ফাইলটি (detector.js) ইনজেক্ট করুন
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['technologies.js', 'detector.js'] // *** পরিবর্তন ১: technologies.js ও যোগ করা হয়েছে ***
    }).catch(err => {
        // console.error(`Failed to inject script: ${err}`);
    });
});


// detector.js থেকে আসা মেসেজ শোনার জন্য
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // সঠিক মেসেজ টাইপটি ("TECHNOLOGY_DATA") শুনুন
    if (request.type === "TECHNOLOGY_DATA") { // *** পরিবর্তন ২ ***
        if (sender.tab && sender.tab.id) {
            chrome.storage.local.set({ [sender.tab.id]: request.data });
        }
        sendResponse({ status: "success" });
    }
    return true;
});
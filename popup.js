//
// popup.js
//
// v1.0.0
//
// Cyril Weller
// cyril.weller@protonmail.com
//
// GNU GPLv3 licence
//


chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

    // Get url of the current active tab
    var currentUrl = tabs[0].url;

    // Delete history for that url
    chrome.history.deleteUrl({
        url: currentUrl
    });

});

//
// background.js
//
// v1.0.0
//
// Cyril Weller
// cyril.weller@protonmail.com
//
// GNU GPLv3 licence
//

// When the tab is changed, the icon returns to its original state
chrome.tabs.onActivated.addListener( function(tabs) {

  chrome.browserAction.setIcon({path:"swipe-icon.png"});

});

// When the tab is updated, the icon returns to its original state
chrome.tabs.onUpdated.addListener( function(tabs) {

  chrome.browserAction.setIcon({path:"swipe-icon.png"});

});

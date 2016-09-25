//
// background.js
//
// v1.1.1
//
// Cyril Weller
// cyril.weller@protonmail.com
//
// GNU GPLv3 licence
//

// When the tab is changed :
//  The icon is green if the tab is not on the history
//  The icon is back to grey if the tab is on the history
chrome.tabs.onActivated.addListener( function(tabs) {

  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

    // Get url of the current active tab
    var currentUrl = tabs[0].url;

    // Searching the history for the currentUrl
    chrome.history.search({
      text: currentUrl
    }, function(results) {
        // If no result found, green icon
        if (results[0] == undefined){
          chrome.browserAction.setIcon({path:"img/swipe-done.png"});

        } else {  // If result found, grey icon
          chrome.browserAction.setIcon({path:"img/swipe-icon.png"});
        }
    });

  });

});

// When the tab is updated, the icon returns to its original state
chrome.tabs.onUpdated.addListener( function(tabs) {

  chrome.browserAction.setIcon({path:"img/swipe-icon.png"});

});

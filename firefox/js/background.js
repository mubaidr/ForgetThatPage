//
// background.js
//
// v1.3.1
//
// Cyril Weller
// forgetthatpage@protonmail.com
//
// GNU GPLv3 license
//

// When the tab is changed :
//  The icon is green if the tab is not on the history
//  The icon is back to grey if the tab is on the history
chrome.tabs.onActivated.addListener(function(tabs) {

  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

    // Get url of the current active tab
    var currentUrl = tabs[0].url;

    // Searching the history for the currentUrl
    chrome.history.search({

      text: currentUrl,

    }, function(results) {

      var ctr = 0;

      // For every url containing the current one
      for (var i = 0; i < results.length; i++) {

        // Incrementing counter if result url equals the current url
        if (results[i].url == currentUrl){
          ctr++;
        }
      }

      // If counter is zero,
      // it means current url is not in history, so icon is green
      if (ctr == 0){
        chrome.browserAction.setIcon({path:"img/icon/swipe_done128.png"});

      // Else, icon returns to original state
      } else {
          chrome.browserAction.setIcon({path:"img/icon/swipe128.png"});
      }

    });

  });

});

// When the tab is updated, the icon returns to its original state
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

  chrome.browserAction.setIcon({path:"img/icon/swipe128.png"});

});

// Default icon when tab is created
chrome.tabs.onCreated.addListener(function(tabs){

  chrome.browserAction.setIcon({path:"img/icon/swipe128.png"});

});


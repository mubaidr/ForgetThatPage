//
// popup.js
//
// v1.2.0
//
// Cyril Weller
// cyril.weller@protonmail.com
//
// GNU GPLv3 license
//

// Url of the current active tab
var currentUrl ;

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    // Get url of the current active tab
    currentUrl = tabs[0].url;

    // Delete history for that url
    chrome.history.deleteUrl({

        url: currentUrl

    }, function() {

      // Get message for browser locale
      var message = chrome.i18n.getMessage("websiteDeletedOK");

      // Display message
      document.getElementById("returnText").innerHTML = message;

      // Change icon to really see it's ok
      chrome.browserAction.setIcon({ path:"img/swipe-done.png" });
    });

});

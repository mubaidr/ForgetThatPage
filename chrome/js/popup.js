//
// popup.js
//
// v1.1.1
//
// Cyril Weller
// cyril.weller@protonmail.com
//
// GNU GPLv3 license
//

// Url of the current active tab
var currentUrl ;

// Get current navigator language
var language = window.navigator.userLanguage || window.navigator.language;

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    // Get url of the current active tab
    currentUrl = tabs[0].url;

    // Delete history for that url
    chrome.history.deleteUrl({

        url: currentUrl

    }, function() {

      // Get message from function
      var message = getMessage(language);

      // Display message
      document.getElementById("returnText").innerHTML = message;

      // Change icon to really see it's ok
      chrome.browserAction.setIcon({ path:"img/swipe-done.png" });

    });

});

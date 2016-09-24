//
// popup.js
//
// v1.1.0
//
// Cyril Weller
// cyril.weller@protonmail.com
//
// GNU GPLv3 licence
//


chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

    // Get url of the current active tab
    var currentUrl = tabs[0].url;

    // Get current navigator language
    var language = window.navigator.userLanguage || window.navigator.language;

    // Delete history for that url
    chrome.history.deleteUrl({

        url: currentUrl

    }, function() {

      // Get message from function
      var message = getMessage(language);

      // Display message
      document.getElementById("returnText").innerHTML = message;

    });

});

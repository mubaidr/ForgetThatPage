//
// popup.js
//
// v1.3.2
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

      // For http/https url
      if (currentUrl.indexOf("http") !== -1) {

        // Delete session storage for current url
        chrome.tabs.executeScript(tabs[0].id, {code: 'sessionStorage.clear()'});

        // Delete local storage for current url
        chrome.tabs.executeScript(tabs[0].id, {code: 'localStorage.clear()'});
      }

      // Get message for browser locale
      var message = chrome.i18n.getMessage("websiteDeletedOK");

      // Get navigator language
      var userLang = navigator.language || navigator.userLanguage;

      // If language is persian, arabic or hebrew,
      // font-size is 11pt to be more readable
      if (userLang == 'ar' || userLang == 'fa' || userLang == 'he') {
        document.getElementById("returnText").setAttribute('style','font-size:11pt');
      }

      // Display message
      document.getElementById("returnText").innerHTML = message;

      // Change icon to really see it's ok
      chrome.browserAction.setIcon({ path:"img/swipe-done.png" });

      // After 1.5 seconds, the popup closes itself
      setTimeout(function(){ window.close() },1500);

	});

});

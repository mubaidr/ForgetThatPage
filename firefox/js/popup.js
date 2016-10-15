//
// popup.js
//
// v1.5
//
// Cyril Weller
// cyril.weller@protonmail.com
//
// GNU GPLv3 license
//

var pageCookies;
var pageLocalStorage;
var pageSessionStorage;

chrome.storage.local.get({
  cookies: true,
  localStorage: true,
  sessionStorage: true
}, function(items) {
  pageCookies = items.cookies ;
  pageLocalStorage  = items.localStorage ;
  pageSessionStorage = items.sessionStorage ;
});

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

  // Get url of the current active tab
  var currentUrl = tabs[0].url;

  /******************/
  /* DELETE HISTORY */
  /******************/

  // Delete history for that url
  chrome.history.deleteUrl({

    url: currentUrl

  }, function(){

    /************************************/
    /* DELETE SESSION AND LOCAL STORAGE */
    /************************************/

    // For http/https urlif option value is true
    if (currentUrl.indexOf("http") !== -1) {

      if (pageSessionStorage) {
        chrome.tabs.executeScript(tabs[0].id, {code: 'sessionStorage.clear()'});
      }

      // Delete local storage for current url if option value is true
      if (pageLocalStorage) {
        chrome.tabs.executeScript(tabs[0].id, {code: 'localStorage.clear()'});
      }
    }

    /******************/
    /* DELETE COOKIES */
    /******************/

    // Delete cookies if option value is true
    if (pageCookies){

      // Get all cookies for current url
      chrome.cookies.getAll({

        url: currentUrl

      }, function(cookies) {

        // For every cookie in the cookie list
        for (i = 0; i < cookies.length; i++) {

          // Remove the cookie
          chrome.cookies.remove({

            url: currentUrl,
            name: cookies[i].name

          }, function(){});
        }

      });
    }

    /*******************/
    /* DISPLAY MESSAGE */
    /*******************/

    // Get navigator language
    var userLang = navigator.language || navigator.userLanguage;

    // If language is persian, arabic or hebrew,
    // font-size is 11pt to be more readable
    if (userLang == 'ar' || userLang == 'fa' || userLang == 'he') {
      document.getElementById("returnText").setAttribute('style','font-size:11pt');
    }

    // Get message for browser locale
    var message = chrome.i18n.getMessage("websiteDeletedOK");

    // Display message
    document.getElementById("returnText").innerHTML = message;

    // Change icon to really see it's ok
    chrome.browserAction.setIcon({ path:"img/icon/swipe_done128.png" });

    // After 1.5 seconds, the popup closes itself
    setTimeout(function(){ window.close() },1500);

  });

});

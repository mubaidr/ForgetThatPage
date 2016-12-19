//
// popup.js
//
// v1.7
//
// Cyril Weller
// forgetthatpage@protonmail.com
//
// GNU GPLv3 license
//

var pageCookies;
var pageLocalStorage;
var pageSessionStorage;
var downloads;

chrome.storage.sync.get({
  cookies: true,
  localStorage: true,
  sessionStorage: true,
  downloads: true
}, function(items) {
  pageCookies = items.cookies ;
  pageLocalStorage  = items.localStorage ;
  pageSessionStorage = items.sessionStorage ;
  pageDownloads = items.downloads ;
});

//
// forgetThatPage
//
//	function that will delete traces for a 
//	specific url passed as  parameter
//
function forgetThatPage(tab){
	
	var currentUrl = tab.url;

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
				// Alert for testing
				//alert("delete sessionStorage");
				chrome.tabs.executeScript(tab.id, {code: 'sessionStorage.clear()'});
			}

			// Delete local storage for current url if option value is true
			if (pageLocalStorage) {
				// Alert for testing
				//alert("delete localStorage");
				chrome.tabs.executeScript(tab.id, {code: 'localStorage.clear()'});
			}
		}	

		/********************/
		/* DELETE DOWNLOADS */
		/********************/

		if (pageDownloads) {

			// Erase downloads for current url
			chrome.downloads.erase({
				url: currentUrl
			});
		}

		/******************/
		/* DELETE COOKIES */
		/******************/

		// Delete cookies if option value is true
		if (pageCookies){

			// Alert for testing
			//alert("delete cookies");
			
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

					});
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

}


// Main program
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

	// Call function with current url argument
	forgetThatPage(tabs[0]);

});


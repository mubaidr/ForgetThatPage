//
// options.js
//
// v1.1.0
//
// Cyril Weller
// forgetthatpage@protonmail.com
//
// GNU GPLv3 license
//

// Get messages for options
var optionsTitleMessage = chrome.i18n.getMessage("optionsTitleMessage");
var cookieMessage = chrome.i18n.getMessage("cookieMessage");
var localStorageMessage = chrome.i18n.getMessage("localStorageMessage");
var sessionStorageMessage = chrome.i18n.getMessage("sessionStorageMessage");
var downloadsMessage = chrome.i18n.getMessage("downloadsMessage");
document.getElementById("optionsTitleMessage").innerHTML = optionsTitleMessage;
document.getElementById("cookieMessage").innerHTML = cookieMessage;
document.getElementById("localStorageMessage").innerHTML = localStorageMessage;
document.getElementById("sessionStorageMessage").innerHTML = sessionStorageMessage;
document.getElementById("downloadsMessage").innerHTML = downloadsMessage;

// Saves options to chrome.storage.sync.
function save_options() {

  var cookies = document.getElementById('cookies').checked;
  var localStorage = document.getElementById('localStorage').checked;
  var sessionStorage = document.getElementById('sessionStorage').checked;
  var downloads = document.getElementById('downloads').checked;

  chrome.storage.sync.set({
    cookies: cookies,
    localStorage: localStorage,
    sessionStorage: sessionStorage,
    downloads: downloads
  }, function() {

    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = chrome.i18n.getMessage("optionsSavedMessage");

    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });

}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {

  chrome.storage.sync.get({
    cookies: true,
    localStorage: true,
    sessionStorage: true,
    downloads: true
  }, function(items) {
    document.getElementById('cookies').checked = items.cookies ;
    document.getElementById('localStorage').checked = items.localStorage ;
    document.getElementById('sessionStorage').checked = items.sessionStorage ;
    document.getElementById('downloads').checked = items.downloads ;
  });

}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);

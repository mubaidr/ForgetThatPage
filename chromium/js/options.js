//
// options.js
//
// v1.0.0
//
// Cyril Weller
// cyril.weller@protonmail.com
//
// GNU GPLv3 license
//

// Saves options to chrome.storage.sync.
function save_options() {

  var cookies = document.getElementById('cookies').checked;
  var localStorage = document.getElementById('localStorage').checked;
  var sessionStorage = document.getElementById('sessionStorage').checked;

  chrome.storage.sync.set({
    cookies: cookies,
    localStorage: localStorage,
    sessionStorage: sessionStorage
  }, function() {

    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';

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
    sessionStorage: true
  }, function(items) {
    document.getElementById('cookies').checked = items.cookies ;
    document.getElementById('localStorage').checked = items.localStorage ;
    document.getElementById('sessionStorage').checked = items.sessionStorage ;
  });

}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);
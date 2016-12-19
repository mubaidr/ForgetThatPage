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
chrome.tabs.onActivated.addListener(function (obj) {
  UpdateIcon(obj.tabId);
});


// When the tab is updated, the icon returns to its original state
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  UpdateIcon(tab);
});

// Default icon when tab is created
chrome.tabs.onCreated.addListener(function (tab) {
  if (tab.active && tab.selected) {
    UpdateIcon(tab);
  }
});

function UpdateIcon(id) {

  if (typeof id === 'object') {

    if (id.title === 'New Tab')
      return;

    SetIcon(id.url);

  } else {

    chrome.tabs.get(id, function (tab) {
      // Get url of the current active tab

      SetIcon(tab.url);

    })

  }
}

function SetIcon(url) {

  chrome.history.getVisits({
    url: url
  }, function (historyItems) {

    if (!historyItems.length) {
      chrome.browserAction.setIcon({
        path: "img/icon/swipe_done128.png"
      });

      // Else, icon returns to original state
    } else {
      chrome.browserAction.setIcon({
        path: "img/icon/swipe128.png"
      });
    }

  })

}
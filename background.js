chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (
    changeInfo.status === "loading" &&
    tab.url === "https://www.youtube.com/"
  ) {
    chrome.tabs.update(tab.id, {
      url: "https://www.youtube.com/feed/subscriptions",
    });
  }
});

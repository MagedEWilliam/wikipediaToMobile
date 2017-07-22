chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if( tab.url.indexOf('wikipedia.org') == 11 ){
		chrome.tabs.getSelected(null, function(tab) {
			chrome.tabs.update({url: tab.url.replace('wikipedia.org', 'm.wikipedia.org') });
		});
	}
});
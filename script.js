chrome.tabs.onUpdated.addListener( (tabId, changeInfo, tab) => {
	if(changeInfo.status === 'complete' && tab.url.includes('wikipedia.org')){
		chrome.tabs.executeScript({
			file: 'contentScript.js'
		});
	}
});
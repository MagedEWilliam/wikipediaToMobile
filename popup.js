chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

    chrome.tabs.getSelected(null, function(tab) {
        RunWikipediaTwoMobile(tab);
    });
});

function RunWikipediaTwoMobile(tab){

    var tabUrl = tab.url;
    if( isWikipediaDesktop(tabUrl) ){
    	var toMobile = addMToUrl(tabUrl)
    	chrome.tabs.update({url: toMobile});
    }
}

function isWikipediaDesktop(url){

	if(url.indexOf('wikipedia.org') == 11){
		return true;
	}
	return false;
}

function addMToUrl(url){
	
	return url.replace('wikipedia.org', 'm.wikipedia.org')
}
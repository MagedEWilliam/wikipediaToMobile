chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

    chrome.tabs.getSelected(null, function(tab) {
        
        if( isWikipediaDesktop(tab.url) ){

    		chrome.tabs.update({url: addMToUrl(tab.url)});
    	}
    });
});

function isWikipediaDesktop(url){

	if(url.indexOf('wikipedia.org') == 11){
		return true;
	}
	return false;
}

function addMToUrl(url){
	
	return url.replace('wikipedia.org', 'm.wikipedia.org');
}
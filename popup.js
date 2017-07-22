document.addEventListener('DOMContentLoaded', function() {

	    chrome.tabs.getSelected(null, function(tab) {
	        tabUrl = tab.url;
	        if( isWikipediaDesktop(tabUrl) ){
	        	var toMobile = addMToUrl(tabUrl)
	        	chrome.tabs.update({url: toMobile});
	        }
    	});


}, false);

function isWikipediaDesktop(url){

	if(url.indexOf('wikipedia.org') == 11){
		return true;
	}
	return false;
}

function addMToUrl(url){

	return url.replace('wikipedia.org', 'm.wikipedia.org')
}
document.addEventListener('DOMContentLoaded', function() {

	var checkPageButton = document.getElementById('checkPage');
	
	checkPageButton.addEventListener('click', function() {

	    chrome.tabs.getSelected(null, function(tab) {
	        tabUrl = tab.url;
	        if( isWikipediaDesktop(tabUrl) ){
	        	document.location.href = addMToUrl(tabUrl);
	        	tab.url = addMToUrl(tabUrl);
	        }
    	});

	}, false);

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
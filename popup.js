// document.addEventListener('DOMContentLoaded', function() {

// 	chrome.tabs.getSelected(null, function(tab) {

// 	    RunWikipediaTwoMobile(tab);
// 	});

// }, false);

// chrome.tabs.query({'active': true}, function(tab) {
  
  
// });

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) { // onUpdated should fire when the selected tab is changed or a link is clicked 
    chrome.tabs.getSelected(null, function(tab) {
        myURL = tab.url;
        RunWikipediaTwoMobile(tab);
    });
});

// chrome.tabs.query({
//   active: true,
//   currentWindow: true
// }, function(tabs) {
//   var tab = tabs[0];
//   var url = tab.url;
//   RunWikipediaTwoMobile(tab);
// });


function RunWikipediaTwoMobile(tab){

    tabUrl = tab.url;
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
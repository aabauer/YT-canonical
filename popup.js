getUrl.addEventListener("click", async () => {
    // opens a communication between scripts
    var port = chrome.runtime.connect();
	
	function getURL() {
        //You can play with your DOM here or check URL against your regex
        return document.querySelector("link[rel='canonical']").href;
    }
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

	let url_val = await chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: getURL,
	});
    // listens to the click of the button into the popup content
    document.getElementById('link_holder').value = url_val[0].result
  
});
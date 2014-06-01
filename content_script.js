var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('iframe.css');
(document.head||document.documentElement).appendChild(style);

var inc = 0
  , paragraphs = document.getElementsByTagName('p');
document.body.addEventListener('keypress',keyPress,false);
function keyPress(e) {
	if (e.keyCode === 13) {
    $('body').prepend('<iframe src="http://www.programmingfacts.com" id="blind-frame"></iframe>');
		var current = paragraphs[inc];
		if (current) {
      selectedText = replaceHTML(current.innerHTML)
      chrome.extension.sendRequest({'speak': selectedText});
			inc++
		}
	}
}
function replaceHTML(str) {
  var re = /&(nbsp|amp|quot|lt|gt);/g;
  return str.replace(re,'').replace(/(<([^>]+)>)/ig,'');
}
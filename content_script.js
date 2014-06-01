window.onload = function () {
	var inc = 0
	  , paragraphs = document.getElementsByTagName('p');
	document.body.addEventListener('keypress',keyPress,false);
	function keyPress(e) {
		if (e.keyCode === 13) {
			var current = paragraphs[inc];
			if (current) {
				console.log(replaceHTML(current.innerHTML));
				inc++
			}
		}
	}
	function replaceHTML(str) {
	  var re = /&(nbsp|amp|quot|lt|gt);/g;
	  return str.replace(re,'').replace(/(<([^>]+)>)/ig,'');
	}
};
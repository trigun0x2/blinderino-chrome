var inc = 0 , paragraphs = document.getElementsByTagName('p');

jwerty.key('ctrl+shift+r', function(){
  var current = paragraphs[inc];
  if (current) {
    selectedText = replaceHTML(current.innerHTML)
    chrome.extension.sendRequest({'speak': selectedText});
    inc++
  }
});
jwerty.key('ctrl+shift+l', function(){
  $.post('http://localhost:3000/webcam/compare', {site: window.location.host }, function(data) {
    if(data[0] == true){
      console.log("nice");
      console.log(data);
      $('.kdd_email').val(data[1].username);
      $('input[type=password]').val(data[1].password);
      $('#signinbtn').click();
    }else{
      console.log(data[0]);
    }
    return;
  });
});
function replaceHTML(str) {
  var re = /&(nbsp|amp|quot|lt|gt);/g;
  return str.replace(re,'').replace(/(<([^>]+)>)/ig,'');
}
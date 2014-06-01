function hello() {
  chrome.tts.speak('Welcome to Blinderino, what would you like to do?');
}
// Supposed to Called when the user clicks on the browser action icon.
chrome.browserAction.onClicked.addListener(hello);

function speak(utterance) {
  chrome.tts.speak(utterance);
  console.log(utterance)
}


function initBackground() {
  loadContentScriptInAllTabs();

  chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
      if (request['init']) {
        sendResponse({'key': localStorage['speakKey']});
      } else if (request['speak']) {
        speak(request['speak']);
      }
    });

}

initBackground();

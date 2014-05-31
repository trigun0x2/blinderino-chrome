function hello() {
  chrome.tts.speak('Welcome to Blinderino, what would you like to do?');
}

// Supposed to Called when the user clicks on the browser action icon.
chrome.browserAction.onClicked.addListener(hello);
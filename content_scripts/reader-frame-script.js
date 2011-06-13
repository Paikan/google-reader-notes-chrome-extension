chrome.extension.sendRequest({method: "getUserPreferences"}, function(response) {
  if (response.defaultShareStatus) {
    var shareCheckBox = document.getElementById('share');
    if (shareCheckBox) {
      if (response.defaultShareStatus == 'unshare') {
        shareCheckBox.checked = false;
      } else {
        shareCheckBox.checked = true;
      }
    }
  }
  if (response.autoSubmit == 'true') {
    var submitButton = document.getElementById('submit-button');
    if (submitButton) {
      submitButton.click();
    }
  }
});




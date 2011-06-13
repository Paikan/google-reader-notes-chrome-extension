function restoreUserPreferences() {
  var defaultShareStatus = localStorage["defaultShareStatus"];
  var shareCheckBox = document.getElementById("share");
  shareCheckBox.checked = defaultShareStatus != "unshare";

  var autoSubmit = localStorage["autoSubmit"];
  var submitCheckBox = document.getElementById("autosubmit");
  submitCheckBox.checked = autoSubmit == "true";
}

function saveDefaultShareStatus(checked) {
  if (checked) {
    localStorage["defaultShareStatus"] = "share";
  } else {
    localStorage["defaultShareStatus"] = "unshare";
  }
}

function saveAutoSubmitStatus(checked) {
  if (checked) {
    localStorage["autoSubmit"] = "true";
  } else {
    localStorage["autoSubmit"] = "false";
  }
}

function handleI18N() {
    var title = chrome.i18n.getMessage("options_title");
    document.title = title;
    var titleElt = document.getElementById("title");
    titleElt.innerHTML = '<img alt="icon" id="icon" src="../icons/64.png"/>' + title;
    var shareLabel = document.getElementById("share-label");
    shareLabel.innerHTML = chrome.i18n.getMessage("options_share_label");
    var autosubmitLabel = document.getElementById("autosubmit-label");
    autosubmitLabel.innerHTML = chrome.i18n.getMessage("options_autosubmit_label");
}

function init() {
  handleI18N();
  restoreUserPreferences();
}
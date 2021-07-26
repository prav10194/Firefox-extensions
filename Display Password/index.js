browser.contextMenus.create({
  id: "display-password",
  title: "Display Password"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "display-password") {
    browser.tabs.executeScript({
      file: "display-password.js"
    });
  }
});
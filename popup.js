// var app = chrome.runtime.getBackgroundPage();

function min() {
  chrome.tabs.executeScript({
    file: "ministry.js",
  })
}
function list() {
  chrome.tabs.executeScript({
    file: "list.js",
  })
}
function makeDictionary() {
  chrome.tabs.executeScript({
    file: "dictionary.js",
  })
}

document.querySelector(".btn.btn-ministry").addEventListener("click", min)
document.querySelector(".btn.btn-list").addEventListener("click", list)
document
  .querySelector(".btn.btn-directory")
  .addEventListener("click", makeDictionary)

let str = window.location.href;
let id = str.substring(str.length - str.split("").reverse().join("").indexOf("/"));
function requestExtension(id, callback){
    callback("installable");
}
function getExtensionStatus(id, callback){
    callback("installable");
}
chrome.webstorePrivate.requestExtension = requestExtension;
chrome.webstorePrivate.getExtensionStatus = getExtensionStatus;
fetch('https://apithingy.000webhostapp.com/get_manifest.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: "id=" + id,
})
  .then((response) => response.text())
  .then((data) => {
    var c = {
        id: id,
        manifest: data,
        localizedName: "bypassed extension :)",
        locale: "en-us"
    };
    chrome.webstorePrivate.beginInstallWithManifest3(c, alert);
    chrome.webstorePrivate.completeInstall(id, alert);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

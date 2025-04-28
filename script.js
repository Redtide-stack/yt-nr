var pURL = "about:blank";

function rand(min, max){
    return Math.round(Math.random()*(max-min))+min;
}

function removeS(string, remove) {
    return string.replace(remove, "");
}
function ytembed() {
    var unfin = $("#ytinput").val();
    unfin = removeS(unfin, "https://");
    unfin = removeS(unfin, "http://");
    unfin = removeS(unfin, "www.");
    unfin = removeS(unfin, "youtube.com/");
    unfin = removeS(unfin, "youtu.be/");
    unfin = removeS(unfin, "watch?v=");
    unfin = removeS(unfin, "embed/");
    var unfin1 = unfin.split("&");
    unfin = "https://www.youtube-nocookie.com/embed/" + unfin1[0];
    $("#ytiframe").attr("src", unfin);
}
function cloak() {
    var win = window.open('about:blank#');
    var iframe = win.document.createElement('iframe');
    var faviconLinkElement = win.document.createElement("link");
    faviconLinkElement.rel = "icon";
    faviconLinkElement.href = "https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico";
    faviconLinkElement.type = "image/x-icon";
    win.document.head.appendChild(faviconLinkElement);
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.src = location.href;
    win.document.body.appendChild(iframe);
    win.document.title = "Dashboard";
    win.document.body.style.margin = "0px";
    }
document.body.onkeyup = function(e) {
  if (e.code == "ShiftLeft" || e.keyCode == 16) {
        cloak();
    }
}

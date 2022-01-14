function getStylesheet() {
    var currentTime = new Date().getHours();
    if (0 <= currentTime && currentTime < 7 || 18 <= currentTime && currentTime < 24) {
     document.write("<link rel='stylesheet' href='/theme-dark.css' type='text/css'>");
    }
    else {
     document.write("<link rel='stylesheet' href='/theme-light.css' type='text/css'>");
    }
}

getStylesheet();
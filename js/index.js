getStylesheet();

function getStylesheet() {
    var currentTime = new Date().getHours();
    if (0 <= currentTime && currentTime < 7 || 18 <= currentTime && currentTime < 24) {
     document.write("<link rel='stylesheet' href='/css/dark.css' type='text/css'>");
    }
    else {
     document.write("<link rel='stylesheet' href='/css/light.css' type='text/css'>");
    }
}

function includeHTML() {
    var z, i, element, file, xhttp;
    z = document.getElementsByTagName('*');
    for (i = 0; i < z.length; i++) {
        element = z[i];
        file = element.getAttribute('include-html');
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {element.innerHTML = this.responseText;}
                    if (this.status == 404) {element.innerHTML = 'Page not found.';}
                    element.removeAttribute('include-html');
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}

function openNav() {
    if (document.getElementById('sidenav').style.width != "200px") {
        document.getElementById("sidenav").style.width = "200px";
    } else {
        document.getElementById("sidenav").style.width = "0";
    }
}
  
/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

function closeShoutout() {
    document.getElementById('shoutout').remove();
}

function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

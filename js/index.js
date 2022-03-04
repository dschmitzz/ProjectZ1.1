getStylesheet();

// alert(window.innerWidth);

// flip between light/dark mode
function getStylesheet() {
    var currentTime = new Date().getHours();
    if (0 <= currentTime && currentTime < 7 || 18 <= currentTime && currentTime < 24) {
     document.write("<link rel='stylesheet' href='/css/dark.css' type='text/css'>");
    }
    else {
     document.write("<link rel='stylesheet' href='/css/light.css' type='text/css'>");
    }
}

function highlight(type) {
    alert(document.getElementById('test').value);
    var inputText = document.getElementById("inputText");
    inputText.innerHTML = document.getElementById('test').value;
    var innerHTML = inputText.innerHTML;
    var index = innerHTML.indexOf(text);
    for (i = 0; i <= innerHTML.length; i++) {
        if (innerHTML.charAt(index) > 0 && innerHTML.charAt(index) <= 9) {
            alert('hai');
            // alert(innerHTML.charAt(index));
            innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+1) + "</span>" + innerHTML.substring(index + 1);
            inputText.innerHTML = innerHTML;
            // i++;
        }
    }
}

// for adding the header and footer
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

// open and close the navigation menu
function openNav() {
    let screenWidth = window.innerWidth;
    // alert(screenWidth);
    // alert('width = ' + document.getElementById('sidenav').style.width);
    if (document.getElementById('sidenav').style.width == "0px" || document.getElementById('sidenav').style.width == '') {
        if (screenWidth < 600) {
            document.getElementById('sidenav').style.width = '100%';
            document.getElementById('sidenav').style.height = '100%';
        } else {
            document.getElementById('sidenav').style.width = '200px';
        }
    } else {
        // alert('nah');
        document.getElementById('sidenav').style.width = '0';
    }
}

function openOutline() {
    if (document.getElementById('skills').style.width == '0px') { // open outline
        document.getElementById('skills').style.width = '220px';
        document.getElementById('tab').innerHTML = '&#x25c0'; // <--
        document.getElementById('hide').style.display = 'block';
        setTimeout(function() {
            document.getElementById('hide').style.opacity = 1;
        }, 100);
        document.getElementById('tab').style = "transform: translate(2px, 80px);";
    } else { // close outline
        document.getElementById('skills').style.width = '0';
        document.getElementById('tab').innerHTML = '&#x25b6'; // -->
        document.getElementById('hide').style.display = 'none';
        document.getElementById('tab').style.translateX = '-2px';
        setTimeout(function() {
            document.getElementById('hide').style.opacity = 0;
        }, 100);
        // document.getElementById('tab').style = "transform: translate(0,-140px);";
    }
}
  
// Set the width of the side navigation to 0 -- kinda useless ngl
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

function closeShoutout() {
    document.getElementById('shoutout').remove();
}

const femaleNames = ['Betty', 'Bab', 'Jan'];
const maleNames = ['Billy', 'Bob', 'Joe'];
function getName(gender) {
    if (gender='m') {
        return maleNames[rand(0,maleNames.length)];
    } else {
        return femaleNames[rand(0, femaleNames.length)];
    }
}

function loadExample(example, proc) {
    if (document.getElementById(example).style.display != 'block') {
        document.getElementById(example).style.display = 'block';
        document.getElementById(proc).style.maxWidth = '45%';
        document.getElementById(example).style.maxWidth = '45%';
        alert(prev.innerHTML);
        return;
    }
    document.getElementById(example).style.display = 'none';
    document.getElementById(proc).style.maxWidth = '91%';
}

// random integer number generator between a and b
function rand(min, max) {
    Math.floor((Math.random() * (max - min + 1)) + max);
}

// goddam mess
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

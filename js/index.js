getStylesheet();

// alert(window.innerWidth);

// MATH

// calculate a combination nCr "n choose r" without repetition
function combination(n, r) {
    return factorial(n) / (factorial(r)*factorial(n-r));
}

// takes in integer n and returns n * (n - 1) * (n - 2) * ...
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else if (n > 1) {
        return n * factorial(n - 1);
    }
    return -1;
}

// calculate permutation nPr, number of r-size arrangements of n elements
function permutation(n, r) {
    return factorial(n) / factorial(n-r);
}

// random integer number generator between a and b
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// PAGE FORMATTING

// flip between light/dark mode
function getStylesheet() {
    var currentTime = new Date().getHours();
    if (7 <= currentTime && currentTime < 20) document.write("<link rel='stylesheet' href='/css/light.css' type='text/css'>");
    else document.write("<link rel='stylesheet' href='/css/dark.css' type='text/css'>")
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
        } else document.getElementById('sidenav').style.width = '200px';
    } else document.getElementById('sidenav').style.width = '0px';
}

function openOutline() {
    if (document.getElementById('skills').style.width == '0px') { // open outline
        document.getElementById('skills').style.width = '240px';
        document.getElementById('tab').innerHTML = '&#x25c0'; // <--
        document.getElementById('hide').style.display = 'block';
        // document.getElementById('hide').style.width = '100%';
        setTimeout(function() {
            document.getElementById('hide').style.opacity = 1;
        }, 100);
    } else { // close outline
        document.getElementById('skills').style.width = '0';
        document.getElementById('tab').innerHTML = '&#x25b6'; // -->
        document.getElementById('hide').style.display = 'none';
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

function resize(id) {
    document.getElementById(id).style.width = ((document.getElementById(id).value.length + 1) * 8 + 20) + 'px';
}

const femaleNames = ['Amelia', 'Ava', 'Betty', 'Bab', 'Charlotte', 'Emma', 'Isabella', 'Jan', 'Mia', 'Olivia', 'Sophia'];
const maleNames = ['Billy', 'Bob', 'James', 'John', 'Joe', 'Robert'];
function getName(gender) {
    if (gender == 'm') {
        return maleNames[rand(0, maleNames.length - 1)];
    } else {
        return femaleNames[rand(0, femaleNames.length - 1)];
    }
}

function loadex(example, proc) {
    var screenWidth = window.innerWidth;
    // fix the look of the opening animation so it just fades in without starting below
    if (document.getElementById(example).style.display != 'block') {
        if (screenWidth > 1000) {
            document.getElementById(proc).style.maxWidth = '45%';
            document.getElementById(example).style.maxWidth = '45%';
        } else {
            document.getElementById(example).style.maxWidth = '91%';
        }
        setTimeout(event => {
            document.getElementById(example).style.display = 'block';
        }, 0);
        return;
    }
    document.getElementById(example).style.display = 'none';
    document.getElementById(proc).style.maxWidth = '91%';
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


const constants = new Map([['Avogadro\'s number', 6.022e23], ['pi', 3.14159], ['speed of light', 2.998]]);

console.log(constants['pi'])
class Election {
    constructor(candidates) {
        this.candidates = candidates;
    }
}
const uspe2016 = new Election([['Republican', 'Donald Trump'], ['Democrat', 'Hillary Clinton'], ['']]);

// close nav menu by clicking outside of it
document.addEventListener('click', function(element) {
    if (element.target.nodeName != "A" && (element.target.id == 'menu' || (element.target.id != 'sidenav' && document.getElementById('sidenav').style.width != '0px' && document.getElementById('sidenav').style.width != ''))) openNav();
})
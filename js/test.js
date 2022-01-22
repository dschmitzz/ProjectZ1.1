document.body.onload = addElement();

function addElement() {
    var newDiv = document.createElement('div');
    var newContent = document.createTextNode('Hi there and greetings!');
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementById('div1');
    document.body.insertBefore(newDiv, currentDiv[0]);
}

function myFunction() {
    var newItem = document.createElement('li');
    var textnode = document.createTextNode('Water');
    newItem.appendChild(textnode);
    var list = document.getElementById('myList');
    list.insertBefore(newItem, list.childNodes[2]);
}
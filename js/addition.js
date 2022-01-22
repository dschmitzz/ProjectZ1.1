difficulty = 5;
function getNumbers() {
    document.getElementById('answer').select();
    document.getElementById('msg').innerHTML = "Calculate the sum..."
    document.getElementById('num1').innerHTML = Math.floor(Math.random() * (difficulty + 1));
    document.getElementById('num2').innerHTML = Math.floor(Math.random() * (difficulty + 1));
}


function check() {
    var num1 = Number(document.getElementById('num1').innerHTML);
    var num2 = Number(document.getElementById('num2').innerHTML);
    var answer = Number(document.getElementById('answer').value);
    if (answer == num1 + num2) {
        document.getElementById('msg').innerHTML = 'Correct!';
        difficulty++;	
        setTimeout(function(){ 
            getNumbers();
        }, 1000);
    } else {
        document.getElementById('msg').innerHTML = 'Try again...';
        if (difficulty > 0) {
            difficulty--;
        }
    }
    document.getElementById('mastery').innerHTML = difficulty;
}

window.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        check();
    }
});


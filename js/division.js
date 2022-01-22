difficulty = 5;
function getNumbers() {
    document.getElementById('answer').select();
    document.getElementById('msg').innerHTML = "Calculate the quotient...";
    var divisor = Math.floor(Math.random() * (difficulty + 1) + 1);
    var quotient = Math.floor(Math.random() * (difficulty + 1));
    var dividend = divisor * quotient;
    document.getElementById('divisor').innerHTML = divisor;
    document.getElementById('dividend').innerHTML = dividend;
}


function check() {
    var dividend = Number(document.getElementById('dividend').innerHTML);
    var divisor = Number(document.getElementById('divisor').innerHTML);
    quotient = dividend / divisor;
    var answer = Number(document.getElementById('answer').value);
    if (answer == quotient) {
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
}

window.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        check();
    }
});


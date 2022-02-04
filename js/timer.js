var taken = false;
part = 1;
times = [10, 20, 30, 40, 50, 60, 75, 90, 105, 120];
questions = ["What's 2 + 4?",
"What is 2/4 to 2 decimal places?",
"What is (2/4)<sup>4/2</sup> to 2 decimal places?",
"What is 4log<sub>2</sub>2?"];
answers = [6,.5,.25,4];
today = new Date();

function countdown() {
    if (taken) {
        return;
    }
    if (today.getHours() <= 7 || today.getHours() >= 19) {
        document.getElementById('countdown').style.color = 'white';
    } else {
        document.getElementById('countdown').style.color = 'black';
    }
    timeleft = times[part - 1];
    document.getElementById('countdown').innerHTML = timeleft;
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('prompt').innerHTML = 'Part ' + part;
    document.getElementById('countdown').style.display = 'flex';
    document.getElementById('question').innerHTML = questions[part - 1];
    document.getElementById('answer').innerHTML = "<input id='answer1' type='number' style='text-align:center'>";
    document.getElementById('answer1').select();
    document.getElementById('submit').innerHTML = "<button type='submit' onclick='submit()'>Submit</button>";    
}

var downloadTimer = setInterval(function(){
    timeleft--;
    if (timeleft <= .3*times[part - 1]) {
        document.getElementById('countdown').style.color = 'rgb(238, 114, 114)';
    }
    document.getElementById("countdown").textContent = timeleft;
    
    if(timeleft <= 0) {
        clearInterval(downloadTimer);
        end('time');
    }
        
},1000); 


function submit() {
    var answer = document.getElementById('answer1');
    if (answer.value.trim() == answers[part - 1]) {
        // await new Promise(resolve => setTimeout(resolve, 1000));
        part++; 
        if (part == 5) {
            end('win');
            return;
        }
    } else { 
        end('wrong');
    }
    countdown();
}

function end(status) {
    switch (status) {
        case 'wrong': 
            // document.getElementById('challenge').innerHTML = 'Sorry, that&apos;s incorrect. <br><br>' + corrections[part - 1] + '<br><br>You made it to Part ' + Part + '!';
            document.getElementById('challenge').innerHTML = 'Sorry, that&apos;s incorrect.<br>' + "You made it to part " + part + '!';
            break;
        case 'time': 
            //document.getElementById('challenge').innerHTML = "Time's up! <br><br>" + corrections[part - 1] + "<br><br>You made it to part " + Part + '!';
            document.getElementById('challenge').innerHTML = "Time's up!<br>" + "You made it to part " + part + '!';
            break;
        case 'win':document.getElementById('challenge').innerHTML = 'Congratulations! You completed all parts of the challenge.';
            break;
        default: 
            document.getElementById('challenge').innerHTML = 'Challenge over :/';
    }
    // document.getElementById('challenge').innerHTML += "<div><button onclick='results()'>Results</button></div>";
    taken = true;
}

function results() {
    if (part > questions.length) {
        part = questions.length;     
    }
    challenge = document.getElementById('challenge');
    challenge.innerHTML = 'You made it to Part ' + part + '!';
    // challenge.innerHTML += '<p>Time remaining: ' + timeleft + ' seconds </p>';
}

window.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && this.document.getElementById('answer1').value != '') {
        event.preventDefault();
        submit();
    }
});  

// questions = ["What's 2 + 3?",
// "What is 2/3 to 2 decimal places?", 
// "What is (2/3)<sup>3/2</sup> to 3 decimal places?",
// "What is 3log<sub>2</sub>2?"];
// answers = [5, .67, .544, 3];

// questions = ["What's 2 + 2?", 
// 'What is 2<sup>5</sup>?', 
// 'Sum up the prime numbers between 1 and 22, inclusive.', 
// 'Sum up the composite numbers between 1 and 22, inclusive.', 
// 'What is 2022<sub>10</sub> + 1011<sub>2</sub>?<br>Answer in binary.'];
// timeSplits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// answers = [4, 32, 77, 175, 11111100110];
// corrections = ['Recall that 2 + 2 = 4.', 
// '2<sup>5</sup> is equal to 2*2*2*2*2 = 4*2*2*2 = 8*2*2 = 16*2 = 32.', 
// 'A prime number is only divisible by 1 and itself.<br>1 is not prime by definition.<br>The prime numbers from 1 to 22 are 2, 3, 5, 7, 11, 13, 17, and 19.<br>2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 = 77.', 
// 'A composite number can be divided by a whole number besides 1 and itself.<br>1 is defined as neither prime nor composite.<br>The composite numbers from 1 to 22 are 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, and 22.<br>4 + 6 + 8 + 9 + 10 + 12 + 14 + 15 + 16 + 18 + 20 + 21 + 22 = 175.', 
// 'Wrong'];
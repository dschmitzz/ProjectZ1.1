function playKeyboard(){

	let pressColor = '#1BC0EA'; //color when key is pressed


	var isMobile = !!navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
	if(isMobile) { var evtListener = ['touchstart', 'touchend']; } else { var evtListener = ['mousedown', 'mouseup']; }

	var __audioSynth = new AudioSynth();
	__audioSynth.setVolume(0.5);
	var __octave = 4; //sets position of middle C, normally the 4th octave
	

	// Key bindings, notes to keyCodes.
	var keyboard = {
			
			/* ~ */
			192: 'C,-2',

			/* 1 */
			49: 'C#,-2',

			/* 2 */
			50: 'D,-2',

			/* 3 */
			51: 'D#,-2',

			/* 4 */
			52: 'E,-2',

			/* 5 */
			53: 'F,-2',

			/* 6 */
			54: 'F#,-2',

			/* 7 */
			55: 'G,-2',

			/* 8 */
			56: 'G#,-2',

			/* 9 */
			57: 'A,-2',

			/* 0 */
			48: 'A#,-2',

			/* - */
			189: 'B,-2',

			/* = */
			187: 'C,-1',

			/* Q */
			81: 'C#,-1',

			/* W */
			87: 'D,-1',

			/* E */
			69: 'D#,-1',

			/* R */
			82: 'E,-1',

			/* T */
			84: 'F,-1',

			/* Y */
			89: 'F#,-1',

			/* U */
			85: 'G,-1',

			/* I */
			73: 'G#,-1',

			/* O */
			79: 'A,-1',

			/* P */
			80: 'A#,-1',

			/* [ */
			219: 'B,-1',

			/* ] */
			221: 'C,0',

			/* A */
			65: 'C#,0',

			/* S */
			83: 'D,0',

			/* D */
			68: 'D#,0',

			/* F */
			70: 'E,0',

			/* G */
			71: 'F,0',

			/* H */
			72: 'F#,0',

			/* J */
			74: 'G,0',

			/* K */
			75: 'G#,0',

			/* L */
			76: 'A,0',

			/* ; */
			186: 'A#,0',

			/* " */
			222: 'B,0',
			

			/* Z */
			90: 'C,1',

			/* X */
			88: 'C#,1',

			/* C */
			67: 'D,1',

			/* V */
			86: 'D#,1',

			/* B */
			66: 'E,1',

			/* N */
			78: 'F,1',

			/* M */
			77: 'F#,1',

			/* , */
			188: 'G,1',

			/* . */
			190: 'G#,1',

			/* / */
			191: 'A,1',

			/* <- */
			37: 'A#,1',

			/* -> */
			39: 'B,1',
		
		};
	
	var reverseLookupText = {};
	var reverseLookup = {};

	// Create a reverse lookup table.
	for(var i in keyboard) {
	
		var val;

		switch(i|0) { //some characters don't display like they are supposed to, so need correct values
		
			case 187: //equal sign
				val = 61; //???
				break;
			
			case 219: //open bracket
				val = 91; //left window key
				break;
			
			case 221: //close bracket
				val = 93; //select key
				break;
			
			case 188://comma
				val = 44; //print screen
				break;
			//the fraction 3/4 is displayed for some reason if 190 wasn't replaced by 46; it's still the period key either way
			case 190: //period
				val = 46; //delete
				break;
			
			default:
				val = i;
				break;
			
		}
	
		reverseLookupText[keyboard[i]] = val;
		reverseLookup[keyboard[i]] = i;
	
	}

	// Keys you have pressed down.
	var keysPressed = [];

	// Generate keyboard
	let visualKeyboard = document.getElementById('keyboard');
	let selectSound = {
		value: "0" //piano
	};

	var iKeys = 0;
	var iWhite = 0;
	var notes = __audioSynth._notes; //C, C#, D....A#, B

	for(var i=-2;i<=1;i++) {
		for(var n in notes) {
			if(n[2]!='b') {
				var thisKey = document.createElement('div');
				if(n.length>1) { //adding sharp sign makes 2 characters
					thisKey.className = 'black key'; //2 classes
					thisKey.style.width = '30px';
					thisKey.style.height = '120px';
					thisKey.style.left = (40 * (iWhite - 1)) + 25 + 'px';
				} else {
					thisKey.className = 'white key';
					thisKey.style.width = '40px';
					thisKey.style.height = '200px';
					thisKey.style.left = 40 * iWhite + 'px';
					iWhite++;
				}

				var label = document.createElement('div');
				label.className = 'label';

				let s = getDispStr(n,i,reverseLookupText);

				label.innerHTML = '<b class="keyLabel">' + s + '</b>' + '<br /><br />' + n.substr(0,1) +
					'<span name="OCTAVE_LABEL" value="' + i + '">' + (__octave + parseInt(i)) + '</span>' + (n.substr(1,1)?n.substr(1,1):'');
				thisKey.appendChild(label);
				thisKey.setAttribute('ID', 'KEY_' + n + ',' + i);
				thisKey.addEventListener(evtListener[0], (function(_temp) { return function() { fnPlayKeyboard({keyCode:_temp}); } })(reverseLookup[n + ',' + i]));
				visualKeyboard[n + ',' + i] = thisKey;
				visualKeyboard.appendChild(thisKey);
				
				iKeys++;
			}
		}
	}

	visualKeyboard.style.width = iWhite * 40 + 'px';

	window.addEventListener(evtListener[1], function() { n = keysPressed.length; while(n--) { fnRemoveKeyBinding({keyCode:keysPressed[n]}); } });
	
var lastPlayed = null;
var lastComputerPlayed = null;

var difficulty = 0;
var score = -1;
const noteSet = ['C', 'C#', 'D', 'D#','E', 'F','F#', 'G', 'G#','A', 'A#', 'B'];
const minNoteCode = 24;
const maxNoteCode = 71;

// Detect keypresses, play notes.
	function fnPlayKeyboard(e) {
		var i = keysPressed.length;
		while (i--) {
			if (keysPressed[i] == e.keyCode) {
				return false;
			}
		}
		keysPressed.push(e.keyCode);

		if (keyboard[e.keyCode]) {
			if (visualKeyboard[keyboard[e.keyCode]]) {
				visualKeyboard[keyboard[e.keyCode]].style.backgroundColor = pressColor;
				//visualKeyboard[keyboard[e.keyCode]].classList.add('playing'); //adding class only affects keypress and not mouse click
				visualKeyboard[keyboard[e.keyCode]].style.marginTop = '5px';
				visualKeyboard[keyboard[e.keyCode]].style.boxShadow = 'none';
			}
			var arrPlayNote = keyboard[e.keyCode].split(',');
			var note = arrPlayNote[0];
			var octaveModifier = arrPlayNote[1] | 0;
			fnPlayNote(note, __octave + octaveModifier);
		} else {
			return false;
		}

	}
	// Remove key bindings once note is done.
	var fnRemoveKeyBinding = function(e) {
	
		var i = keysPressed.length;
		while(i--) {
			if(keysPressed[i]==e.keyCode) {
				if(visualKeyboard[keyboard[e.keyCode]]) {
					//visualKeyboard[keyboard[e.keyCode]].classList.remove('playing');
					visualKeyboard[keyboard[e.keyCode]].style.backgroundColor = '';
					visualKeyboard[keyboard[e.keyCode]].style.marginTop = '';
					visualKeyboard[keyboard[e.keyCode]].style.boxShadow = '';
				}
				keysPressed.splice(i, 1);
			}
		}
	
	}

	// plays a note from a noteCode
	var fnPlayNoteCode = function(noteCode) {
		var note = noteSet[noteCode % 12];
		var octave = Math.floor(noteCode / 12);
		fnPlayAudio(note, octave);
	}

	var getMin = function(noteCode) {
		if (noteCode - difficulty < minNoteCode) {
			return minNoteCode;
		}
		return noteCode - difficulty;
	}

	var getMax = function(noteCode) {
		if (noteCode + difficulty > maxNoteCode) {
			return maxNoteCode
		}
		return noteCode + difficulty;
	}

	var getNoteCode = function(note, octave) {
		return octave*12 + noteSet.indexOf(note);
	}

	// Generates audio for pressed note and returns that to be played
	var fnPlayNote = function(note, octave) {
		noteCode = getNoteCode(note, octave);
		src = __audioSynth.generate(selectSound.value, note, octave, 2);
		container = new Audio(src);
		container.addEventListener('ended', function() { container = null; });
		container.addEventListener('loadeddata', function(e) { e.target.play(); });
		container.autoplay = false;
		container.setAttribute('type', 'audio/wav');
		container.load();
		lastPlayed = note + octave;
		document.getElementById("lastPlayed").innerHTML = lastPlayed;
		if (lastComputerPlayed == null || lastPlayed == lastComputerPlayed) {
			document.getElementById('prompt').innerHTML = "Good job!";
			score++;
			newMin = getMin(noteCode);
			newMax = getMax(noteCode);
			newNoteCode = Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
			while (![2, 4, 7, 9, 11].includes(newNoteCode % 12)) {
				newNoteCode = Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
			}
			setTimeout(function(){ 
				if (difficulty < 12) {
					difficulty++;	
				}
				fnPlayNoteCode(newNoteCode);
				document.getElementById("prompt").innerHTML = "Play what you hear....";
				//document.getElementById('prompt').innerHTML = noteCode;
			}, 1000);
		}
		else if (noteCode > getNoteCode(lastComputerPlayed.slice(0, -1), lastComputerPlayed.slice(-1))){
			document.getElementById('prompt').innerHTML = "Lower...";
			if (difficulty > 0) {
				difficulty--;
			}
			score = 0;
		}
		else if (noteCode < getNoteCode(lastComputerPlayed.slice(0, -1), lastComputerPlayed.slice(-1))) {
			document.getElementById('prompt').innerHTML = "Higher...";
			if (difficulty > 0) {
				difficulty--;
			}
			score = 0;
		} else {
			document.getElementById('prompt').innerHTML = "yo somethings wrong, this code sux. Refresh";
		}
		//document.getElementById('difficulty').innerHTML = difficulty;
		document.getElementById('score').innerHTML = score;
		return container;
	
	};

	// generates audio for notes the computer plays
	var fnPlayAudio = function(note, octave) {
		noteCode = noteSet.indexOf(note) + 12*octave;
	//	document.getElementById('prompt').innerHTML = noteCode;
		src = __audioSynth.generate(selectSound.value, note, octave, 2);
		container = new Audio(src);
		container.addEventListener('ended', function() {container = null;});
		container.addEventListener('loadeddata', function(e) {e.target.play();});
		container.autoplay = false;
		container.setAttribute('type', 'audio/wav');
		container.load();
		lastComputerPlayed = note + octave;
		document.getElementById("lastComputerPlayed").innerHTML = lastComputerPlayed;
		return container;
	};

	//returns correct string for display
	function getDispStr(n,i,lookup) {

		if(n=='C' && i==-2){
			return "~";
		}else if(n=='B' && i==-2){
			return "-";
		}else if(n=='A#' && i==0){
			return ";";
		}else if(n=='B' && i==0){
			return "\"";
		}else if(n=='A' && i==1){
			return "/";
		}else if(n=='A#' && i==1){
			return "<-";
		}else if(n=='B' && i==1){
			return "->";
		}else{
			return String.fromCharCode(lookup[n + ',' + i]);
		}

	}
	window.addEventListener('keydown', fnPlayAudio);
	window.addEventListener('keyup', fnRemoveKeyBinding);
	document.getElementById("replay").addEventListener("click", function() {
		fnPlayAudio(lastComputerPlayed[0], lastComputerPlayed[1]);
	  });
}
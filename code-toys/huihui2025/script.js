
// General
var html = document.getElementsByTagName("html")[0];

// Login
var loginWrapper = document.getElementById("login-wrapper");

// Icons
var icons = document.getElementsByClassName("icon");
var emailIcon = document.getElementById("email-icon");

// Email
var emailWrapper = document.getElementById("email-wrapper");
var messages = document.getElementsByClassName("message");

// Message Selectors
var birthdayMessageSelector = document.getElementById("birthday-message-selector");
var ingridMessageSelector = document.getElementById("ingrid-message-selector");

var envelope = document.getElementById("envelope");
var letterWrapper = document.getElementById("letter-wrapper");

// Buttons
var loginBtn = document.getElementById("login-btn");
var backBtns = document.getElementsByClassName("back-btn");

// Audio
var soundBtns = document.getElementsByClassName("sound-btn")
var pop = document.getElementById("pop");
var popLoud = document.getElementById("pop-loud");
var popPitchedDown = document.getElementById("pop-pitched-down");
var forestAmbience = document.getElementById("forest-ambience");
var touchLetter = document.getElementById("touch-letter");
var openLetter = document.getElementById("open-letter");


/* Initialisation ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

// Login
loginBtn.onclick = function() { Hide_Login(); }

// Email
emailIcon.onclick = function() { Open_Email(); }
birthdayMessageSelector.onclick = function() { Show_Message("birthday"); }
ingridMessageSelector.onclick = function() { Show_Message("ingrid"); }

// Letter
envelope.onclick = function() { Show_Letter(); }

// Back Buttons
for(i = 0; i < backBtns.length; i++) {
	// Email Wrapper
	if (backBtns[i].id == "email-back") {
		backBtns[i].onclick = function() { Hide_EmailWindow(true); }
	}
	// Letter
	else if(backBtns[i].id == "letter-back") {
		backBtns[i].onclick = function() { Hide_Letter(); }
	}

	backBtns[i].onmouseover = function() { Play_Pop(); }
}

// Audio

Adjust_AudioVolume();

for(i = 0; i < soundBtns.length; i++) {

	soundBtns[i].onmouseover = function() { Play_Pop(); }

	if(soundBtns[i].id == "trash") {
		soundBtns[i].onmouseover = function() { Play_Pop(); }
		soundBtns[i].onclick = function() { Play_Pop_PitchedDown(); }
	}
	else if(soundBtns[i].id == "envelope") {
		soundBtns[i].onmouseover = function() { Play_TouchLetter(); }
	}
	else if(soundBtns[i].id != "envelope") {
		soundBtns[i].onclick = function() { Play_PopLoud(); }
	}
}


/* Login ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


function Hide_Login() {
	loginWrapper.style.display = "none";
	Play_PopLoud();
	Play_ForestAmbience();
}


/* Email ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


function Open_Email() {
	emailWrapper.style.display = "flex";
}


function Show_Message(topic) {

	for(let i = 0; i < messages.length; i++) {

		if(messages[i].id == topic) {
			messages[i].style.display = "flex";

		} else {
			messages[i].style.display = "none";
		}

	}
}


function Hide_Messages() {
	for(i = 0; i < messages.length; i++) {
		messages[i].style.display = "none";
	}
}


function Hide_EmailWindow(playPop) {

	emailWrapper.style.display = "none";

	Hide_Messages();

	if(!playPop) {
		return;
	}

	Play_Pop_PitchedDown();
}


/* Letter ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


function Show_Letter() {
	letterWrapper.style.display = "flex";
	Hide_EmailWindow(false);
	Play_OpenLetter();
}


function Hide_Letter() {
	letterWrapper.style.display = "none";
	Play_Pop_PitchedDown();
}


/* Audio ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


function Adjust_AudioVolume() {
	pop.volume = 0.5;
	popPitchedDown.volume = 0.75;
	forestAmbience.volume = 0.125;
}


function Play_Pop() {
	pop.play();
}


function Play_PopLoud() {
	popLoud.play();
}


function Play_Pop_PitchedDown() {
	popPitchedDown.play();
}


function Play_ForestAmbience() {
	forestAmbience.play();
}

function Play_TouchLetter() {
	touchLetter.play();
}

function Play_OpenLetter() {
	openLetter.play();
}

// General
var html = document.getElementsByTagName("html")[0];

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
var backBtns = document.getElementsByClassName("back-btn");

// Audio
var soundBtns = document.getElementsByClassName("sound-btn")
var pop = document.getElementById("pop");
var popLoud = document.getElementById("pop-loud");


/* Initialisation ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

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
		backBtns[i].onclick = function() { Hide_EmailWindow(); }
	}
	// Letter
	if (backBtns[i].id == "letter-back") {
		backBtns[i].onclick = function() { Hide_Letter(); }
	}
}

// Audio
for(i = 0; i < soundBtns.length; i++) {
	soundBtns[i].onmouseover = function() { Play_Pop(); }

	if(soundBtns[i].id != "envelope") {
		soundBtns[i].onclick = function() { Play_PopLoud(); }
	}
}


/* Functions ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


function Open_Email() {
	emailWrapper.style.display = "flex";
}


function Show_Message(topic) {

	for(let i = 0; i < messages.length; i++) {

		if(messages[i].id == topic) {
			messages[i].style.display = "block";

		} else {
			messages[i].style.display = "none";
		}

	}
}


function Show_Letter() {
	letterWrapper.style.display = "flex";
	Hide_EmailWindow();
	Play_PopLoud();
}


function Hide_Letter() {
	letterWrapper.style.display = "none";
}


function Hide_EmailWindow() {
	emailWrapper.style.display = "none";	
}


function Play_Pop() {
	pop.play();
}


function Play_PopLoud() {
	popLoud.play();
}
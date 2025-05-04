
// General
var html = document.getElementsByTagName("html")[0];

// Login
var loginWrapper = document.getElementById("login-wrapper");

// Icons
var icons = document.getElementsByClassName("icon");
var emailIcon = document.getElementById("email-icon");
var galleryIcon = document.getElementById("gallery-icon");

// Window
var windowWrapper = document.getElementsByClassName("window-wrapper")[0];

// Email
var emailWindow = document.getElementById("email-window");
var messages = document.getElementsByClassName("message");

// Gallery
var galleryWindow = document.getElementById("gallery-window");
var galleryZoomWrapper = document.getElementById("gallery-zoom-wrapper");
var galleryZoom = document.getElementById("gallery-zoom");
var photos = document.getElementsByClassName("photo");
var stickyPhoto = document.getElementById("sticky-photo");

// Message Selectors
var birthdayMessageSelector = document.getElementById("birthday-message-selector");
var ingridMessageSelector = document.getElementById("ingrid-message-selector");
var shupeeMessageSelector = document.getElementById("shupee-message-selector");

// Letter
var envelope = document.getElementById("envelope");
var letterWrapper = document.getElementById("letter-wrapper");
var letterShown = false;

// Milo
var miloChooser = document.getElementById("milo-chooser");
var sandwichSelector = document.getElementById("sandwich-selector");
var rotiSelector = document.getElementById("roti-selector");
var pengSelector = document.getElementById("peng-selector");
// Pet
var petWrapper = document.getElementById("pet-wrapper");
var pet = document.getElementsByClassName("pet")[0];
var petImage = document.getElementById("pet-image");

// Buttons
var loginBtn = document.getElementById("login-btn");
var backBtns = document.getElementsByClassName("back-btn");

// Audio
var soundBtns = document.getElementsByClassName("sound-btn");
var soundDulls = document.getElementsByClassName("sound-dull");
var pop = document.getElementById("pop");
var popLoud = document.getElementById("pop-loud");
var popDull = document.getElementById("pop-dull");
var forestAmbience = document.getElementById("forest-ambience");
var touchLetter = document.getElementById("touch-letter");
var openLetter = document.getElementById("open-letter");


/* Initialisation ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

// Page Load
document.getElementsByTagName("body")[0].onload = function() {
	html.style.opacity = "1";
}

// Login
loginBtn.onclick = function() { Hide_Login(); }


// Email
emailIcon.onclick = function() { Open_Email_First(); }
birthdayMessageSelector.onclick = function() { Show_BirthdayMessage_First(); }
ingridMessageSelector.onclick = function() { Show_Message("ingrid"); }
shupeeMessageSelector.onclick = function() { Show_Message("shupee"); }


// Gallery
galleryIcon.onclick = function() { Open_Gallery(); }

for(i = 0; i < photos.length; i++) {
	photos[i].onmouseover = function() { Play_Pop(); }
	photos[i].onclick = function() { Open_GalleryZoomWrapper(this.id); }
}


galleryZoom.onclick = function() { Hide_GalleryZoomWrapper(); }


galleryZoom.onmouseover = function() { Play_TouchLetter(); }


stickyPhoto.onmouseover = function() { Play_TouchLetter(); }


// Letter
envelope.onclick = function() { Show_Letter(); }


// Milo
sandwichSelector.onclick = function() { Spawn_Sandwich(); }
sandwichSelector.onmouseover = function() { Play_Pop(); }


rotiSelector.onclick = function() { Spawn_Roti(); }
rotiSelector.onmouseover = function() { Play_Pop(); }

pengSelector.onclick = function() { Spawn_Peng(); }
pengSelector.onmouseover = function() { Play_Pop(); }


// Back Buttons
for(i = 0; i < backBtns.length; i++) {
	// Email Wrapper
	if (backBtns[i].id == "email-back") {
		backBtns[i].onclick = function() { Hide_EmailWindow(true); }
	}
	// Gallery
	else if(backBtns[i].id == "gallery-back") {
		backBtns[i].onclick = function() { Hide_GalleryWindow(); }
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
		// soundBtns[i].onclick = function() { Play_Dull(); }
	}
	else if(soundBtns[i].id == "envelope") {
		soundBtns[i].onmouseover = function() { Play_TouchLetter(); }
	}
	else if(soundBtns[i].id != "envelope") {
		soundBtns[i].onclick = function() { Play_PopLoud(); }
	}
}


for(i = 0; i < soundDulls.length; i++) {
	soundDulls[i].onclick = function() { Play_Dull(); }
}


/* Login ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


function Hide_Login() {
	loginWrapper.style.display = "none";
	Play_PopLoud();
	Play_ForestAmbience();
}


/* Email ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


function Open_Email_First() {
	Open_Email();
	emailIcon.classList.remove("heart");
	emailIcon.onclick = function() { Open_Email(); }
}


function Open_Email() {
	windowWrapper.style.display = "flex";
	emailWindow.style.display = "block";
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


function Show_BirthdayMessage_First() {
	Show_Message("birthday");
	birthdayMessageSelector.classList.remove("heart");
	birthdayMessageSelector.onclick = function() { Show_Message("birthday"); }
}


function Hide_Messages() {
	for(i = 0; i < messages.length; i++) {
		messages[i].style.display = "none";
	}
}


function Hide_EmailWindow(playPop) {

	windowWrapper.style.display = "none";
	emailWindow.style.display = "none";

	Hide_Messages();

	if(!playPop) {
		return;
	}

	Play_Dull();
}


/* Gallery ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


function Open_Gallery() {
	windowWrapper.style.display = "flex";
	galleryWindow.style.display = "flex";
}


function Hide_GalleryWindow() {
	windowWrapper.style.display = "none";
	galleryWindow.style.display = "none";
	Play_Dull();
}


// Zoom


function Open_GalleryZoomWrapper(photoID) {

	Hide_GalleryWindow();

	if(photoID == "photo-1") {
		stickyPhoto.style.backgroundImage = "url('media/Photo-1.png')";
		galleryZoom.style.backgroundImage = "url('media/Photo-1.png')";
	}
	else if(photoID == "photo-2") {
		stickyPhoto.style.backgroundImage = "url('media/Photo-2.png')";
		galleryZoom.style.backgroundImage = "url('media/Photo-2.png')";
	}
	else if(photoID == "photo-3") {
		stickyPhoto.style.backgroundImage = "url('media/Photo-3.png')";
		galleryZoom.style.backgroundImage = "url('media/Photo-3.png')";
	}
	else if(photoID == "photo-4") {
		stickyPhoto.style.backgroundImage = "url('media/Photo-4.png')";
		galleryZoom.style.backgroundImage = "url('media/Photo-4.png')";
	}

	galleryZoomWrapper.style.display = "flex";

	Play_PopLoud();
}


function Hide_GalleryZoomWrapper() {
	galleryZoomWrapper.style.display = "none";
	Play_PopLoud();
}


/* Letter ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


function Show_Letter() {
	letterWrapper.style.display = "flex";
	Hide_EmailWindow(false);
	Play_OpenLetter();
}


function Hide_Letter() {
	letterWrapper.style.display = "none";
	Play_Dull();

	if(letterShown) {
		return;
	}

	letterShown = true;

	Show_MiloChooser();
}


/* Milo ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


var leftLimit = 0;
var rightLimit = petWrapper.offsetWidth - pet.offsetWidth;
var petDir = 1;
var facingRight = true;
var moveSpeed = 10;
var frameRate = 500;


function Show_MiloChooser() {
	miloChooser.style.display = "flex";
}


function Spawn_Sandwich() {
	miloChooser.style.display = "none";

	petImage.classList.add("sandwich");
	petImage.classList.add("walk-sandwich");
	
	moveSpeed = 8;
	frameRate = 250;
	
	Start_PetWalk();
	Play_PopLoud();
}


function Spawn_Roti() {
	miloChooser.style.display = "none";

	petImage.classList.add("roti");
	petImage.classList.add("walk-roti");
	
	moveSpeed = 6;
	frameRate = 200;
	
	Start_PetWalk();
	Play_PopLoud();
}


function Spawn_Peng() {
	miloChooser.style.display = "none";

	petImage.classList.add("peng");
	petImage.classList.add("walk-peng");
	
	moveSpeed = 2;
	frameRate = 100;
	
	Start_PetWalk();
	Play_PopLoud();
}


function Show_PetWrapper() {
	petWrapper.style.display = "block";
}


function Start_PetWalk() {
	Show_PetWrapper();
	// Start and Repeat PetWalk()
	var interval_PetWalk = setInterval(PetWalk, frameRate);
}


function PetWalk() {

	var nextPos = pet.offsetLeft + petDir * moveSpeed;
	
	// Flip at Left
	if(nextPos <= 0) {
		petDir *= -1;
		pet.style.transform = "scaleX(1)";
		return;
	}

	// Flip at Right
	if(nextPos >= petWrapper.offsetWidth - pet.offsetWidth) {
		petDir *= -1;
		pet.style.transform = "scaleX(-1)";
		return;
	}

	pet.style.left = nextPos + "px";

}


/* Audio ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


function Adjust_AudioVolume() {
	pop.volume = 0.5;
	popDull.volume = 0.75;
	forestAmbience.volume = 0.125;
}


function Play_Pop() {
	pop.play();
}


function Play_PopLoud() {
	popLoud.play();
}


function Play_Dull() {
	popDull.play();
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

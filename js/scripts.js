// const rem = getComputedStyle(document.querySelector("body")).getPropertyValue("font-size");


/* Glow ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


const glowBoxContainer = document.querySelector(".glow");
const glowBox = document.querySelector("#glow");

var rotSpeed = 4;
var currRot = 0;
var infiniteRotate = null;


glowBoxContainer.onmouseenter = function() { 
	GlowBox_On();
}


glowBoxContainer.onmouseleave = function() { 
	GlowBox_Off();
}


function Rotate() {
	currRot += rotSpeed;
	glowBox.style.rotate = currRot + "deg";
}


function GlowBox_On() {
	glowBox.style.transform = "scale(2.5)";
	glowBox.style.filter = "blur(.2rem)";
	glowBox.style.borderRadius = ".9rem";
	rotSpeed *= 16;
}


function GlowBox_Off() {
	glowBox.style.transform = "scale(1.0)";
	glowBox.style.filter = "blur(0)";
	glowBox.style.borderRadius = "0";
	rotSpeed /= 16;
}


/* Rings ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


const ringsContainer = document.querySelector(".rings");
const ringsContainerSize = [ringsContainer.offsetWidth, ringsContainer.offsetHeight]
const firstRing = document.querySelector(".ring");
const ringCount = 1;
var rings = [];
const mouseCatcher = document.querySelector(".mouse-catcher");

var mainInterval_Rings = [];

var ringIntervals = [];

function Prep_Rings() {

	firstRing.style.zIndex = ringCount;
	
	// mouseCatcher.onmousemove = function(e) { Move_Rings(e); }
	

	for(i = 1; i < ringCount; i++) {

		let newRing = firstRing.cloneNode(true);

	// 	var newScale = ringCount + 1 - i;
	// 	newRing.style.transform = "scale(" + newScale + ")";
	// 	newRing.style.zIndex = i;
	// 	newRing.style.opacity = 1 - (ringCount - i) * 0.25;

		ringsContainer.appendChild(newRing);
		// rings.push(newRing);
	}

	rings.push(firstRing);
	// rings.reverse();

	mouseCatcher.onmouseenter = function() { Start_M(); }
	mouseCatcher.onmouseleave = function() { C(); }
}

function Start_M() {
	rings.push(firstRing);
	console.log(rings.length);
	// var speed = 1;
	for(i = 0; i < rings.length; i++) {
		// speed -= 0.125;
		var interval = setInterval(function() { M(rings[i]); }, 500);
		ringIntervals.push(interval);
		// console.log(ringIntervals);
	}
	// console.log(ringIntervals.length);
}

function M(ring) {
	console.log("Hi");
	console.log(ring);
}

function C() {
	// console.log(ringIntervals.length);
}


function Move_Rings(event) {
	let mousePos = [event.offsetX, event.offsetY];
	for(i = 0; i < rings.length; i++) {
		Move_Ring(mousePos,rings[i]);
	}
}


function Move_Ring(mousePos, ring) {
	let ringSize = [ring.offsetWidth, ring.offsetHeight];
	ring.style.left = mousePos[0] - ringSize[0] / 2 + "px";
	ring.style.top = mousePos[1] - ringSize[1] / 2 + "px";
}


Prep_Rings();


/* Bubble ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


const contentsBubble = document.querySelector(".contents.bubble");
const bubble = document.querySelector("#bubble");
const bubbleText = document.querySelector("#bubble-text");
const bubbleBG_Holder = document.querySelector("#bubble-bg-holder");
const bubbleBG = document.querySelector("#bubble-bg");

contentsBubble.onmouseenter = function() { Change_BubbleText("Maybe a time of miracles."); }
bubble.onclick = function() { Change_BubbleText("Definitely."); }
contentsBubble.onmouseleave = function() { Change_BubbleText(""); }


Resize_Bubble_BG();


function Change_BubbleText(text) {

	bubbleText.style.opacity = 0;
	bubbleBG.style.boxShadow = "0 .25rem .25rem rgba(0, 0, 0, 0)";

	setTimeout(function() {
		bubbleText.innerHTML = text;
		Resize_Bubble_BG();
	}, 250);

	setTimeout(function() {
		bubbleText.style.opacity = 1;
		bubbleBG.style.boxShadow = "0 .25rem .25rem rgba(0, 0, 0, .125)";
	}, 500);
}


function Resize_Bubble_BG() {
	const rem = 16;
	bubbleBG.style.width = bubble.offsetWidth + (rem * 4) + "px";
	bubbleBG.style.height = bubble.offsetHeight + (rem * 3) + "px";
	bubbleBG.style.top = -bubble.offsetHeight / 2 - (rem * 1.5) + "px";
	bubbleBG.style.left = -bubble.offsetWidth / 2 - (rem * 2) + "px";

	bubbleBG_Holder.style.top = bubble.offsetHeight / 2 + "px";
	bubbleBG_Holder.style.left = bubble.offsetWidth / 2 + "px";
}


/* Illuminations ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


const bodyWidth = document.body.offsetWidth;

const illumMover = document.querySelector(".illum-row-mover");
const illumRow = document.querySelector(".illum-row");
const illumRowWidth = illumRow.offsetWidth;
const rowCount = Math.round(bodyWidth / illumRowWidth);

var illumLeft = 0;
const illumSpeed = .125;

var illumInterval = null;


function Prep_Illuminations() {
	// Create Cell Rows
	for(i = 0; i < rowCount * 2; i++) {
		let newRow = illumRow.cloneNode(true);
		illumMover.appendChild(newRow);
	}

	// Position Mover
	illumLeft = -illumRowWidth;
	// Fade in Illuminations
	document.querySelector(".illuminations").style.opacity = 1;
}


function MoveRow() {
	illumLeft += illumSpeed;

	if(illumLeft >= 0) {
		illumLeft = -illumRowWidth;
	}

	illumMover.style.left = illumLeft + "px";
}


/* Initialisation ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


Start();


function Start() {
	// Glow
	infiniteRotate = setInterval(Rotate, 100);
	// Illuminations
	Prep_Illuminations();
	illumInterval = setInterval(MoveRow, 20);
	// Rings
	// Prep_Rings();
}
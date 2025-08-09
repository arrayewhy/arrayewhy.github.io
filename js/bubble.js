"use strict"

const contentsBubble = document.querySelector(".contents.bubble");
const bubble = document.querySelector("#bubble");
const bubbleText = document.querySelector("#bubble-text");
const bubbleBG_Holder = document.querySelector("#bubble-bg-holder");
const bubbleBG = document.querySelector("#bubble-bg");

const lines = [
	"When I am working on a problem,",
	"I never think about beauty",
	"but when I am finished,",
	"if the solution is not beautiful,",
	"I know it is wrong.",
	"R. Buckminster Fuller"
]
let currLine = 0;

let bubbling;

contentsBubble.onmouseenter = function() { Progress_BubbleText(); }
bubble.onclick = function() { Progress_BubbleText(); }
contentsBubble.onmouseleave = function() { Change_BubbleText_And_BG("", true); }

// Force text container size change to prevent 
// unexplained 'snapping' on first interaction.
bubbling = true;
bubbleText.innerHTML = lines[0];
Change_BubbleText_And_BG("");


/* Functions ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


function Progress_BubbleText() {

	if (bubbling) {
		return;
	}

	bubbling = true;

	let text = bubbleText.innerHTML;

	if (text == "") {
		text = lines[0];
		Change_BubbleText_And_BG(text);
		return;
	}
	else if (currLine == lines.length - 1) {
		Change_BubbleText_And_BG("");
		currLine = 0;
		return;
	}

	currLine += 1;
	text = lines[currLine];
	// text += "<br/>" + lines[currLine];

	Change_BubbleText_And_BG(text);
}


function Change_BubbleText_And_BG(text, reset) {

	if (reset) {
		currLine = 0;
	}

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

	setTimeout(function() {
		bubbling = false;
	}, 750);
}


function Resize_Bubble_BG() {

	// const rem = 16;
	const rem = () => window.offsetWidth <= 768 ? 10 : 16;

	bubbleBG.style.width = bubble.offsetWidth + (rem() * 4) + "px";
	bubbleBG.style.height = bubble.offsetHeight + (rem() * 3) + "px";
	bubbleBG.style.top = -bubble.offsetHeight / 2 - (rem() * 1.5) + "px";
	bubbleBG.style.left = -bubble.offsetWidth / 2 - (rem() * 2) + "px";

	bubbleBG_Holder.style.top = bubble.offsetHeight / 2 + "px";
	// bubbleBG_Holder.style.left = bubble.offsetWidth / 2 + "px";
}
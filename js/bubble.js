const contentsBubble = document.querySelector(".contents.bubble");
const bubble = document.querySelector("#bubble");
const bubbleText = document.querySelector("#bubble-text");
const bubbleBG_Holder = document.querySelector("#bubble-bg-holder");
const bubbleBG = document.querySelector("#bubble-bg");

contentsBubble.onmouseenter = function() { Change_BubbleText("Maybe a time of miracles."); }
bubble.onclick = function() { Change_BubbleText("Definitely."); }
contentsBubble.onmouseleave = function() { Change_BubbleText(""); }

Resize_Bubble_BG();


/* Functions ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


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
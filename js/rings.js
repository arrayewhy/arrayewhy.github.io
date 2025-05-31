const firstRing = document.querySelector(".ring");
const mouseCatcher = document.querySelector(".mouse-catcher");
var rings_mousePos = [0, 0];

var ringInterval;

Prep_Rings();


/* Functions ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


function Prep_Rings() {

	mouseCatcher.onmousemove = function(e) {
		// Get Mouse Position
		Set_MousePos_Rings(e);
		// Start
		if(ringInterval == null) {
			Rings_Start();
		}
	}
}

function Set_MousePos_Rings(event) {
	rings_mousePos = [event.offsetX, event.offsetY];
}

function Rings_Start() {
	let speed = .25;
	ringInterval = setInterval(
		function() { Move_Ring(firstRing, speed); }, 
		50
	);
}

function Move_Ring(ring, speed) {

	let ringPos = [
		ring.offsetLeft - (ring.offsetWidth / 6), 
		ring.offsetTop - (ring.offsetHeight / 6)
	];

	let rawDir = [
		rings_mousePos[0] - ringPos[0], 
		rings_mousePos[1] - ringPos[1]
	]

	let nextX = (ringPos[0] + rawDir[0] * speed);
	ring.style.left = nextX + "px";

	let nextY = (ringPos[1] + rawDir[1] * speed);
	ring.style.top = nextY + "px";
}
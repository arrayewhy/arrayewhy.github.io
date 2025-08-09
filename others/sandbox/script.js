let body = document.querySelector("body");
let viewport = document.querySelector(".viewport");

let target = document.querySelector(".target");
let startPoint = [target.offsetLeft, target.offsetTop];

let radius = 128;

let time = 0;

viewport.onmousemove = function(event) { MoveBodyInArc(event); }

/* Functions ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

function MoveBodyInArc(event) {

	// Mouse Pos
	let mousePos = [event.offsetX, event.offsetY];

	// Raw Direction
	let rawDir = [mousePos[0] - startPoint[0], mousePos[1] - startPoint[1]
	];

	// Distance
	let dist = Math.sqrt(rawDir[0] * rawDir[0] + rawDir[1] * rawDir[1]);

	// Normalize Direction
	let normDir = [rawDir[0] / dist, rawDir[1] / dist];

	// Scale by Radius
	normDir = [normDir[0] * radius, normDir[1] * radius]

	// Position Player
	target.style.left = startPoint[0] + normDir[0] + "px";
	target.style.top = startPoint[1] + normDir[1] + "px";
}
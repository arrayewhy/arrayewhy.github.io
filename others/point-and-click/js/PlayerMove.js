let protagonist = document.querySelector("#protagonist");
let moveSpeed = 4;
let allowedGap = 10;

let interval_Move_Player;

mouseCatcher.onclick = function(e) { Try_PlayerMove(e); }


/* Functions ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


function Try_PlayerMove(event) {
	// Mouse Position
	let mousePos = [event.offsetX, event.offsetY];

	Start_PlayerMove(mousePos);
}


function Start_PlayerMove(targPos) {

	// Restart Move if Started again
	if(interval_Move_Player != null) {
		Stop_Move_Player();
	}

	interval_Move_Player = setInterval(
		function() { Move_Player(targPos); }
		, 33.333
	);
}


function Move_Player(targPos) {

	// Directional Distance
	let rawDir = [
		targPos[0] - protagonist.offsetLeft, 
		targPos[1] - protagonist.offsetTop
	];

	// Distance from Destination
	let dist = Vector_Length_Tool(rawDir);
	
	// Check for Stop
	if(dist <= allowedGap) {
		Stop_Move_Player();
		// console.log("DEBUG: Complete: Player Move");
		return;
	}

	// Direction
	let dir = [rawDir[0] / dist, rawDir[1] / dist];

	// Next Step
	let nextStep = [
		protagonist.offsetLeft + dir[0] * moveSpeed, 
		protagonist.offsetTop + dir[1] * moveSpeed
	]

	// Check Colliders

	let colEdge = Point_On_Col_Edge(nextStep, targPos);

	if(colEdge == null) {
		protagonist.style.left = nextStep[0] + "px";
		protagonist.style.top = nextStep[1] + "px";
		return;
	}

	console.log(colEdge);

	Stop_Move_Player();
	// Start_PlayerMove(colEdge);

	// Check Colliders
	// if(Point_On_Col_Edge(nextStep)) {
	// 	Stop_Move_Player();
	// 	return;
	// }

	// Position Player
	// protagonist.style.left = nextStep[0] + "px";
	// protagonist.style.top = nextStep[1] + "px";
}

function Stop_Move_Player() {
	clearInterval(interval_Move_Player);
}
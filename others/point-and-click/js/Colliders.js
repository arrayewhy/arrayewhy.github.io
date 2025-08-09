let colliders = document.querySelectorAll(".collider");
let currCol;

let editingCol;

let changed;

let DEBUG_Colliders;
DEBUG_Colliders = true;

for(let i = 0; i < colliders.length; i++) {
	colliders[i].onclick = function() { Start_Edit_Col(colliders[i]); }
}


/* Functions ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


function Point_On_Col_Edge(pos, targPos) {

	for(let i = 0; i < colliders.length; i++) {

		let col = colliders[i];

		if(
			Within_Col_Left(pos[0], col) && // Right of Left Edge
			Within_Col_Right(pos[0], col) && // Left of Right Edge
			Within_Col_Top(pos[1], col) && // Below Top Edge
			Within_Col_Bottom(pos[1], col) // Above Bottom Edge
			)
		{
			if(DEBUG_Colliders) col.style.backgroundColor = "orange";

			// Get Closest Corner
			let closeCorner_Player = Get_Col_ClosestCorner(pos, col);

			// let rawDir = [closeCorner_Player[0] - pos[0], closeCorner_Player[1] - pos[1]];
			// let dist = Vector_Length_Tool(rawDir);

			return closeCorner_Player;

			// let edgePoint;

			// return edgePoint;
		}

		if(DEBUG_Colliders) col.style.backgroundColor = "red";
	}

	return null;
}


function Within_Col_Left(x, col) {
	return x > col.offsetLeft;
}
function Within_Col_Right(x, col) {
	return x < col.offsetLeft + col.offsetWidth;
}
function Within_Col_Top(y, col) {
	return y > col.offsetTop;
}
function Within_Col_Bottom(y, col) {
	return y < col.offsetTop + col.offsetHeight;
}


function Get_Col_ClosestCorner(pos, col) {

	let corners = [
		[col.offsetLeft, col.offsetTop], // Top Left
		[col.offsetLeft + col.offsetWidth, col.offsetTop], // Top Right
		[col.offsetLeft, col.offsetTop + col.offsetHeight], // Bottom Left
		[col.offsetLeft + col.offsetWidth, col.offsetTop + col.offsetHeight] // Bottom Right
	]

	let closest;
	let closeCorner;

	for(let i = 0; i < corners.length; i++) {

		let rawDir = [corners[i][0] - pos[0], corners[i][1] - pos[1]];

		let dist = Vector_Length_Tool(rawDir);

		if(i == 0 || dist < closest) {
			closest = dist;
			closeCorner = corners[i];
		}
	}

	return closeCorner;
}


/* Editing ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


function Start_Edit_Col(col) {

	if(editingCol) {
		return;
	} else {
		editingCol = true;
	}

	currCol = col;

	html.onkeydown = function(e) { Move_Col(e); }

	// Mark as Editing
	currCol.style.backgroundColor = "green";
}


function Move_Col(event) {

	// Up
	if(event.code == "KeyW") {
		currCol.style.top = currCol.offsetTop + -5 + "px";
		changed = true;
		return;
	}
	// Down
	else if(event.code == "KeyS") {
		currCol.style.top = currCol.offsetTop + 5 + "px";
		changed = true;
		return;
	}
	// Left
	else if(event.code == "KeyA") {
		currCol.style.left = currCol.offsetLeft - 5 + "px";
		changed = true;
		return;
	}
	// Right
	else if(event.code == "KeyD") {
		currCol.style.left = currCol.offsetLeft + 5 + "px";
		changed = true;
		return;
	}
	// Exit
	else if(event.code == "Escape" || event.code == "Enter") {
		Stop_Edit_Col();
	}
}


function Stop_Edit_Col() {

	// Colour Collider according to Change
	if(changed) {
		currCol.style.backgroundColor = "blue";
		changed = false;
	} else {
		currCol.style.backgroundColor = "red";
	}

	html.onkeydown = null;

	currCol = null;
	editingCol = false;
}
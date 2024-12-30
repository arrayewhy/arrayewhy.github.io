// START - GameBoy JS

var screenSize = 500;
var pTop = 0;
var pLeft = 0;

function Move_Up() {
	if (pTop == 0) {
		return;
	}
	pTop -= 10;
	player.style.top = pTop + "%";
}

function Move_Down() {
	if (pTop == 90) {
		return;
	}
	pTop += 10;
	player.style.top = pTop + "%";
}

function Move_Left() {
	if (pLeft == 0) {
		return;
	}
	pLeft -= 10;
	player.style.left = pLeft + "%";
}

function Move_Right() {
	if (pLeft == 90) {
		return;
	}
	pLeft += 10;
	player.style.left = pLeft + "%";
}

// END - GameBoy JS

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// START - Animated Frame

function Show_Borders(topSide, rightSide, btmSide, leftSide) {
	topSide.style.top = "0";
	rightSide.style.right = "0";
	btmSide.style.bottom = "0";
	leftSide.style.left = "0";
}

function Hide_Borders(topSide, rightSide, btmSide, leftSide) {
	rightSide.style.right = -50 + "px";
	topSide.style.top = -50 + "px";
	btmSide.style.bottom = -50 + "px";
	leftSide.style.left = -50 + "px";
}

// END - Animated Frame

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// START - Grid Nodes

var nodeSize = 10;
var leftPosArray = [];
var topPosArray = [];

function CreateRows() {
	var currY = 30;
	var currFrontID = 0;
	for(var i = 0; i < 17; i++) {
		CreateRow(currY, currFrontID);
		currFrontID += 17;
		currY += 15;
	}
	// console.log(leftPosArray);
	// console.log(rightPosArray);

}

function CreateRow(posY, nodeID) {
	var currX = 30;
	var currID = nodeID;
	for(var i = 0; i < 17; i++) {
		CreateNode(currX, posY, currID);
		currID++;
		currX += 15;
	}
}

function CreateNode(posX, posY, nodeID) {
	var node = document.createElement("div");
	node.id = nodeID;
	
	leftPosArray.push(posX);
	topPosArray.push(posY);

	node.onmouseenter = function() { Expand(node); }
	node.onmouseleave = function() { Shrink(node); }
	node.onclick = function() { Pop(node); }

	node.style.width = nodeSize + "px";
	node.style.height = nodeSize + "px";

	node.style.position = "absolute";
	node.style.left = posX - (nodeSize / 2) + "px";
	node.style.top = posY - (nodeSize / 2) + "px";

	gridFrame.appendChild(node);
}

var scaleFactor = 4;

function Expand(e) {
	e.style.width = nodeSize * scaleFactor + "px";
	e.style.height = nodeSize * scaleFactor + "px";
	e.style.left = leftPosArray[e.id] - (nodeSize * scaleFactor / 2) + "px";
	e.style.top = topPosArray[e.id] - (nodeSize * scaleFactor / 2) + "px";
}

function Shrink(e) {
	e.style.width = nodeSize + "px";
	e.style.height = nodeSize + "px";
	e.style.left = leftPosArray[e.id] - (nodeSize / 2) + "px";
	e.style.top = topPosArray[e.id] - (nodeSize / 2) + "px";
}

function Pop(e) {
	e.remove();

}

// END - Grid Nodes
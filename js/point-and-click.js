var idleSpriteFrames_Path = "url(../img/Shelter_Animation_Idle.png)";
var runSpriteFrames_Path = "url(../img/Shelter_Animation_Run.png)";

var cellSize = 20;
var cellsX = 48;
var cellsY = 27;

// CreateCellRows(cellsY, cellsX);
// CreatePlayer(screen.offsetHeight/2, screen.offsetWidth/2);
// Initialize_PlayerSprite(player.childNodes);
// Set_PlayerSprite_Idle(playerSprite);

function CreateCellRows(rowCount, colCount) {
	var currTop = 0;
	for(var i = 0; i < rowCount; i++) {
		CreateCellRow(currTop, colCount);
		currTop += cellSize;
	}
}

function CreateCellRow(top, colCount) {
	var currLeft = 0;
	for(var i = 0; i < colCount; i++) {
		CreateCell(top, currLeft);
		currLeft += cellSize;
	}
}

function CreateCell(top, left) {
	var newCell = document.createElement("div");
	newCell.classList.add("cell");

	newCell.style.width = cellSize + "px";
	newCell.style.height = cellSize + "px";
	newCell.style.left = left + "px";
	newCell.style.top = top + "px";

	screen.appendChild(newCell);

	newCell.onclick = function() { Start_MovePlayer(newCell.style.left, newCell.style.top); }
}

function CreatePlayer(top, left) {
	player.style.width = cellSize + "px";
	player.style.height = cellSize + "px";
	player.style.left = left + "px";
	player.style.top = top + "px";
}

var speed = 1;
var maxChange = 80;
var gapAllow = 20;
var moving = false;
var facingRight = false;

var moveInteral = null;
var runAnimInterval = null;
var currFrameOffset = 0;

function Start_MovePlayer(left, top) {
	if(!moving) {
		moving = true;
		clearInterval(runAnimInterval);
		AdvanceSpriteFrame_Run(playerSprite, currFrameOffset);
		runAnimInterval = setInterval(function() { AdvanceSpriteFrame_Run(playerSprite, currFrameOffset); }, 166.666);
	} else {
		clearInterval(moveInteral);
	}
	console.log("moving: " + moving);

	Set_PlayerSprite_Run(playerSprite);

	MovePlayer(left, top);
	moveInteral = setInterval(function() { MovePlayer(left, top) }, 500);
}

function MovePlayer(left, top) {
	var gapX = parseFloat(left) - player.offsetLeft;
	var gapY = parseFloat(top) - player.offsetTop;

	var dirX = 0;
	if(gapX > 0) {
		dirX = 1;
	} else {
		dirX = -1;
	}

	var dirY = 0;
	if(gapY > 0) {
		dirY = 1;
	} else {
		dirY = -1;
	}

	// Flip Sprite

	if(dirX > 0 && !facingRight) {
		playerSprite.style.transform = "scaleX(-1)";
		facingRight = true;
	} else if(dirX < 0 && facingRight) {
		playerSprite.style.transform = "scaleX(1)";
		facingRight = false;
	}

	var changeX = gapX * dirX;
	if(changeX > maxChange) {
		changeX = maxChange;
		// player.style.transition = "1s ease-out";
	}
	var changeY = gapY * dirY;
	if(changeY > maxChange) {
		changeY = maxChange;
		// player.style.transition = "1s ease-out";
	}

	player.style.left = player.offsetLeft + changeX * dirX * speed + "px";
	player.style.top = player.offsetTop + changeY * dirY * speed + "px";

	if(gapX * dirX > gapAllow || gapY * dirY > gapAllow) {
		return;
	}

	moving = false;
	console.log("moving: " + moving);
	Set_PlayerSprite_Idle(playerSprite);

	clearInterval(moveInteral);
	clearInterval(runAnimInterval);
	currFrameOffset = 0;
}

// START - Sprites and Animation

function Initialize_PlayerSprite(playerChildren) {
	for(var i = 0; i < playerChildren.length; i++) {
		if(playerChildren[i].className == "sprite") {
			playerSprite = playerChildren[i];
		}
	}
}

function Set_PlayerSprite_Idle(pSprite) {
	pSprite.style.backgroundImage = idleSpriteFrames_Path;
	// pSprite.style.backgroundSize = "auto 64px";
}

function Set_PlayerSprite_Run(pSprite) {
	pSprite.style.backgroundImage = runSpriteFrames_Path;
	// pSprite.style.backgroundSize = "auto 64px";
}

function AdvanceSpriteFrame_Run(pSprite, val) {
	pSprite.style.backgroundPosition = val + "px";
	currFrameOffset += 64;
}
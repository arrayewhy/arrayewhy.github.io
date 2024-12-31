var idleSpriteFrames_Path = "url(../../img/Shelter_Animation_Idle.png)";
var runSpriteFrames_Path = "url(../../img/Shelter_Animation_Run.png)";

var cellSize = 20;
var cellsX = 48;
var cellsY = 27;

var cellIds = null;
var currCellId = 0;
var approvedIds = [ 891, 890, 938, 939, 987, 986, 988, 889, 841, 840, 792, 793, 794, 842, 744, 745, 746, 1035, 1036, 1084, 1083, 1131, 1132, 1180, 1181, 1133, 1085, 
	1182, 1230, 1229, 1228, 1276, 1277, 1278, 1231, 1183, 1134, 1086, 1037, 989, 696, 648, 649, 697, 600, 599, 647, 695, 551, 552, 550, 598, 646, 502, 454, 406, 503, 
	455, 358, 553, 601, 698, 554, 506, 505, 507, 508, 555, 602, 650, 603, 795, 843, 844, 892, 940, 941, 893, 894, 942, 990, 1038, 943, 991, 1039, 1087, 1135, 1279, 
	1232, 1136, 1088, 1184, 1089, 1040, 1128, 1177, 1129, 1130, 1178, 1179, 1227, 1226, 1274, 1275, 1080, 1032, 984, 985, 1033, 1034, 1082, 1081, 937, 936, 888, 483, 
	435, 436, 484, 485, 533, 534, 486, 535, 487, 536, 537, 538, 539, 540, 541, 488, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 549, 548, 542, 641, 
	640, 642, 643, 644, 645, 556, 1041, 1042, 1090, 1137, 743, 791 ];

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

	if(!approvedIds.includes(currCellId)) {
		currCellId++
		return;
	}

	newCell.id = currCellId;
	// newCell.innerText = currCellId;
	currCellId++;

	newCell.classList.add("cell");

	newCell.style.width = cellSize + "px";
	newCell.style.height = cellSize + "px";
	newCell.style.left = left + Math.random() + "px";
	newCell.style.top = top + Math.random() + "px";

	screen.appendChild(newCell);

	newCell.onclick = function() { Start_MovePlayer(this); }
}

function CreatePlayer(top, left) {
	player.style.width = cellSize + "px";
	player.style.height = cellSize + "px";
	player.style.left = left + "px";
	player.style.top = top + "px";
}

var pps = 64;
var maxChange = 80;
var gapAllow = 2;
var moving = false;
var facingRight = false;

var moveInteral = null;
var runAnimInterval = null;
var currFrameOffset = 0;
var checkDistInterval = null;
var checkFreq = 4;

function Start_MovePlayer(target) {
	var tPos = [target.offsetLeft, target.offsetTop];
	if(!moving) {
		moving = true;
		checkDistInterval = setInterval(function() { CheckDist(tPos[0], tPos[1]); }, 1000 / checkFreq);
		// clearInterval(runAnimInterval);
		Set_PlayerSprite_Run(playerSprite);
		AdvanceSpriteFrame_Run(playerSprite, currFrameOffset);
		runAnimInterval = setInterval(function() { AdvanceSpriteFrame_Run(playerSprite, currFrameOffset); }, 166.666);
	}
		// MovePlayer(tPos[0], tPos[1]);
		// clearInterval(moveInteral);
	
	// console.log("moving: " + moving);

	// Set_PlayerSprite_Run(playerSprite);

	MovePlayer(tPos[0], tPos[1]);
	// moveInteral = setInterval(function() { MovePlayer(left, top) }, 500);
}

function MovePlayer(left, top) {
	var dirGapX = left - player.offsetLeft;
	var dirGapY = top - player.offsetTop;
	// var dirGapX = parseFloat(left) - player.offsetLeft;
	// var dirGapY = parseFloat(top) - player.offsetTop;

	var dirX = 0;
	if(dirGapX > 0) {
		dirX = 1;
	} else {
		dirX = -1;
	}

	var dirY = 0;
	if(dirGapY > 0) {
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

	// var changeX = dirGapX * dirX;
	// if(changeX > maxChange) {
	// 	changeX = maxChange;
	// }
	// var changeY = dirGapY * dirY;
	// if(changeY > maxChange) {
	// 	changeY = maxChange;
	// }

	var gap = [Math.abs(dirGapX), Math.abs(dirGapY)];

	var dist = Math.sqrt(gap[0] * gap[0] + gap[1] * gap[1]);
	console.log(gap);
	player.style.left = parseFloat(left) + "px";
	player.style.top = parseFloat(top) + "px";

	// console.log(player.style.left, player.style.top);

	player.style.transition = dist/pps + "s linear";

	// player.style.left = player.offsetLeft + changeX * dirX * pps + "px";
	// player.style.top = player.offsetTop + changeY * dirY * pps + "px";

	// if(dirGapX * dirX > gapAllow || dirGapY * dirY > gapAllow) {
	// 	return;
	// }

	// if(dist > gapAllow) {
	// 	return;
	// }

	// moving = false;
	// console.log("moving: " + moving);
	// Set_PlayerSprite_Idle(playerSprite);

	// clearInterval(moveInteral);
	// clearInterval(runAnimInterval);
	// currFrameOffset = 0;
}

function CheckDist(left, top) {
	var dirGapX = parseFloat(left) - player.offsetLeft;
	var dirGapY = parseFloat(top) - player.offsetTop;

	var gap = [Math.abs(dirGapX), Math.abs(dirGapX)];

	var dist = Math.sqrt(gap[0] * gap[0] + gap[1] * gap[1]);

	if(dist > gapAllow) {
		return;
	}

	moving = false;
	// console.log("moving: " + moving);
	Set_PlayerSprite_Idle(playerSprite);

	clearInterval(moveInteral);
	clearInterval(runAnimInterval);
	clearInterval(checkDistInterval);
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
	pSprite.style.backgroundPosition = "0";
	pSprite.style.animation = "Anim_Idle 2s infinite steps(2)";
	// pSprite.style.backgroundSize = "auto 64px";
}

function Set_PlayerSprite_Run(pSprite) {
	pSprite.style.backgroundImage = runSpriteFrames_Path;
	pSprite.style.animation = "none";
	// pSprite.style.backgroundSize = "auto 64px";
}

function AdvanceSpriteFrame_Run(pSprite, val) {
	pSprite.style.backgroundPosition = val + "px";
	currFrameOffset += 64;
}
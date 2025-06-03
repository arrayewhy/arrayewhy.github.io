let plickerContentWindow = document.querySelector(".contents.plicker");
let plickerMouseCatcher = document.querySelector(".contents.plicker .mouse-catcher");

let plickerChar = document.querySelector(".contents.plicker .character");
let plickerBody = document.querySelector(".contents.plicker .character .body");
let plickerEye = document.querySelector(".contents.plicker .character .eye");

let moveInterval;

let plicker_moveSpeed = 4;

let plicker_moving;
let facingRight = true;

plickerMouseCatcher.onclick = function(e) { StartMove_Plicker(e.offsetX); }


/* Functions ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


function StartMove_Plicker(x) {

	if(plicker_moving) {
		clearInterval(moveInterval);
	}

	let dir = Math.sign(x - plickerChar.offsetLeft);

	if(dir > 0 && !facingRight) {
		facingRight = true;
		plickerChar.style.transform = "scaleX(1.0)";
	} else if(dir < 0 && facingRight) {
		facingRight = false;
		plickerChar.style.transform = "scaleX(-1.0)";
	}

	plicker_moving = true;

	plickerBody.style.transform = "skew(-10deg)";
	plickerBody.classList.add("anim-Body-Bop");
	plickerEye.style.left = ".5em";
	plickerEye.classList.add("anim-Eye-Bob");


	CheckAndMove_Plicker(x, dir);
	moveInterval = setInterval(
		function() { CheckAndMove_Plicker(x, dir); }, 
		50
	);
}

function CheckAndMove_Plicker(x, dir) {

	let moveVal = plickerChar.offsetLeft + dir * plicker_moveSpeed;

	if(dir > 0 && moveVal >= x) {
		Stop_Plicker();
		return;
	} else if(dir < 0 && moveVal <= x) {
		Stop_Plicker();
		return;
	}

	plickerChar.style.left = moveVal + "px";
}

function Stop_Plicker() {
	plicker_moving = false;
	clearInterval(moveInterval);
	plickerEye.style.left = "-1em";
	plickerBody.style.transform = "skew(0)";
	plickerBody.classList.remove("anim-Body-Bop");
	plickerEye.classList.remove("anim-Eye-Bob");
}
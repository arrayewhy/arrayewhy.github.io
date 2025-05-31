let partyContentWindow = document.querySelector(".contents.party");
let light = document.querySelector("#light");
let bulb = document.querySelector("#light .bulb");
let lightSwitch = document.querySelector("#light .base .switch");

// Shortie
let shortie = document.querySelector("#shortie");
let shortiePupil = document.querySelector("#shortie .eye .pupil");
let shortiePupil_Right = shortiePupil.style.right;
let shortiePupil_Top = shortiePupil.style.top;

// Tallie
let tallie = document.querySelector("#tallie");
let talliePupil = document.querySelector("#tallie .eye .pupil");
let talliePupil_Left = talliePupil.style.left;

let partying;

partyContentWindow.onmouseenter = function() { Start_Party(); }
partyContentWindow.onmouseleave = function() { Stop_Party(); }

light.onclick = function() { BoomBoomBoom(); }
light.onmouseenter = function() { LightSwitch_Ready(); }
light.onmouseleave = function() { LightSwitch_Sleep(); }


/* Functions ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


function Start_Party() {
	light.style.opacity = .5;
	Shortie_Look_Bulb();
	Tallie_Look_Bulb();
}


function Stop_Party() {

	if(partying) {
		No_Boom();
		LightSwitch_Sleep();
	}

	light.style.opacity = .125;
	Shortie_Look_Away();
	Tallie_Look_Away();
}


function LightSwitch_Ready() {
	lightSwitch.style.rotate = "200deg";
}


function LightSwitch_Sleep() {
	lightSwitch.style.transition = "rotate .25s";
	lightSwitch.style.rotate = "160deg";
}


function LightSwitch_On() {
	lightSwitch.style.transition = "0s";
	lightSwitch.style.rotate = "90deg";
}


function BoomBoomBoom() {

	partying = true;

	bulb.style.backgroundColor = "white";
	bulb.style.opacity = 1;
	bulb.style.filter = "blur(.25em)";

	partyContentWindow.style.transition = "0s";
	partyContentWindow.style.transform = "scale(1.03125)";
	partyContentWindow.style.backgroundImage = "radial-gradient(circle, beige, pink)";

	light.style.transition = 0 + "s";
	light.style.opacity = 1;
	light.style.filter = "blur(.0625em)";
	light.onclick = function() { No_Boom(); }
	light.onmouseenter = null;
	light.onmouseleave = null;

	LightSwitch_On();

	shortie.style.backgroundColor = "hotpink";
	shortie.style.boxShadow = "-3em 2em 3em navy";
	tallie.style.backgroundColor = "moccasin";
	tallie.style.boxShadow = "3em 4em 3em navy";
}


function No_Boom() {

	partying = false;

	partyContentWindow.style.transition = "transform .25s";
	partyContentWindow.style.transform = "scale(1.0)";
	partyContentWindow.style.backgroundImage = "";
	partyContentWindow.style.backgroundColor = "black";

	bulb.style.backgroundColor = "white";
	bulb.style.opacity = .75;
	bulb.style.filter = "blur(0)";

	light.style.transition = .5 + "s";
	light.style.opacity = .5;
	light.style.filter = "blur(0)";
	light.onclick = function() { BoomBoomBoom(); }
	light.onmouseenter = function() { LightSwitch_Ready(); }
	light.onmouseleave = function() { LightSwitch_Sleep(); }

	LightSwitch_Ready();

	shortie.style.backgroundColor = "red";
	shortie.style.boxShadow = "";
	tallie.style.backgroundColor = "#ffd54b";
	tallie.style.boxShadow = "";
}


// Shortie


function Shortie_Look_Bulb() {
	shortiePupil.style.right = 0;
	shortiePupil.style.top = 0;
}


function Shortie_Look_Away() {
	shortiePupil.style.right = shortiePupil_Right;
	shortiePupil.style.top = shortiePupil_Top;
}


function Tallie_Look_Bulb() {
	talliePupil.style.left = 0;
}

function Tallie_Look_Away() {
	talliePupil.style.left = talliePupil_Left;
}
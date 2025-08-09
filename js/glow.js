"use strict"

const glowBoxContainer = document.querySelector(".glow");
const glowBox = document.querySelector("#glow");

var rotSpeed = 4;
var currRot = 0;

Prep_Glow();


/* Functions ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


function Rotate() {
	currRot += rotSpeed;
	glowBox.style.rotate = currRot + "deg";
}


function GlowBox_On() {
	glowBox.style.transform = "scale(2.5)";
	glowBox.style.filter = "blur(.2rem)";
	glowBox.style.borderRadius = ".9rem";
	rotSpeed *= 16;
}


function GlowBox_Off() {
	glowBox.style.transform = "scale(1.0)";
	glowBox.style.filter = "blur(0)";
	glowBox.style.borderRadius = "0";
	rotSpeed /= 16;
}

function Prep_Glow() {
	glowBoxContainer.onmouseenter = function() {
		GlowBox_On();
	}
	glowBoxContainer.onmouseleave = function() {
		GlowBox_Off();
	}
}

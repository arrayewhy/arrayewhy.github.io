"use strict"

const bodyWidth = document.body.offsetWidth;

const illumMover = document.querySelector(".illum-row-mover");
const illumRow = document.querySelector(".illum-row");
const illumRowWidth = illumRow.offsetWidth;
const rowCount = Math.round(bodyWidth / illumRowWidth);

var illumLeft = 0;
const illumSpeed = .25;

Prep_Illuminations();


/* Functions ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


function Prep_Illuminations() {
	// Create Cell Rows
	for(let i = 0; i < rowCount * 2; i++) {
		let newRow = illumRow.cloneNode(true);
		illumMover.appendChild(newRow);
	}

	// Position Mover
	illumLeft = -illumRowWidth * rowCount;
	// Fade in Illuminations
	document.querySelector(".illuminations").style.opacity = 1;
}


function MoveRow() {
	illumLeft += illumSpeed;

	if(illumLeft >= 0) {
		illumLeft = -illumRowWidth * rowCount;
	}

	illumMover.style.left = illumLeft + "px";
}
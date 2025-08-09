let html = document.querySelector("html");
// onkeypress: Move_Col();

let viewport = document.querySelector(".viewport");

let mouseCatcher = document.querySelector(".mouse-catcher");
// onclick: Try_PlayerMove(e);


/* Tools ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


function Vector_Length_Tool(vect) {
	return Math.sqrt(vect[0] * vect[0] + vect[1] * vect[1]);
}
// START - Declarations

const htmlElement = document.querySelector('html');
var logoCont = null;

var imp = null;
var drifting = false;

var anchors = document.getElementsByTagName("a");

// END - Declarations

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

window.onload = function() { Start() };
// window.addEventListener('load', Start());

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Start() {

	console.log("Start");

	htmlElement.addEventListener('load', Show_Page(htmlElement));

	logoCont = document.getElementById("logo-cont");

	imp = document.getElementById("imp");
	logoCont.addEventListener('mouseenter', Imp_Drift);
	Imp_Drift();
}

function Show_Page(e) {
	e.style.opacity = "1";
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// START - Imp

function Imp_Drift() {
	if (drifting) {　return;　}

	drifting = true;

	imp.classList.add("DriftRightAnim");

	setTimeout(function() {
		imp.classList.remove("DriftRightAnim");
		drifting = false;
	}, 3000);
}

// END - Imp
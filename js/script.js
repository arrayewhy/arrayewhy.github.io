const htmlElement = document.querySelector('html');
var logoCont = null;

var imp = null;
var drifting = false;

var anchors = document.getElementsByTagName("a");

window.onload = function() {
	htmlElement.onload = Show_Page();

	logoCont = document.getElementById("logo-cont");

	imp = document.getElementById("imp");
	logoCont.onmouseenter = function() { Imp_Drift(); }
	Imp_Drift();
}

function Imp_Drift() {

	if (drifting) {
		return;
	}

	drifting = true;

	imp.classList.add("DriftRightAnim");

	setTimeout(function() {
		imp.classList.remove("DriftRightAnim");
		drifting = false;
	}, 3000);
}

function Show_Page() {
	htmlElement.style.opacity = "1";
}
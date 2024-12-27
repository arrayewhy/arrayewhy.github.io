const htmlElement = document.querySelector('html');

var anchors = document.getElementsByTagName("a");

window.onload = function() {
	htmlElement.onload = Show_Page();

	for(var i = 0; i < anchors.length - 1; i++) {
		anchors[i].onclick = function() { Hide_Page(); }
	}
}

function Show_Page() {
	htmlElement.style.opacity = "1";
}

function Hide_Page() {
	htmlElement.style.transition = ".25s ease";
	htmlElement.style.opacity = "0";
}
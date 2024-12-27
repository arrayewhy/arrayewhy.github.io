const htmlElement = document.querySelector('html');

window.onload = function() {
	htmlElement.onload = Show_Page();
	// document.getElementsByTagName("html").onload = Show_Page(S);
}

function Show_Page() {
	htmlElement.style.opacity = "1";
}
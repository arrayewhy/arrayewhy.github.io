const html = document.querySelector("html");
const body = document.querySelector("body");
const boxes = document.querySelectorAll(".box");

const cu_container = document.querySelector("#close-up-container");
const cu_close_button = document.querySelector("#close-up-container .close-btn");
const cu_loader = document.querySelector("#close-up-container .loader");
const cu_img = document.querySelector("#close-up-container img");
var cu_interval;
var cu_id;

const fade_threshold = 300;

const img_sources = {
	"tea-cup" : "late-2025/media/images/warm-tea-cup-high-res-cropped.png",
	"kettle" : "late-2025/media/images/cozy-kettle-cropped.png",
	"thank-you" : "late-2025/media/images/thank-you.png"
}

const bg_colours = {
	"tea-cup" : "black",
	"kettle" : "#4c7c64",
	"thank-you" : "#f8f7ef"
}

/* Start ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

_Assign_Functions();

/* Initialisation ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

function _Assign_Functions() {
	// Assign Box Clicks
	boxes.forEach(
			function(e) {
				e.onclick = function() { _Show_Close_Up(e.id); }
			}
		);

	cu_close_button.onclick = function() { _Start_Fade_Container_Out(); }

	if (window.innerWidth <= 700) {
		_Assign_Scroll_Fades();
	}
}

function _Assign_Scroll_Fades() {
	body.onscroll = function() {
		_Fade_Boxes();
	}
	_Fade_Boxes();
}

function _Fade_Boxes() {
	boxes.forEach(function(box) {
		if (html.scrollTop - box.offsetTop > -fade_threshold) {
			box.style.opacity = 1;
			return;
		}
		else {
			box.style.opacity = .2;
		}
	})
}

/* Close Up ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

function _Show_Close_Up(id) {

	cu_id = id;

	cu_container.style.top = window.pageYOffset + "px";

	cu_loader.style.display = "block";
	cu_loader.style.opacity = "1";

	cu_container.style.display = "flex";
	cu_container.style.backgroundColor = bg_colours[id];

	html.style.overflow = "hidden";

	_Start_Fade_Container_In();
}

function _Start_Fade_Container_In() {
	cu_interval = setInterval(_Fade_Container_In, 5);
}

function _Fade_Container_In() {
	if (cu_container.style.opacity < 1) {
		_Increase_Opacity(cu_container, 0.02);
	}
	else {
		clearInterval(cu_interval);

		cu_container.style.opacity = 1;

		cu_img.src = img_sources[cu_id];

		_Start_Checking_Image();
	}
}

function _Start_Checking_Image() {
	cu_interval = setInterval(_Check_Image_Loaded, 100);
}

function _Check_Image_Loaded() {
	if (cu_img.complete) {
		clearInterval(cu_interval);
		cu_img.style.display = "block";
		_Start_Fade_Loader_Out();
	}
}

function _Start_Fade_Loader_Out() {
	cu_interval = setInterval(_Fade_Loader_Out, 5);
}

function _Fade_Loader_Out() {
	if (cu_loader.style.opacity > 0) {
		_Increase_Opacity(cu_loader, -0.01);
	}
	else {
		clearInterval(cu_interval);
		cu_loader.style.opacity = 0;
		cu_loader.style.display = "none";
	}
}

function _Start_Fade_Container_Out() {
	html.style.overflow = "initial";
	cu_interval = setInterval(_Fade_Container_Out, 5);
}

function _Fade_Container_Out() {
	if (cu_container.style.opacity > 0) {
		_Increase_Opacity(cu_container, -0.01);
	}
	else {
		clearInterval(cu_interval);
		cu_img.style.display = "none";
		cu_container.style.display = "none";
		cu_container.style.opacity = "0";
	}
}

function _Increase_Opacity(elem, val) {
	elem.style.opacity = Number(elem.style.opacity) + val;
}
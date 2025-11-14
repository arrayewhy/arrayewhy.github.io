const boxes = document.querySelectorAll(".box");

const cu_container = document.querySelector("#close-up-container");
const cu_close_button = document.querySelector("#close-up-container .close-btn");
const cu_loader = document.querySelector("#close-up-container .loader");
const cu_img = document.querySelector("#close-up-container img");
var cu_interval;
var _cu_id;

const img_sources = {
	"tea-cup":"late-2025/media/images/warm-tea-cup-high-res-cropped.png",
	"kettle":"late-2025/media/images/cozy-kettle-cropped.png"
}

_Assign_Functions();

/* Functions ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

function _Assign_Functions() {
	// Assign Box Clicks
	boxes.forEach(
			function(e) {
				e.onclick = function() { _Show_Close_Up(e.id); }
			}
		);

	cu_close_button.onclick = function() { _Hide_Close_Up(); }
}

/* Close Up ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/



function _Show_Close_Up(id) {
	
	cu_loader.style.display = "block";
	cu_loader.style.opacity = "1";

	_cu_id = id;

	cu_container.style.display = "flex";

	_Start_Fade_Container_In();
}

function _Start_Fade_Container_In() {
	cu_interval = setInterval(_Fade_Container_In, 5);
}

function _Fade_Container_In() {
	if (cu_container.style.opacity < 1) {
		_Increase_Opacity(cu_container, 0.01);
	}
	else {
		clearInterval(cu_interval);

		cu_container.style.opacity = 1;

		cu_img.src = img_sources[_cu_id];

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




function _Hide_Close_Up() {
	cu_img.style.display = "none";
	cu_container.style.display = "none";
	cu_container.style.opacity = "0";
}



function _Increase_Opacity(elem, val) {
	elem.style.opacity = Number(elem.style.opacity) + val;
}
const boxes = document.querySelectorAll(".box");
const close_up_container = document.querySelector("#close-up-container");
const close_btn = document.querySelector("#close-up-container .close-btn");
const close_up_img_holder = document.querySelector("#close-up-container img");

const img_sources = {
	"tea-cup":"late-2025/media/images/warm-tea-cup-high-res-cropped.png",
	"kettle":"late-2025/media/images/cozy-kettle-cropped.png"
}

_Assign_Functions();

/* Functions ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

function _Assign_Functions() {
	boxes.forEach(
			function(e) {
				e.onclick = function() { _Show_Close_Up(e.id); }
			}
		);

	close_btn.onclick = function() { _Hide_Close_Up(); }
	close_up_img_holder.onload = function() { alert("Done"); }
}

/* Close Up ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

function _Show_Close_Up(id) {
	close_up_img_holder.src = img_sources[id];
	close_up_container.style.display = "flex";
}

function _Hide_Close_Up() {
	close_up_container.style.display = "none";
}
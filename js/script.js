let _stack_worlds = [
	"media/image/worlds/worlds_1.png",
	"media/image/worlds/worlds_2.png",
	"media/image/worlds/worlds_3.png",
	"media/image/worlds/worlds_4.png"
]
let _stack_little_places = [
	"media/image/little_places/cozy-kettle-low-res.jpg",
	"media/image/little_places/tiger-puff-high-res.png",
	"media/image/little_places/warm-tea-cup-high-res-cropped.png",
	"media/image/little_places/cloud-house-cropped.png"
]
let _stack_s20a = [
	"media/image/s20a/facilities.png",
	"media/image/s20a/parent.png",
	"media/image/s20a/story.png",
	"media/image/s20a/thankyou.png"
]
let STACK_LIBRARY = {
	"worlds": _stack_worlds,
	"little_places": _stack_little_places,
	"s20a": _stack_s20a
}

let _html = document.querySelector('html');
let _body = document.querySelector('body');
let _intro_h1 = document.querySelector('#intro h1');
let _cells = document.querySelectorAll('.cell');
let _image_stacks = document.querySelectorAll('.image-stack');
let _frames = [];

let _image_stack_top_thresh = 300;
const _image_stack_intervals = 60;

let _loading_interval;

/* Functions ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

// TEMPORARY
if (_intro_h1) _Start ();

function _Start() {

	_body.onload = function () {
		_intro_h1.style.opacity = .8;
	}

	// Create Image Frames for each Image Stack
	_image_stacks.forEach(_Create_Image_Frames);

	_loading_interval = setInterval(_Check_Reveals, 100);

	_body.onscroll = function () {
		_image_stacks.forEach(_Show_Hide_Frames);
		_cells.forEach(_Blur);
		_Blur_Title(document.querySelector('#intro'));
	}

	Create_Kid(_body);
}

function _Create_Image_Frames(image_stack) {

	let id = image_stack.id;
	let sources = STACK_LIBRARY[id];

	for (let i = -1; i < sources.length; i++) {

		// Create the Loading element that sitz on top of all the Frames
		if (i == -1) {
			let loader = document.createElement('div');
			loader.classList.add('loader');
			// loader.style.opacity = 0;
			image_stack.appendChild(loader);
			continue;
		}

		// Create the Frame that holds the Image
		let new_frame = document.createElement('var');
		new_frame.style.opacity = 0;
		new_frame.classList.add('frame');

		// Create the Image showing the Artwork
		let new_img = document.createElement('img');
		new_img.src = sources[i];

		// Add the .loading Class used for checking if this frame's Image is Done Loading
		new_frame.classList.add('loading');
		// Make it so when this Image is Done Loading, its Parent sheds the .loading class
		new_img.onload = function () {new_img.parentElement.classList.remove('loading');}

		// Parent the Image to the Frame
		new_frame.appendChild(new_img);
		// Parent the Frame to the Gallery Cell
		image_stack.appendChild(new_frame);

		_frames.push(new_frame);
	}

	// Make the First Image Visible on Start
	image_stack.children[1].style.top = 0;
	image_stack.children[1].style.opacity = 1;
}

function _Check_Reveals() {

	let loaded_frames = 0;

	// For each Image Stack
	for (let i = 0; i < _image_stacks.length; i++) {

		// For each Frame within the Image Stack
		for (let f = 1; f < _image_stacks[i].children.length; f++) {

			if (_image_stacks[i].children[f].classList.contains('loading')) {
				break;
			}

			loaded_frames += 1;
			_image_stacks[i].children[0].style.top = '-100%';
			// _image_stacks[i].children[0].style.opacity = 0;
		}
	}

	if (loaded_frames == _frames.length) {
		clearInterval(_loading_interval);
		_loading_interval = null;
	}
}

function _Show_Hide_Frames(image_stack) {

	let frames = image_stack.children;
	let img_stack_dist_from_top = Object_Distance_from_Viewport_Top(image_stack);

	const top_gap = '10%';

	for (let i = 2; i < frames.length; i++) {

		if (img_stack_dist_from_top + _image_stack_intervals * i < _image_stack_top_thresh) {

			// frames[i].style.top = (2 * i) + 'px';
			frames[i].style.top = 0;
			frames[i].style.opacity = 1;

			// if (frames[i].style.transform == 'rotate(0deg)') {
			// 	frames[i].style.transform = 'rotate(' + _Random_Number(-.5, .5) + 'deg)';
			// }
		} else {

			frames[i].style.top = top_gap;
			frames[i].style.opacity = 0;

			// frames[i].style.transform = 'rotate(0deg)';
		}
	}
}

function _Blur(cell) {
	let obj_dist_from_top = Object_Distance_from_Viewport_Top(cell);
	let blur_thresh = 500;
	if (obj_dist_from_top < blur_thresh) {
		cell.style.filter = 'blur(0)';
	} else {
		cell.style.filter = 'blur(.2rem)';
	}
}

function _Blur_Title(title) {

	let obj_dist_from_top = Object_Distance_from_Viewport_Top(title);
	let blur_thresh = -50;

	if (obj_dist_from_top < blur_thresh) {
		// title.style.filter = 'blur(.1rem)';
		title.style.opacity = '.3';
	} else {
		// title.style.filter = 'blur(0)';
		title.style.opacity = '1';
	}
}

function Object_Distance_from_Viewport_Top(obj) {
	return obj.offsetTop - _html.scrollTop;
}

function _Random_Number(min, max) {
	return Math.random() * (max - (min) + 1) + min;
}
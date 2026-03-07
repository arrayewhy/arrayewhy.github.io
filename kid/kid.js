let _kid_container;
let _kid;
let _kid_sprite;

function Create_Kid(parent_elem) {
	// Create Kid Container
	_kid_container = document.createElement("div");
	_kid_container.id = "kid_container";
	// Create Kid
	_kid = document.createElement("div");
	_kid.id = "kid";
	_kid_container.appendChild(_kid);
	// Create Kid Sprite
	_kid_sprite = document.createElement("div");
	_kid_sprite.id = "kid_sprite";
	_kid_sprite.classList.add("animation_Idle");
	_kid.appendChild(_kid_sprite);

	_kid_container.onclick = function() { _Move_Kid(event); }
	
	// Attach kid Container to an element on the Page.
	// The element must be Positioned Relative/Absolute.
	parent_elem.appendChild(_kid_container);

}

function _Move_Kid(event) {
	let targ_pos_x = event.clientX;
	let targ_pos_y = event.clientY;
	// Offset target Y position by the Viewport's Distance from Top
	targ_pos_y += _html.scrollTop;
	// Apply Target Position
	_kid.style.left = targ_pos_x + "px";
	_kid.style.top = targ_pos_y + "px";
	// Animations
	_kid_sprite.classList.remove("animation_Idle");
	_kid_sprite.classList.add("animation_Walk");
}
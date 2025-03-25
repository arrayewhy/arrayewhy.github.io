function Start() {
	Init_GalleryElems();
	Init_SkillIcons();
	Init_CaseStudy();
}

// Gallery ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function Init_GalleryElems() {
	// Get Gallery Elements as Array
	var galleryElems = 
	Array.from(document.getElementsByClassName("gallery-elem normal"));
	// Initialise each one
	galleryElems.forEach(Init_GalleryElem);
}

function Init_GalleryElem(elem) {
	// Convert the element to an Array, and grab the Description Object
	var desc = Array.from(elem.childNodes)[1];

	// Hook up the Description functions
	elem.onmouseenter = function() { Show_Description(desc); }
	elem.onmouseleave = function() { Hide_Description(desc); }

	// Hook up the Case Study functions
	elem.onclick = function() { Show_CaseStudy(); }
}

// Descriptions

function Show_Description(desc) {
	desc.style.opacity = "1";
	desc.style.top = "0" + "px";
}

function Hide_Description(desc) {
	desc.style.opacity = "0";
	desc.style.top = "-50" + "px";
}

// Case Study

var _caseStudyActive = false;

function Init_CaseStudy() {
	window.onresize = function() { Resize_CaseStudy_IFrame(); }
	// document.getElementsByClassName("back-button")[0].onclick = function() { Hide_CaseStudy(); }
	document.getElementById("home-btn").onclick = function() { Hide_CaseStudy(); }
}

function Show_CaseStudy() {
	_caseStudyActive = true;
	document.getElementsByClassName("gallery-wrapper")[0].style.left = "-100%";
	// Resize after 1 Second
	const resizeDelay = 1000;
	const myTimeout = setTimeout(Resize_CaseStudy_IFrame, resizeDelay);
}

function Hide_CaseStudy() {
	_caseStudyActive = false;
	document.getElementsByClassName("gallery-wrapper")[0].style.left = "0";
	document.getElementsByClassName("case-study-iframe-wrapper")[0].style.height = "0";
	document.getElementById("case-study-iframe").style.height = "0";
}

function Resize_CaseStudy_IFrame() {

	if (!_caseStudyActive) { return; }

	var iframeContentDocument = document.getElementById("case-study-iframe").contentDocument;

	// This is here so things don't break when working offline.
	// The IFrame contentWindow will NOT be null when we go online.
	if (iframeContentDocument == null) {
		document.getElementById("case-study-iframe").style.height = 2000 + "px";
	}
	else {
		document.getElementsByClassName("case-study-iframe-wrapper")[0].style.height = 
		iframeContentDocument.body.scrollHeight + "px";
		document.getElementById("case-study-iframe").style.height = 
		iframeContentDocument.body.scrollHeight + "px";
	}

	// var iframeBodyHeight = document.getElementById("case-study-iframe").contentDocument.body.scrollHeight;
	// console.log(iframeBodyHeight);
	// document.getElementById("case-study-iframe").style.height = iframeBodyHeight + "px";
}

// Skill Set ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function Init_SkillIcons() {
	// Get Skill Elements as Array
	var skillElems = 
	Array.from(document.getElementsByClassName("skill"));
	// Initialise each one
	skillElems.forEach(Init_SkillIcon);
}

function Init_SkillIcon(elem) {
	// Convert the element to an Array, and grab the Description Object
	var elemChildren = Array.from(elem.childNodes);
	elem.onmouseenter = function() { Enable_SkillIcon(elem); }
	elem.onmouseleave = function() { Disable_SkillIcon(elem); }
}

function Enable_SkillIcon (elem) {
	elem.style.filter = "invert(100%)";
}

function Disable_SkillIcon (elem) {
	elem.style.filter = "none";
}
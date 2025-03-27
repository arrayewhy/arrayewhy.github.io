// Variables: Home Button
const homeBtnPositioner = document.getElementsByClassName("home-btn-positioner")[0];
const backIcon = document.getElementsByClassName("back-icon")[0];
const iconMainCont = document.getElementsByClassName("icon-main-cont")[0];
// Variables: Gallery
const gallery = document.getElementById("gallery");
const galleryWrapper = document.getElementsByClassName("gallery-wrapper")[0];
const rotationRange = 5;
// Variables: Case Study
const caseStudyIFrame_Wrapper = document.getElementsByClassName("case-study-iframe-wrapper")[0];
const caseStudyIFrame = document.getElementById("case-study-iframe");
const iframeContentDocument = document.getElementById("case-study-iframe").contentDocument;

// Start ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

window.onload = Start();

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
	elem.onmouseenter = function() {
		Show_Description(desc);
		// elem.style.rotate = 
			// Math.random() * (rotationRange - (-rotationRange) + 1) + (-rotationRange) + "deg";
	}
	elem.onmouseleave = function() {
		Hide_Description(desc);
		// elem.style.rotate = "0deg";
	}

	Hook_CaseStudyFunctions_To_GalleryElem(elem);
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
	document.getElementById("home-btn").onclick = function() { Hide_CaseStudy(); }
}

function Hook_CaseStudyFunctions_To_GalleryElem(elem) {
	if (elem.id != "") {
		elem.onclick = function() { 
			SetIFrameSource_And_ShowCaseStudy("pages/" + elem.id + ".html"); 
		}
		return;
	}
	console.error("No ID on Gallery Element.");
}

function SetIFrameSource_And_ShowCaseStudy(iFrameSrc) {
	Set_IFrameSource(iFrameSrc);
	Show_CaseStudy();
}

function Show_CaseStudy() {
	_caseStudyActive = true;
	galleryWrapper.style.left = "-100%";
	// Home Button
	homeBtnPositioner.style.width = "100%";
	document.getElementById("logo-r").style.left = "-2rem";
	backIcon.style.left = "0";
	// iconMainCont.style.backgroundColor = "transparent";
	// Resize after 1 Second
	const resizeDelay = 1000;
	const myTimeout = setTimeout(Resize_CaseStudy_IFrame, resizeDelay);
}

function Hide_CaseStudy() {
	_caseStudyActive = false;
	galleryWrapper.style.left = "0";

	// Force resize gallery elements along with Case Study elements
	// to remove lingering white space.
	// Considering cropping the out the bottom of the website when 
	// the Case Study IFrame is active.	
	Force_ResizeGalleryElements_OnHide();

	caseStudyIFrame_Wrapper.style.height = "0";
	caseStudyIFrame.style.height = "0";
	// Home Button
	if (window.innerWidth <= 800) {
		homeBtnPositioner.style.width = "4rem";
	}
	document.getElementById("logo-r").style.left = "0";
	backIcon.style.left = "4rem";
	// iconMainCont.style.backgroundColor = "yellow";
}

function Resize_CaseStudy_IFrame() {

	// Resize only if Case Study is active
	if (!_caseStudyActive) { return; }

	if (iframeContentDocument == null) {
		// This is here so things don't break when working offline.
		// The IFrame contentWindow will NOT be null when we go online.
		caseStudyIFrame.style.height = 2000 + "px";
		console.log("No IFrame Content");
	}
	else {

		// Force resize gallery elements along with Case Study elements
		// to remove lingering white space.
		// Considering cropping the out the bottom of the website when 
		// the Case Study IFrame is active.
		Force_ResizeGalleryElements_OnShow(iframeContentDocument);

		caseStudyIFrame_Wrapper.style.height = 
			iframeContentDocument.body.scrollHeight + "px";
		caseStudyIFrame.style.height = 
			iframeContentDocument.body.scrollHeight + "px";
	}

	// var iframeBodyHeight = caseStudyIFrame.contentDocument.body.scrollHeight;
	// console.log(iframeBodyHeight);
	// caseStudyIFrame.style.height = iframeBodyHeight + "px";
}

function Force_ResizeGalleryElements_OnHide() {
	gallery.style.height = "auto";
	galleryWrapper.style.height = "auto";
	document.getElementsByClassName("gallery-segment")[0].style.height = "auto";
}

function Force_ResizeGalleryElements_OnShow(contentDoc) {
	gallery.style.height = 
		contentDoc.body.scrollHeight + "px";
	galleryWrapper.style.height = 
		contentDoc.body.scrollHeight + "px";
	document.getElementsByClassName("gallery-segment")[0].style.height = 
		contentDoc.body.scrollHeight + "px";
}

function Set_IFrameSource(iFrameSrc) {
	caseStudyIFrame.src = iFrameSrc;
}

// Skill Set ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function Init_SkillIcons() {
	// Get Skill Elements as Array
	const skillElems = 
	Array.from(document.getElementsByClassName("skill"));
	// Initialise each one
	skillElems.forEach(Init_SkillIcon);
}

function Init_SkillIcon(elem) {
	// Convert the element to an Array, and grab the Description Object
	const elemChildren = Array.from(elem.childNodes);
	elem.onmouseenter = function() { Enable_SkillIcon(elem); }
	elem.onmouseleave = function() { Disable_SkillIcon(elem); }
}

function Enable_SkillIcon (elem) {
	elem.style.filter = "invert(100%)";
}

function Disable_SkillIcon (elem) {
	elem.style.filter = "none";
}
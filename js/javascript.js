$(function ()
{
	// Work Thumbnail

	// $(".work-thumbnail").on ("click", function ()
	// {
	// 	$("#work-thumbnail-container").fadeOut ("fast");
	// });

	// Hover

	$(".hover")
	.on ("mouseover", function () { $(this).css ("opacity", "1"); })
	.on ("mouseout", function () { $(this).css ("opacity", "0.4"); });

	// Soft Hover

	$(".soft-hover")
	.on ("mouseover", function () { $(this).css ("opacity", "1"); })
	.on ("mouseout", function () { $(this).css ("opacity", "0.2"); });
});
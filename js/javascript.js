$(function ()
{
	// Fade In On Load

	$(".fadeOnLoad").css ("opacity", "1");

	// Hover

	$(".hover")
	.on ("mouseover", function () { $(this).css ("opacity", "1"); })
	.on ("mouseout", function () { $(this).css ("opacity", "0.6"); });

	// Soft Hover

	$(".soft-hover")
	.on ("mouseover", function () { $(this).css ("opacity", "1"); })
	.on ("mouseout", function () { $(this).css ("opacity", "0.2"); });
});
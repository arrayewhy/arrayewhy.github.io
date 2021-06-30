$(window).on ("load", function ()
{
	// Fade In On Load

	$(".fadeOnLoad").css ("opacity", "1");
});

$(function ()
{
	// Hover Fade

	$(".fade")
	.on ("mouseover", function () { $(this).css ("opacity", "1"); })
	.on ("mouseout", function () { $(this).css ("opacity", "0.6"); });

	// Hover Soft Fade

	$(".soft-fade")
	.on ("mouseover", function () { $(this).css ("opacity", "1"); })
	.on ("mouseout", function () { $(this).css ("opacity", "0.2"); });
});
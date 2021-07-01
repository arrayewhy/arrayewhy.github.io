$(window).on ("load", function ()
{
	// Fade In On Load

	$(".revealOnLoad").css ("opacity", "1");
});

$(function ()
{
	// Hover Fade In

	$(".fade-in")
	.on ("mouseover", function () { $(this).css ("opacity", "1"); })
	.on ("mouseout", function () { $(this).css ("opacity", "0.6"); });

	// Hover Ghost Fade In

	$(".ghost-fade-in")
	.on ("mouseover", function () { $(this).css ("opacity", "1"); })
	.on ("mouseout", function () { $(this).css ("opacity", "0.2"); });

	// Fade Out

	$(".fade-out")
	.on ("mouseover", function () { $(this).css ("opacity", "0.6"); })
	.on ("mouseout", function () { $(this).css ("opacity", "1"); });
});
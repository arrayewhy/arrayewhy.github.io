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

	// Sketch Zoom

	$(".sketchbook-thumbnail").on ("click", function ()
	{
		var imgUrl = "url(" + $(this).attr ("src") + ") no-repeat";

		$("#sketch-zoom").css ("width", "100%");
		$("#sketch-zoom").css ("height", "100%");
		$("#sketch-zoom").css ("visibility", "visible");
		$("#sketch-zoom").css ("background", imgUrl);
		$("#sketch-zoom").css ("background-size", "auto 100%");
	});

	$("#sketch-zoom").on ("click", function ()
	{
		$(this).css ("visibility", "hidden");
		$(this).css ("width", "0");
		$(this).css ("height", "0");
	});
});
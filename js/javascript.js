$(window).on ("load", function ()
{
	// Fade In On Load

	$(".fadeOnLoad").fadeTo (250, 1);
});

$(function ()
{
	// Hover Fade

	$(".fade")
	.on ("mouseover", function () { $(this).fadeTo (250, 1); })
	.on ("mouseout", function () { $(this).fadeTo (250, 0.6); });

	// Hover Soft Fade

	$(".soft-fade")
	.on ("mouseover", function () { $(this).fadeTo (250, 1); })
	.on ("mouseout", function () { $(this).fadeTo (250, 0.2); });
});
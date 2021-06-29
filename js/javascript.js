$(function ()
{
	// Hover Effects

	$(".hover").on ("mouseover", function ()
	{
		$(this).css ("opacity", "1");
	});
	$(".hover").on ("mouseout", function ()
	{
		$(this).css ("opacity", "0.4");
	});
});
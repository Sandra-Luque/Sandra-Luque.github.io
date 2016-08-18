$(document).ready(initPage);

function initPage()
{
	$("#main_menu a").click(navigatePage);
	initScrollMagic();
}

function navigatePage(evt)
{
	evt.preventDefault();
	$("#main_menu a").removeClass('active');
	$(this).addClass('active');

	var section = $(this).attr('href');
	var objSection = $(section);

	TweenMax.to('body', 1, {
		scrollTo:{y:objSection.position().top},
		ease:Quart.easeOut
	});
	console.log(objSection.position().top);
}
 function initScrollMagic(){
 	var num = 50;
	$(window).bind("scroll", function() {
    jQuery(window).scrollTop() > num ? jQuery(".main-menu").addClass("floating-menu") : jQuery(".main-menu").removeClass("floating-menu")
});
 }


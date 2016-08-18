$('.portafolio_item').click(function(e) {
	var img = e.target.src;
	var modal = '<div class="modal" id="modal"><img src="'+img+'" class="modal_img"/><div class="modal_boton fa fa-times"></div></div>';
	$('body').append(modal);
	$('.modal_boton').click(function() {
		$('#modal').remove();
	});
});
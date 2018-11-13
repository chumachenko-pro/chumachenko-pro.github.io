$(document).ready(function() {
	$('.hamburger').click(function(){
		$(this).toggleClass('active');
		$('.hamburger-mnu').slideToggle(500);
	});
});
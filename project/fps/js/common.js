$(document).ready(function() {

	//карусель
	var rCarousel = $('.reviever-slider').owlCarousel({
		items: 3,
		loop: true,
		dots: true,
		margin: 15,
		responsive:{
			0:{
				items:1
			},
			650:{
				items:2
			},
			1250:{
				items:4
			}
		}
	});

	var wCarousel = $('.whatcan-slider').owlCarousel({
		items: 1,
		loop: true,
		dots: true
	});

	var cCarousel = $('.contact-slider').owlCarousel({
		items: 1,
		loop: true
	});

	$('.cs-left').on('click', function(){
		cCarousel.trigger('prev.owl.carousel')
	})

	$('.cs-right').on('click', function(){
		cCarousel.trigger('next.owl.carousel')
	})

	


	//скрипт
	$(".fbt-text").click(function(){
		$(this).parent('.fb-title').next(".fb-text").slideToggle(200);
		$(this).parent('.fb-title').toggleClass('active')
	});
});

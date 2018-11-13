$(document).ready(function() {

	//Поиск
	$('.mob-search').click(function(){
		$('.mn-right form').toggleClass('active');
	})

	//Карусель
	var owl = $(".ebr-slider");
	owl.owlCarousel({
		items : 1,
		mouseDrag: false,
		dots: true,
		autoplay: true
	});

	var owl = $(".product-preview-slider");
	owl.owlCarousel({
		items : 1,
		//mouseDrag: false,
		dots: false,
		nav: true,
		navText : ["",""],
		autoplay: true
	});

	//Меню
    $('.hamburger').click(function() {
    	$('body').addClass('menu-active');
        $('.menu').animate({
            left: '0px'
        }, 200);
        $('body').animate({
            left: '285px'
        }, 200);
    });
    $('.icon-close').click(function() {
        $('.menu').animate({
            left: '-285px'
        }, 200);
	    $('body').animate({
	            left: '0px'
	        }, 200);
	    setTimeout(function() {
		  $('body').removeClass('menu-active');
		}, 200);
    });

    //Счетчик
    $('.pc-left').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
			});
	$('.pc-right').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
	$('.bpc-refresh').click(function(){
		$(this).parent('.basket-product-counter').find('.bpc-box input').val('1');
	})
});









$(document).ready(function() {

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".nav").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var ServicesSlider = $('.services_slider').owlCarousel({
    			items:4,
    			loop:true,
    			margin:10,
    			responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:4
		        }
		    }
    		});

	$('.services_slider_left').on('click', function(){
		ServicesSlider.trigger('prev.owl.carousel')
	})

	$('.services_slider_right').on('click', function(){
		ServicesSlider.trigger('next.owl.carousel')
	})


	var ServicesSlider2 = $('.services_slider2').owlCarousel({
    			items:4,
    			loop:true,
    			margin:10,
    			responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:4
		        }
		    }
    		});

	$('.services_slider_left2').on('click', function(){
		ServicesSlider2.trigger('prev.owl.carousel')
	})

	$('.services_slider_right2').on('click', function(){
		ServicesSlider2.trigger('next.owl.carousel')
	})


	var ServicesSlider3 = $('.services_slider3').owlCarousel({
    			items:4,
    			loop:true,
    			margin:10,
    			responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:4
		        }
		    }
    		});

	$('.services_slider_left3').on('click', function(){
		ServicesSlider3.trigger('prev.owl.carousel')
	})

	$('.services_slider_right3').on('click', function(){
		ServicesSlider3.trigger('next.owl.carousel')
	})


	var ServicesSlider4 = $('.services_slider4').owlCarousel({
    			items:4,
    			loop:true,
    			margin:10,
    			responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:4
		        }
		    }
    		});

	$('.services_slider_left4').on('click', function(){
		ServicesSlider4.trigger('prev.owl.carousel')
	})

	$('.services_slider_right4').on('click', function(){
		ServicesSlider4.trigger('next.owl.carousel')
	})


	var ServicesSlider5 = $('.services_slider5').owlCarousel({
    			items:4,
    			loop:true,
    			margin:10,
    			responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        992:{
		        	items:3
		        },
		        1200:{
		            items:4
		        }
		    }
    		});

	$('.services_slider_left5').on('click', function(){
		ServicesSlider5.trigger('prev.owl.carousel')
	})

	$('.services_slider_right5').on('click', function(){
		ServicesSlider5.trigger('next.owl.carousel')
	})


	var ReviewsCarousel = $('.reviews-carousel').owlCarousel({
    			items:2,
    			loop:true,
    			margin:10,
    			responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        992:{
		        	items:2
		        },
		        1200:{
		            items:2
		        }
		    }
    		});

	$('.reviews_carousel_left').on('click', function(){
		ReviewsCarousel.trigger('prev.owl.carousel')
	})

	$('.reviews_carousel_right').on('click', function(){
		ReviewsCarousel.trigger('next.owl.carousel')
	})

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

	//header
	var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.top_line' ),
		didScroll = false,
		changeHeaderOn = 1;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'cbp-af-header-shrink' );
		}
		else {
			classie.remove( header, 'cbp-af-header-shrink' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

	})();

	//popup
	$(document).ready(function() { // зaпускaем скрипт пoсле зaгрузки всех элементoв
    /* зaсунем срaзу все элементы в переменные, чтoбы скрипту не прихoдилoсь их кaждый рaз искaть при кликaх */
    var overlay = $('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
    var open_modal = $('.open_modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
    var close = $('.modal_close, #overlay'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
    var modal = $('.modal_div'); // все скрытые мoдaльные oкнa

     open_modal.click( function(event){ // лoвим клик пo ссылке с клaссoм open_modal
         event.preventDefault(); // вырубaем стaндaртнoе пoведение
         var div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
         overlay.fadeIn(400, //пoкaзывaем oверлэй
             function(){ // пoсле oкoнчaния пoкaзывaния oверлэя
                 $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '50%'}, 200); // плaвнo пoкaзывaем
         });
     });

     close.click( function(){ // лoвим клик пo крестику или oверлэю
            modal // все мoдaльные oкнa
             .animate({opacity: 0, top: '45%'}, 200, // плaвнo прячем
                 function(){ // пoсле этoгo
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); // прячем пoдлoжку
                 }
             );
     });
});
});
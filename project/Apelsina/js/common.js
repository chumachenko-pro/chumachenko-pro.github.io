$(document).ready(function() {

	//Моб меню
	$(".load-mnu").click(function(){
		$('.mobile-menu ul').addClass('.active');
		$('.mobile-menu ul').slideToggle();
		return;
	});
	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$(".scroll").click(function() {
		$.scrollTo($(".participation"), 800, {
			offset: 0
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var topSlider = $('.top-slider').owlCarousel({
		items: 1,
		loop: true
	});

	$('.ts-prev').on('click', function(){
		topSlider.trigger('prev.owl')
	})
	$('.ts-next').on('click', function(){
		topSlider.trigger('next.owl')
	})

	var reviewsSlider = $('.reviews-slider').owlCarousel({
		items: 3,
		loop: true,
		center: true,
		responsive:{
			0:{
				items:1
			},
			650:{
				items:2
			},
			1250:{
				items:3
			}
		}
	});

	$('.revnav1').on('click', function(){
		reviewsSlider.trigger('prev.owl')
	})
	$('.revnav2').on('click', function(){
		reviewsSlider.trigger('next.owl')
	})
	
	var pastSlider = $('.past-slider').owlCarousel({
		items: 3,
		loop: true,
		center: true,
		responsive:{
			0:{
				items:1
			},
			650:{
				items:2
			},
			1250:{
				items:3
			}
		}
	});

	$('.postnav1').on('click', function(){
		pastSlider.trigger('prev.owl')
	})
	$('.postnav2').on('click', function(){
		pastSlider.trigger('next.owl')
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

});
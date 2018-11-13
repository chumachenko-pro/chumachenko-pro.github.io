$(document).ready(function() {
	//круги по скролу
	$(window).bind('scroll.once', function(){ 
			show_graphics(); 
		});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var rcasesCarousel = $('.rcases-carousel').owlCarousel({
		items: 3,
		loop: true,
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

	$('.rcases-befo').on('click', function(){
		rcasesCarousel.trigger('prev.owl')
	})
	$('.rcases-after').on('click', function(){
		rcasesCarousel.trigger('next.owl')
	})

	var rreviewsSlider = $('.rreviews-slider').owlCarousel({
		items: 1,
		loop: true,
		center: true,
		autoplay: true,
		autoplayTimeout: 10000
	});

	var testSlider = $('.test-slider').owlCarousel({
		items: 3,
		loop: true,
		center: true,
		autoplayTimeout: 10000
	});

	//плавный скрол
	$(document).ready(function(){
    $('.dop_mnu a').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
	}
	    return false; // выключаем стандартное действие
	});
	});

	});


	//dop_mnu
	function cardGo() {
		var src = document.getElementById('anim');
		var src2 = document.getElementById('dopbtn');
		src.classList.remove('slideLeft');
		src.classList.add('slideRight');
		src2.classList.add('none');
	};


	//Добавление класса для анимации вниз
	function cardBack() {
		var src = document.getElementById('anim');
		var src2 = document.getElementById('dopbtn');
		src.classList.remove('slideRight');
		src.classList.add('slideLeft');
		src2.classList.remove('none');
	};


	//wow
	$(document).ready(function() {
		new WOW().init();
	});

	function show_graphics() {

		//круги
		var cmnu1 = $("#procent1").text();
		var cmnu2 = $("#procent2").text();
		var cmnu3 = $("#procent3").text();
		var cmnu4 = $("#procent4").text();
		var cmnu5 = $("#procent5").text();

		var simbol1 = $("#simbol1").text();
		var simbol2 = $("#simbol2").text();
		var simbol3 = $("#simbol3").text();
		var simbol4 = $("#simbol4").text();
		var simbol5 = $("#simbol5").text();

		$('.first.circle').circleProgress({
			startAngle: -Math.PI / 100 * 4 + 1.7,
			lineCap: 'round',
			fill: {gradient: ['#ff1e41', '#2a305d']}
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('strong').html(Math.round(cmnu1 * progress) + simbol1);
		});
		$('.second.circle').circleProgress({
			startAngle: -Math.PI / 100 * 4 + 1.7,
			lineCap: 'round',
			fill: {gradient: ['#ff1e41', '#2a305d']}
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('strong').html(Math.round(cmnu2 * progress) + simbol2);
		});
		$('.third.circle').circleProgress({
			startAngle: -Math.PI / 100 * 4 + 1.7,
			lineCap: 'round',
			fill: {gradient: ['#ff1e41', '#2a305d']}
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('strong').html(Math.round(cmnu3 * progress) + simbol3);
		});
		$('.forth.circle').circleProgress({
			startAngle: -Math.PI / 100 * 4 + 1.7,
			lineCap: 'round',
			fill: {gradient: ['#ff1e41', '#2a305d']}
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('strong').html(Math.round(cmnu4 * progress) + simbol4);
		});
		$('.fifth.circle').circleProgress({
			startAngle: -Math.PI / 100 * 4 + 1.7,
			lineCap: 'round',
			fill: {gradient: ['#ff1e41', '#2a305d']}
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('strong').html(Math.round(cmnu5 * progress) + simbol5);
		});
		$(window).unbind('scroll.once')
	};


	//график столбцы
	function show_graphics2() {

	$(document).ready(function() {
		function heigth_plus1(){
			var ucic1 = document.getElementById('ucic1');
			var ucic1point = $("#ucic1point").text();
			ucic1.style.height = ucic1point+"%";
		};
		function heigth_plus2(){
			var ucic2 = document.getElementById('ucic2');
			var ucic2point = $("#ucic2point").text();
			ucic2.style.height = ucic2point+"%";
		};
		function heigth_plus3(){
			var ucic3 = document.getElementById('ucic3');
			var ucic3point = $("#ucic3point").text();
			ucic3.style.height = ucic3point+"%";
		};
		function heigth_plus4(){
			var ucic4 = document.getElementById('ucic4');
			var ucic4point = $("#ucic4point").text();
			ucic4.style.height = ucic4point+"%";
		};
		setTimeout(heigth_plus1, 1000);
		setTimeout(heigth_plus2, 1000);
		setTimeout(heigth_plus3, 1000);
		setTimeout(heigth_plus4, 1000);
	});

			$(window).unbind('scroll.once')
	};




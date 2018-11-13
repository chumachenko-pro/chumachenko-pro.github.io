$(document).ready(function() {
	//модалка
	$(document).ready(function() {
    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal_close, #overlay');
    var modal = $('.modal_div');

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
	$(".top_mnu").navigation();

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
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 4
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

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

$(document).ready(function(){
	var af = $('[data-type=track]'),
		balls = $('.dop-balls'),
        factor = $('.magnification-factor-counter'),
		inputsFactor = $('[data-factor]'),
		showYellowTab = false;

	var countFactor = {
		customer: false,
		customer_name: false,
		customer_phone: false,
		general_contractor: false,
		general_contractor_name: false,
		general_contractor_phone: false,
		contractor: false,
		contractor_name: false,
		contractor_phone: false,
		subcontractor: false,
		subcontractor_name: false,
		subcontractor_phone: false,
		vendor: true,
		vendor_name: false,
		vendor_phone: false
	}

	af.on('input', function(){
        showYellowTab = af.filter(function(ix, item){
			return !!item.value
		});

        balls.css({display: showYellowTab.length == af.length ? '' : 'none'});
	});

    inputsFactor.on('input', function(ev){
    	var koeff = parseFloat(ev.target.getAttribute('data-factor')),
			name = ev.target.getAttribute('data-factor-name'),
			pointCount = ev.target.getAttribute('data-content-count'),
			factorNum = parseFloat(factor.html()),
			elem = ev.target;

    	if(elem.classList.contains('main_input')){
    		var sibl = $(elem).siblings('.added-content');
    		if(elem.value){
                sibl.css('display', 'flex');
                $('.point-' + pointCount).css('display', 'flex')
			}else{
                sibl.css('display', 'none');
                sibl.find('input').each(function(ix, el){
                    el.value && (koeff += parseFloat(el.getAttribute('data-factor')))
                	el.value = '';
                    countFactor[el.getAttribute('data-factor-name')] = false;
				})
                $('.point-' + pointCount).css('display', 'none')
			}

		}

		if(elem.value && !countFactor[name]){
			countFactor[name] = true;
            factor.html(parseFloat(koeff + factorNum).toFixed(1))
		}else if(!elem.value){
            var num = parseFloat(factorNum - koeff).toFixed(1)
            factor.html(num)
            countFactor[name] = false;
		}
	})

});
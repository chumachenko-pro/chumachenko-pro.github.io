$(document).ready(function() {

	//logo
	$(".mpb1").click(function(){
		$('.ml1').slideToggle(200);
		$(".mpb1").toggleClass('active');
		$('.ml1').css('display', 'flex');
	});

	$(".mpb2").click(function(){
		$('.ml2').slideToggle(200);
		$(".mpb2").toggleClass('active');
		$('.ml2').css('display', 'flex');
	});

	$(".mpb3").click(function(){
		$('.ml3').slideToggle(200);
		$(".mpb3").toggleClass('active');
		$('.ml3').css('display', 'flex');
	});

	//popup
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

     close.click( function(close_form){ // лoвим клик пo крестику или oверлэю
            modal // все мoдaльные oкнa
             .animate({opacity: 0, top: '45%'}, 200, // плaвнo прячем
                 function(){ // пoсле этoгo
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); // прячем пoдлoжку
                 }
             );
     });

     //form
     $('form').submit(function () {
        var formID = $(this).attr('id'); // Получение ID формы
        var formNm = $('#' + formID);
        $.ajax({
            type: 'POST',
            url: 'mail.php', // Обработчик формы отправки
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки в текущей форме
                $(formNm).html(data);


                

                function func() {
                  modal // все мoдaльные oкнa
                    .animate({opacity: 0, top: '45%'}, 100, // плaвнo прячем
                        function(){ // пoсле этoгo
                            $(this).css('display', 'none');
                            overlay.fadeOut(400); // прячем пoдлoжку
                         }
                     );
                };

                 setTimeout(func, 1500);
            }
        });
        return false;
    });

	//header
	$(window).scroll(function(){
	    if ($(window).scrollTop() > 70) {
	        $('.top-line').addClass('scroll');
	    }
	    else {
	        $('.top-line').removeClass('scroll')
	    }
	});

	//burger
	$('.burger').click(function(){
		$('.mobile-menu').slideToggle(500);
        $('.mobile-menu li a').click(function(){
           $('.mobile-menu').css('display', 'none');

       });
	});

});






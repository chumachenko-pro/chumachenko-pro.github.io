$(document).ready(function() {

	//mob calc
	  var $input = $('#mobcalc');

	  $('.minus').on('click', function(){
	    var count = parseInt($input.val()) - 1;
	    count = count < 1 ? 1 : count;
	    $input.attr('value', count);
	    $('.mcp-price').html(count * 2000 + 4000);
	  });

	  $('.plus').on('click', function(){
	    var count = parseInt($input.val()) + 1;
	    if(count <= 8){
	      $input.attr('value', count);
	      $('.mcp-price').html(count * 2000 + 4000);  
	    }
	  });

 	$('.mcp-price').html(parseInt($input.val()) * 2000 + 4000);

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			//alert("Thank you!");
			th.trigger("reset");
			th.css('display', 'none');
			th.parent('.form_wrap').find('.senk').css('display', 'block');
			setTimeout(function() {
				// Done Functions
				th.css('display', 'flex');
				th.parent('.form_wrap').find('.senk').css('display', 'none');
				location.reload() // window.location.reload()
			}, 3000);
		});
		return false;
	});

	//date
	$(".select").selectmenu();
	$('.datepicker').datepicker({
		dateFormat : "dd MM",
		minDate: new Date($('#hiddendelivdate').val()),
		monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	});
	$(".datepicker").datepicker("setDate", new Date());
	$('input,textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});

	//скрол по якорям 
	$('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });

     //герлянда
	function garland() {  
		nums = document.getElementById('nums_1').innerHTML  
		if(nums == 1) {document.getElementById('garland').className='garland_1';document.getElementById('nums_1').innerHTML='2'}  
		if(nums == 2) {document.getElementById('garland').className='garland_2';document.getElementById('nums_1').innerHTML='3'}  
		if(nums == 3) {document.getElementById('garland').className='garland_3';document.getElementById('nums_1').innerHTML='4'}  
		if(nums == 4) {document.getElementById('garland').className='garland_4';document.getElementById('nums_1').innerHTML='1'}  
	}  
	setInterval(function(){garland()}, 2000);
	function garland2() {  
		nums = document.getElementById('nums_2').innerHTML  
		if(nums == 1) {document.getElementById('garland2').className='garland_1';document.getElementById('nums_2').innerHTML='2'}  
		if(nums == 2) {document.getElementById('garland2').className='garland_2';document.getElementById('nums_2').innerHTML='3'}  
		if(nums == 3) {document.getElementById('garland2').className='garland_3';document.getElementById('nums_2').innerHTML='4'}  
		if(nums == 4) {document.getElementById('garland2').className='garland_4';document.getElementById('nums_2').innerHTML='1'}  
	}  
	setInterval(function(){garland2()}, 2000) ;
	function garland3() {  
		nums = document.getElementById('nums_3').innerHTML  
		if(nums == 1) {document.getElementById('garland3').className='garland_1';document.getElementById('nums_3').innerHTML='2'}  
		if(nums == 2) {document.getElementById('garland3').className='garland_2';document.getElementById('nums_3').innerHTML='3'}  
		if(nums == 3) {document.getElementById('garland3').className='garland_3';document.getElementById('nums_3').innerHTML='4'}  
		if(nums == 4) {document.getElementById('garland3').className='garland_4';document.getElementById('nums_3').innerHTML='1'}  
	}  
	setInterval(function(){garland3()}, 2000)
	;
	function garland4() {  
		nums = document.getElementById('nums_4').innerHTML  
		if(nums == 1) {document.getElementById('garland4').className='garland_1';document.getElementById('nums_4').innerHTML='2'}  
		if(nums == 2) {document.getElementById('garland4').className='garland_2';document.getElementById('nums_4').innerHTML='3'}  
		if(nums == 3) {document.getElementById('garland4').className='garland_3';document.getElementById('nums_4').innerHTML='4'}  
		if(nums == 4) {document.getElementById('garland4').className='garland_4';document.getElementById('nums_4').innerHTML='1'}  
	}  
	setInterval(function(){garland4()}, 2000) 
	;

	// Вывод данных товара в форму отправки
	$( ".choice-data" ).click(function(){
		$( "input.output" ).val('');
		$( "input.count" ).val('');
		$( "input.kind_of_photoshoot" ).val('');
		$( "input.rprice" ).val('');
		$( "input.date" ).val('');
		$( "input.time" ).val('');
		var output = $('#output').html();
		var count = $('#count').html();
		var kind_of_photoshoot = $('.kind_of_photoshoot input:checked').next().html();
		var rprice = $('#rprice').html();
		var date = $('.select_wrap input.datepicker').val();
		var time = $('.book_it .book_form form .select_wrap .ui-selectmenu-text').html();
		$('#myModal3').modal('show');
		$( "input.output" ).val(output);
		$( "input.count" ).val(count);
		$( "input.kind_of_photoshoot" ).val(kind_of_photoshoot);
		$( "input.rprice" ).val(rprice);
		$( "input.date" ).val(date);
		$( "input.time" ).val(time);
		return false;
	});
	$( "a.pctime" ).click(function(){
		$( "input.date" ).val('');
		$( "input.time" ).val('');
		var date = $('.select_wrap input.datepicker').val();
		var time = $('.book_it .book_form form .select_wrap .ui-selectmenu-text').html();
		$('#myModal4').modal('show');
		$( "input.date" ).val(date);
		$( "input.time" ).val(time);
		return false;
	});
	$( ".mobcalkbtn" ).click(function(){
		$( "input.mob_output" ).val('');
		$( "input.mob_rprice" ).val('');

		var date = $('#mobcalc').val();
		var price = $('.mcp-price').html();

		$('#myModal7').modal('show');
		$( "input.mob_output" ).val(date);
		$( "input.mob_rprice" ).val(price);
		return false;
	});
	$( "a.mobtime" ).click(function(){
		$( "input.mob_date" ).val('');
		$( "input.mob_time" ).val('');

		var date = $('#mobdat').val();
		var time = $('.book_it.mobile .book_form form .select_wrap .ui-selectmenu-text').html();

		$('#myModal8').modal('show');
		$( "input.mob_date" ).val(date);
		$( "input.mob_time" ).val(time);
		return false;
	});

	

});












$(document).ready(function () {
    svg4everybody({});

    //modal
    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal_close, #overlay');
    var modal = $('.modal_div');


    open_modal.click(function openModal(event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'block')
                    .animate({ opacity: 1, top: '50%' }, 200);
            });
    });

    

    close.click(function closeModal() {
        modal
            .animate({ opacity: 0, top: '45%' }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });

    // button mnu
    $('.mobile-mnu').click(function(){
        $('.main-nav').slideToggle();
    });

    // .close mnu
    $('.close').click(function () {
        $('.main-nav').slideToggle();
    });

    // hover product-box
    $('.product-box').hover(
        function () {
            $(this).find('.product-box__list').slideDown(200);
        }, function () {
            $(this).find('.product-box__list').slideUp(200);
        }
    ); 

    //fancy
    $('[data-fancybox="group"]').fancybox({
        arrows: false,
        infobar: false,
        toolbar: false
    });

    //mask
    $("input[type='tel']").inputmask("+7 (999) 999-99-99");

    // hide elements
    $(window).on('load resize', hideEl);
    function hideEl(params) {
        if ($(window).width() <= '576') {
            $('.production .production-greed__item').eq('1').nextAll().hide();
        } else {
            $('.production .production-greed__item').eq('1').nextAll().show();
        };
    }
    
    

    // из калькулятора
    $('#calculator__select').change(function() {
        var longInp = $('#longInp').val(),
            widthInp = $('#widthInp').val(),
            heightInp = $('#heightInp').val(),
            price = $('#calculator__select').val(),
            param = $(this).find('option:checked').data('param'),
            delivery,
            cubatura,
            tonage,
            calcSum,
            totalSum;

        cubatura = (longInp * widthInp * heightInp);
        tonage = (cubatura * (param / 1000));
        calcSum = cubatura * price


        if (tonage < 5) {
            delivery = 2200;
        } else if (tonage < 10) {
            delivery = 3500;
        } else if (tonage < 30) {
            delivery = 4500;
        } else {}
        
        

        totalSum = calcSum + delivery

        
        
        $('#cubatura').text( cubatura.toFixed(1) );
        $('#tonage').text( tonage.toFixed(1) );
        $('#calcSum').text( calcSum.toFixed(2) + ' руб.' );
        $('#totalSum').text( totalSum.toFixed(2) + ' руб.');
    });

    //custom select
    $('select').each(function () {
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val(),
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            // console.log($this.val()); 
        });

        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });

    //E-mail Ajax Send
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Thank you!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
});





//  карты
ymaps.ready(init);
function init() {
    var center = [56.136, 40.390];
    var myMap1 = new ymaps.Map('map1', {
        center: [57.6608, 34.1190],
        zoom: 8,
        controls: []
    });
    var myMap2 = new ymaps.Map('map2', {
        center: [57.6608, 34.1190],
        zoom: 10,
        controls: []
    });
    var myPlacemark1 = new ymaps.Placemark([57.6608, 34.1190], {
        hintContent: '',
        balloonContent: 'balloonContent'
    }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'static/img/general/map.png',
            // Размеры метки.
            iconImageSize: [77, 77],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-38.5, -38.5]
        });
    var myPlacemark2 = new ymaps.Placemark([57.6608, 34.1190], {
        hintContent: '',
        balloonContent: 'balloonContent'
    }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'static/img/general/map.png',
            // Размеры метки.
            iconImageSize: [77, 77],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-38.5, -38.5]
        });
    myMap1.geoObjects.add(myPlacemark1);
    myMap2.geoObjects.add(myPlacemark2);
    myMap1.setType(YMaps.MapType.SATELLITE);
}






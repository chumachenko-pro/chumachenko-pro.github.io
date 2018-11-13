$(document).ready(function () {


    // демонстрация двух слайдров, когда определитесь можете удалить скрипт
    // и не нежные обвертки в html и css
    $('.changer').click(function () {
        var length = $('.sliderType .carousel').length - 1;

        $('.sliderType .carousel').each(function (index) {
            if ($(this).hasClass('active') && index != length) {
                $(this).css('display', 'none').removeClass('active')
                    .next('.carousel').fadeIn(1000).addClass('active');
                return false;
            } else if (index == length) {
                $(this).css('display', 'none').removeClass('active');
                $('.sliderType').find('.carousel').first().fadeIn(1000).addClass('active');
                return false;
            }
        });
    });



    //modal
    var overlay = $('#modalOverlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, #modalOverlay');
    var modal = $('.modal');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'block')
                    .animate({ opacity: 1, top: '50%' }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({ opacity: 0, top: '45%' }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });

    $('.mobileButton').click(function(){
        $('.mainNav__inner').slideToggle();
    });

    //header
    $(window).scroll(function () {
        if ($(window).scrollTop() > 70) {
            $('.header').addClass('scroll');
        }
        else {
            $('.header').removeClass('scroll')
        }
    });

    //fancy
    $('[data-fancybox]').fancybox({
        buttons: ['close']
    });

    //owl
    $(".carouselBody").owlCarousel({
        items: 1,
        loop: true,
        mouseDrag: false
        // autoplay: true,
        // autoplayTimeout: 5000
    });

    // animate init
    new WOW().init();
    

    // map
    ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init() {
        myMap = new ymaps.Map("ymap", {
            center: [55.76, 37.64],
            controls: [],
            zoom: 7
        });

        myPlacemark = new ymaps.Placemark([55.76, 37.64], {
            hintContent: 'Москва!',
            balloonContent: 'Столица России'
        });

        myMap.geoObjects.add(myPlacemark);
    };
    // map overlay
    $('.mapOverlay').click(function(){
        $(this).hide();
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
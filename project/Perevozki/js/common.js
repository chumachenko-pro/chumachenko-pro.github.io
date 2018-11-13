$(document).ready(function() {

    //menu
    $('.info-button').click(function() {
        $('.mobile-mnu').toggleClass('active');
    })

    //owl-carousel
    var reviewsSlider = $('.reviews-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: [],
        responsive:{
            650: {
                items: 1
            },
            1200: {
                items: 2
            }
        }
    });

    //modal
    $(document).ready(function () {
        var overlay = $('#overlay');
        var open_modal = $('.open_modal');
        var close = $('.modal_close, #overlay');
        var modal = $('.modal_div');

        open_modal.click(function (event) {
            event.preventDefault();
            var div = $(this).attr('href');
            overlay.fadeIn(400,
                function () {
                    $(div)
                        .css('display', 'flex')
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
    });

    //E-mail Ajax Send
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            document.getElementById('modtitle').innerHTML = ('Спасибо за заявку');
            document.getElementById('modsub').innerHTML = ('Мы свяжемся с Вами');
            $('.modal-form').css('display', 'none');
            $('.modal_div').css('height', '110px').css('margin', '-55px auto');
            setTimeout(function () {
                // Done Functions
                document.getElementById('modtitle').innerHTML = ('Оставьте номер');
                document.getElementById('modsub').innerHTML = ('и мы свяжемся с Вами');
                $('.modal-form').css('display', 'block');
                $('.modal_div').css('height', '244px').css('margin', '-122px auto');
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});
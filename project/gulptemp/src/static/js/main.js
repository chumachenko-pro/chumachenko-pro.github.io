$(document).ready(function () {
    //modal
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

    // tab 1
    // tab base style
    $('.tabContent__item').css('display', 'none')
    $('.tabContent__item:first-child').css('display', 'block')
    // tab script body
    $(".tabNav__item").click(function () {
        const navTab = $(this).parents('.tab').find('.tabNav__item');
        const conTab = $(this).parents('.tab').find('.tabContent__item');
        navTab.removeClass('active').eq($(this).index()).addClass('active');
        conTab.hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('.active');

    $('.tabContent__item2').css('display', 'none')
    $('.tabContent__item2:first-child').css('display', 'block')

    $(".tabNav__item2").click(function () {
        const navTab = $(this).parents('.tab2').find('.tabNav__item2');
        const conTab = $(this).parents('.tab2').find('.tabContent__item2');
        navTab.removeClass('active').eq($(this).index()).addClass('active');
        conTab.hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('.active');



    $('.changeForm').click(function () {
        var length = $('.authorization-wrapper .authorization-wrapper__container').length - 1;

        $('.authorization-wrapper .authorization-wrapper__container').each(function (index) {
            if ($(this).hasClass('active') && index != length) {
                $(this).css('display','none').removeClass('active')
                    .next('.authorization-wrapper__container').fadeIn(1000).addClass('active');
                return false;
            } else if (index == length) {
                $(this).css('display', 'none').removeClass('active');
                $('.authorization-wrapper').find('.authorization-wrapper__container').first().fadeIn(1000).addClass('active');
                return false;
            }
        });
    });

    

    
    // payment__button
    $('.header__btn').click(function () {
        $('.header__nav').slideToggle();
    })

    // payment__button
    $('.paybtn').click(function () {
        $('.modalForm__input').prop('disabled', true);
        $('.modalForm__text').fadeIn(1000);
        $('.modalForm__choice').fadeIn(1000).css('display', 'flex');
        return false;
    })



    //.modalForm__link
    $('.modalForm__link').click(function() {
        $('.hiddenwrap').toggle('hidden');
        $('.modalForm__link').toggleClass('active');
        
        return false;
    })


    // animation text
    $elements = $('.rotating-content').find('li');
    $elements
        .not(':first-child')
        .addClass('visually-hidden')
        .css('opacity', 0);

    setInterval(function () {
        $elements.filter(':not(.visually-hidden)').fadeTo('slow', 0, function () {
            $next = $(this).addClass('visually-hidden').next();
            if ($next.length === 0) {
                $next = $elements.first();
            }
            $next.removeClass('visually-hidden').fadeTo('slow', 1);
        });
    }, 2500);
        
});
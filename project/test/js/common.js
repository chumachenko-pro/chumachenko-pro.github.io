$(document).ready(function() {

    //slider
    var eventSlider = $('.event-slider').owlCarousel({ items: 1, loop: true, mouseDrag: false });

    $('.btn-left').on('click', function () {
        eventSlider.trigger('prev.owl.carousel')
    })

    $('.btn-right').on('click', function () {
        eventSlider.trigger('next.owl.carousel')
    })

    //scroll
    $(".scroll").click(function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 500);
    });

    //tabs
    $(".tabs .tab").click(function () {
        $(".tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass(".active");

    //mob-btn
    $('.menu-mob').click(function() {
        $('.main-nav ul').slideToggle();
    })

});
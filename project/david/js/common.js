$(document).ready(function () {

    var programSlider = $('.program-slider').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.ps-prev').on('click', function () {
        programSlider.trigger('prev.owl')
    })
    $('.ps-next').on('click', function () {
        programSlider.trigger('next.owl')
    })


    //scroll
    $(document).ready(function () {
        $(".main-nav").on("click", "a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();

            //забираем идентификатор бока с атрибута href
            var id = $(this).attr('href'),
                top = $(id).offset().top;

            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({ scrollTop: top }, 500);
        });
    });

});
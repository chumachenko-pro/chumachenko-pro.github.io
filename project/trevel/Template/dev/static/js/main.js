$(document).ready(function () {
    svg4everybody({});

    $('.recommedation-slider').owlCarousel({
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            650: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });

    $('.event-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        margin: 0
    });

    $('.social-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 10,
        stagePadding: 20,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 6
            }
        }
    });

    function name(params) {
        
    }

    $('.gastronomic-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        margin: 0
    });

    $('.choice-slider').owlCarousel({
        items: 9,
        loop: true,
        nav: true,
        dots: false,
        margin: 0,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            720: {
                items: 5
            },
            992: {
                items: 7
            },
            1200: {
                items: 9
            }
        }
    });


    $('.mobile-mnu').click(function() {
        $('.header__nav-wrap').slideToggle();
    });
    
    $('.modal-form__reg').click(function () {
        $('.modal_div').css('display', 'none');

         var div = $(this).attr('href');
            $(div)
                .css('display', 'block')
                .animate({ opacity: 1, top: '50%' }, 200);
    });



    // datapicker
    $(function () {
        $("#datepicker").datepicker({
            dateFormat: 'dd-mm-yy',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            nextText: "",
            prevText: "",
        }).datepicker("setDate", new Date());
    });

   
    

    $(function () {
        $("#calendar").datepicker({
            dateFormat: 'dd-mm-yy',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            nextText: "",
            prevText: "",
        });
    });

    // select
    $(function () {
        $("#date-select").selectmenu();
    });
    
    
    // select
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
                rel: $this.children('option').eq(i).val()
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
            //console.log($this.val());
        });
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });

    //acord
    var title = document.getElementsByClassName('accordion-title'),
        cont = document.getElementsByClassName('accordion-cont');

    for (var i = 0; i < title.length; i++) {
        var curTitle = title[i];
        title[i].addEventListener('click', function () {
            var classes = this.getAttribute('class'),
                newClasses = '',
                classesArr = classes.split(' '),
                newClassesArr = classes.split(' ');
            for (var j = 0; j < classesArr.length; j++) {
                if (classesArr[j] == 'active') {
                    classesArr.splice([j], 1);
                }
            }
            if (classesArr.length === newClassesArr.length) {
                classesArr.push('active');
                newClasses = classesArr.join(' ');
            } else {
                newClasses = classesArr.join(' ');
            }

            for (var l = 0; l < title.length; l++) {
                oldClasses = title[l].getAttribute('class');
                oldClassesArr = oldClasses.split(' ');
                for (var k = 0; k < oldClassesArr.length; k++) {
                    if (oldClassesArr[k] == 'active') {
                        oldClassesArr.splice([k], 1);
                    }
                    oldClasses = oldClassesArr.join(' ');
                    title[l].setAttribute('class', oldClasses);

                }
            }
            this.setAttribute('class', newClasses);
        })
    }

    $(".tabs .tab").click(function () {
        $(".tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass(".active");



    // popup
    $(document).ready(function () {
        var overlay = $('#overlay');
        var open_modal = $('.open_modal');
        var close = $('.modal_close, #overlay');
        var modal = $('.modal_div');

        open_modal.click(function (event) {
            event.preventDefault();
            var div = $(this).attr('href');
            overlay.fadeIn(400,
                function modalBody() {
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
    });

    
});
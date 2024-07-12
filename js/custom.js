$(function () {
    $('#mainFull').fullpage({
        anchors: ['01', '02'],
        scrollingSpeed: 1000
    });
});

$(function mainVisual() {


    const mainVisualSlide = new Swiper('.mainVisualSlide', {
        speed: 1500,
        slideActiveClass: 'on',
        loop: true,
        navigation: {
            nextEl: ".mainVisualSlide .arrows .next",
            prevEl: ".mainVisualSlide .arrows .prev",
        },
        pagination: {
            el: ".mainVisualSlide .dots",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    });


    let turn = false;

    $('#mainVisaul .arrows .pause').on('click', function () {
        $(this).toggleClass('on');
        if (turn) {
            mainVisualSlide.autoplay.start();
        } else {
            mainVisualSlide.autoplay.stop();
        }

        turn = !turn;
        //turn true만드는 연산자//
    });

});

$(function mainExhibition() {
    var bullet = ['01', '02', '03', '04'];

    const mainExhibition = new Swiper('.ex_slide', {
        speed: 1000,
        // effect:'fade',
        loop: true,
        pagination: {
            el: "#mainExhibition .ex_slide .dots_02",
            clickable: true,
            // renderBullet: function (index, className) {
            //     return '<span class="' + className + '">' + (index + 1) + "</span>";
            // },
            renderBullet: function (index, className) {
                return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>'
            },
            bulletClass: `dots`,
            bulletActiveClass: `on`
        },
        navigation: {
            nextEl: "#mainExhibition .ex_slide .arrows_02 .prev",
            prevEl: "#mainExhibition .ex_slide .arrows_02 .next",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    });

    const mainExPaging = new Swiper('.ex_slide', {
        loop: true,
        pagination: {
            el: "#mainExhibition .ex_slide .dots_03",
            type: "progressbar",
        }
    });

    mainExhibition.controller.control = mainExPaging;



    $('#mainExhibition .ex_slide .arrows_02 .controll').on('click', function () {
        $(this).toggleClass('on');
        if (turn) {
            mainExhibition.autoplay.start();
        } else {
            mainExhibition.autoplay.stop();
        }

        turn = !turn;
        //turn true만드는 연산자//
    });


});


$(function mainEvent() {

    const mainEventSlide01 = new Swiper('.eventContents .eventSlide01', {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 30,
    });
    const mainEventSlide02 = new Swiper('.eventContents .eventSlide02', {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 30,
    });
    const mainEventSlide03 = new Swiper('.eventContents .eventSlide03', {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 30,
    });


    $('#mainEvent .eventTap li button').on('click', function () {
        $(this).parent()
            .addClass('on')
            .siblings()
            .removeClass('on');

        let idx = $(this).parent().index();

        $('#mainEvent .eventContents .swiper')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');
    })

})
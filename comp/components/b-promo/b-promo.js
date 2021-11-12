(function($) {
    $(document).ready(function(){

        var b_promo_swiper = new Swiper('.b-promo__list', {
            wrapperClass: 'b-promo__list-wrapper',
            slideClass: 'b-promo__item',
            slidesPerView: 1,
            // slidesPerGroup: 1,
            setWrapperSize: true,
            // spaceBetween: 0,
            loop: true,
            // longSwipes: false,
            // autoplay: {
            //     delay: 3000
            // },
            navigation: {
                nextEl: '.b-promo .arrows__next',
                prevEl: '.b-promo .arrows__prev',
                disabledClass: 'arrows__arrow_disabled',
            }
        });
        // $('.b-promo__list, .b-promo .arrows').on('mouseenter', function(e){
        //     b_promo_swiper.autoplay.stop();
        // });
        // $('.b-promo__list, .b-promo .arrows').on('mouseleave', function(e){
        //     b_promo_swiper.autoplay.start();
        // });

    });
})(jQuery);

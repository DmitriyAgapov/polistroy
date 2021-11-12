(function($) {
    $(document).ready(function(){
        var allSliders = document.querySelectorAll('.block-production .swiper-container');
        allSliders.forEach( item => new Swiper(item, {
            wrapperClass: "swiper-wrapper",
            slideClass: "swiper-slide",
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: false,
            pagination: {
                el: item.querySelector(".swiper-pagination"),
                dynamicBullets: true,
                clickable: true,
            },
            navigation: {
                nextEl: ".block-related-items .arrows__next",
                prevEl: ".block-related-items .arrows__prev",
            },
            breakpoints: {
                767: {
                    slidesPerView: 1,
                },
                1023: {
                    slidesPerView: 3,
                },
            }
        }));


    });
})(jQuery);

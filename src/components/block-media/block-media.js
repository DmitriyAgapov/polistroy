(function($) {
    $(document).ready(function(){
        var swiper = new Swiper(".block-media .swiper-container", {
            wrapperClass: "swiper-wrapper",
            slideClass: "swiper-slide",
            spaceBetween: 10,
            slidesPerView: 4,
            pagination: {
                el: ".swiper-pagination",
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
        });
    });
})(jQuery);

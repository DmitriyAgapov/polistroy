(function($) {
    $(document).ready(function(){
        var swiper = new Swiper('.block-related-items .block__items', {
            wrapperClass: 'block__items-inner',
            slideClass: 'item-catalog',
            spaceBetween: 0,
            slidesPerView: 2,
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
                clickable: true,
            },
            navigation: {
                nextEl: '.block-related-items .arrows__next',
                prevEl: '.block-related-items .arrows__prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,

                }
            }
        });
    });
})(jQuery);

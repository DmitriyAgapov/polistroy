(function ($) {
    $(document).ready(function(){

        var block = $(".b-shipment"),
            blockList = block.find(".b__list"),
            blockItem = block.find(".item-shipment-teaser-1"),
            blockArrows = block.find('.arrows'),
            blockFooter = block.find(".b__ft");

        function paramsSlider(slidesPerView, slidesPerGroup, loop, loopFillGroupWithBlank, dynamicBullets, freeMode, freeModeMomentum) {
            var options = {
                wrapperClass: "b__list-inner",
                slideClass: "item-shipment-teaser-1",
                slidesPerView: slidesPerView,
                slidesPerGroup: slidesPerGroup,
                setWrapperSize: true,
                grabCursor: true,
                watchOverflow: true,
                updateOnWindowResize: true,
                observer: true,
                observeSlideChildren: true,
                spaceBetween: 0,
                loop: loop,
                loopFillGroupWithBlank: loopFillGroupWithBlank,
                freeMode: freeMode,
                freeModeMomentum: freeModeMomentum,
                navigation: {
                    nextEl: ".b-shipment .arrows__next",
                    prevEl: ".b-shipment .arrows__prev",
                    disabledClass: "arrows__arrow_disabled",
                },
                pagination: {
                    el: ".b-shipment .b__dots",
                    clickable: true,
                    dynamicBullets: dynamicBullets,
                    dynamicMainBullets: 1,
                    bulletClass: "dots__dot",
                    bulletActiveClass: "active",
                },
            };
            var b_shipment_swiper = new Swiper(".b-shipment .b__list", options);
        }

        if ( $("body").width() >= 1200 ) {
            if ( blockItem.not(".swiper-slide-duplicate").length > 4 ) {
                if ( blockList.hasClass(".swiper-container-initialized") ) {
                    b_shipment_swiper.destroy(true, true);
                }
                paramsSlider(
                    slidesPerView = 4,
                    slidesPerGroup = 4,
                    loop = true,
                    loopFillGroupWithBlank = false,
                    dynamicBullets = false
                );
            } else {
                blockArrows.hide();
                blockFooter.hide();
            }
        }
        if ( $("body").width() >= 992 && $("body").width() <= 1199 ) {
            if ( blockItem.not(".swiper-slide-duplicate").length > 4 ) {
                if ( blockList.hasClass(".swiper-container-initialized") ) {
                    b_shipment_swiper.destroy(true, true);
                }
                paramsSlider(
                    slidesPerView = 4,
                    slidesPerGroup = 4,
                    loop = true,
                    loopFillGroupWithBlank = false,
                    dynamicBullets = true
                );
            } else {
                blockArrows.hide();
                blockFooter.hide();
            }
        }
        if ( $("body").width() >= 480 && $("body").width() <= 991 ) {
            if ( blockItem.not(".swiper-slide-duplicate").length > 2 ) {
                if ( blockList.hasClass(".swiper-container-initialized") ) {
                    b_shipment_swiper.destroy(true, true);
                }
                paramsSlider(
                    slidesPerView = 2,
                    slidesPerGroup = 1,
                    loop = true,
                    loopFillGroupWithBlank = false,
                    dynamicBullets = true,
                    freeMode = true,
                    freeModeMomentum = true
                );
            } else {
                blockFooter.hide();
            }
        }
        if ( $("body").width() <= 479 ) {
            if ( blockItem.not(".swiper-slide-duplicate").length > 1 ) {
                if ( blockList.hasClass(".swiper-container-initialized") ) {
                    b_shipment_swiper.destroy(true, true);
                }
                paramsSlider(
                    slidesPerView = 1,
                    slidesPerGroup = 1,
                    loop = true,
                    loopFillGroupWithBlank = false,
                    dynamicBullets = true,
                    freeMode = true,
                    freeModeMomentum = true
                );
            } else {
                blockFooter.hide();
            }
        }

        lightGallery(".b-shipment .b__cont", ".item-shipment-teaser-1:not(.swiper-slide-duplicate) a");

        // ПРИ КЛИКЕ ПО ДУБЛИКАТУ ДЕЛАЕМ КЛИК ПО ОРИГИНАЛЬНОЙ КАРТИНКЕ
        block.on('click', '.swiper-slide-duplicate', function (e) {
            e.preventDefault();
            if ($('body').width() >= 992) {
                var slideIndex = $(this).attr('data-swiper-slide-index');
                $('.item-shipment-teaser-1:not(.swiper-slide-duplicate)[data-swiper-slide-index="' + slideIndex + '"] .item-shipment-teaser-1__image a').click();
            }
        });

    });
})(jQuery);
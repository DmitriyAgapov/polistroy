(function ($) {
    $(document).ready(function(){

        var block = $('.block-partners'),
            blockContent = block.find('.block__content'),
            blockList = block.find('.block__items'),
            blockItem = block.find('.item-unit'),
            blockShadow = block.find('.b__shadow'),
            blockArrows = block.find('.block__link'),
            blockDots = block.find('.b__dots'),
            blockFooter = block.find('.b__ft');

        $(document).on('mouseenter', '.block-partners .item-unit', function(e){
            var _self = $(this);
            var _parent = _self.closest('.block__items');
            blockItem.removeClass('is_hovered');
            $(this).addClass('is_hovered');
            blockShadow
                .css({
                    'left': parseInt( _self.offset().left - _parent.offset().left ),
                    'width': $(this).width()
                })
                .addClass('active')
                .attr('href', $(this).find('.item__link').attr('href'));
        });
        blockArrows.on('mouseenter', function(e){
            block.find('.item-unit').removeClass('is_hovered');
            block.find('.b__shadow').removeClass('active');
        });
        blockContent.on('mouseleave', function(e){
            blockItem.removeClass('is_hovered');
            blockShadow.removeClass('active');
        });

        function paramsSlider(slidesPerView, slidesPerGroup, loop, loopFillGroupWithBlank, dynamicBullets, freeMode, freeModeMomentum) {
            var options = {
                init: false,
                wrapperClass: 'block__items-inner',
                slideClass: 'item-unit',
                slidesPerView: slidesPerView,
                slidesPerGroup: slidesPerGroup,
                setWrapperSize: true,
                grabCursor: true,
                spaceBetween: 30,
                watchOverflow: true,
                updateOnWindowResize: true,
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                loop: loop,
                loopFillGroupWithBlank: loopFillGroupWithBlank,
                freeMode: freeMode,
                freeModeMomentum: freeModeMomentum,
                navigation: {
                    nextEl: '.block-partners .arrows__next',
                    prevEl: '.block-partners .arrows__prev',
                    disabledClass: 'arrows__arrow_disabled',
                },
                pagination: {
                    el: '.block-partners .b__dots',
                    clickable: true,
                    dynamicBullets: dynamicBullets,
                    dynamicMainBullets: 1,
                    bulletClass: 'dots__dot',
                    bulletActiveClass: 'active',
                }
            }
            var swiper_instock = new Swiper('.block-partners .block__items', options);

            swiper_instock.on('init', function(e){
                $(document).on('mouseenter', '.block-partners .item-unit', function(e){
                    var _self = $(this);
                    var _parent = _self.closest('.block__items');
                    blockItem.removeClass('is_hovered');
                    $(this).addClass('is_hovered');
                    blockShadow
                        .css({
                            'left': parseInt( _self.offset().left - _parent.offset().left ),
                            'width': $(this).width()
                        })
                        .addClass('active')
                        .attr('href', $(this).find('.item__link').attr('href'));
                });
                blockArrows.on('mouseenter', function(e){
                    blockItem.removeClass('is_hovered');
                    blockShadow.removeClass('active');
                });
                blockContent.on('mouseleave', function(e){
                    blockItem.removeClass('is_hovered');
                    blockShadow.removeClass('active');
                });
            });
            swiper_instock.init();
        }

        // 1200 - ...
        if ( $('body').width() >= 1200 ) {
            if ( blockItem.not('.swiper-slide-duplicate').length > 4 ) {
                if ( blockList.hasClass('.swiper-container-initialized') ) {
                    swiper_instock.destroy(true, true);
                }
                paramsSlider(
                    slidesPerView = 6,
                    slidesPerGroup = 6,
                    loop = true,
                    loopFillGroupWithBlank = false,
                    dynamicBullets = false
                )
            } else {
                blockArrows.hide();
                blockFooter.hide();
            }
        }

        // 992 - 1199
        if ( $('body').width() >= 992 && $('body').width() <= 1199 ) {
            if ( blockItem.not('.swiper-slide-duplicate').length > 3 ) {
                if ( blockList.hasClass('.swiper-container-initialized') ) {
                    swiper_instock.destroy(true, true);
                }
                paramsSlider(
                    slidesPerView = 5,
                    slidesPerGroup = 5,
                    loop = true,
                    loopFillGroupWithBlank = false,
                    dynamicBullets = true
                )
            } else {
                blockArrows.hide();
                blockFooter.hide();
            }
        }

        // 768 - 991
        if ( $('body').width() >= 768 && $('body').width() <= 991 ) {
            if ( blockItem.not('.swiper-slide-duplicate').length > 2 ) {
                if ( blockList.hasClass('.swiper-container-initialized') ) {
                    swiper_instock.destroy(true, true);
                }
                paramsSlider(
                    slidesPerView = 5,
                    slidesPerGroup = 5,
                    loop = true,
                    loopFillGroupWithBlank = false,
                    dynamicBullets = true,
                    freeMode = true,
                    freeModeMomentum = true
                )
            } else {
                blockFooter.hide();
            }
        }

        /// 640 - 767
        if ( $('body').width() >= 640 && $('body').width() <= 767 ) {
            if ( blockItem.not('.swiper-slide-duplicate').length > 2 ) {
                if ( blockList.hasClass('.swiper-container-initialized') ) {
                    swiper_instock.destroy(true, true);
                }
                paramsSlider(
                    slidesPerView = 2,
                    slidesPerGroup = 1,
                    loop = true,
                    loopFillGroupWithBlank = true,
                    dynamicBullets = true,
                    freeMode = true,
                    freeModeMomentum = true
                )
            } else {
                blockFooter.hide();
            }
        }

        // ... - 639
        if ( $('body').width() <= 639 ) {
            if ( blockItem.not('.swiper-slide-duplicate').length > 1 ) {
                if ( blockList.hasClass('.swiper-container-initialized') ) {
                    swiper_instock.destroy(true, true);
                }
                paramsSlider(
                    slide = 1,
                    slideGroup = 1,
                    loop = true,
                    fill = true,
                    dynamicBullets = true,
                    freeMode = true,
                    freeModeMomentum = true
                )
            } else {
                blockFooter.hide();
            }
        }

    });
})(jQuery);

(function ($) {
	$(document).ready(function(){

		var block = $(".gallery"),
			blockList = block.find(".gallery__list"),
			blockItem = block.find(".gallery__item"),
			blockDots = block.find(".gallery__dots");

		function paramsSlider(slidesPerView, slidesPerGroup, loop, loopFillGroupWithBlank, dynamicBullets, freeMode, freeModeMomentum) {
			var options = {
				wrapperClass: "gallery__list-inner",
				slideClass: "gallery__item",
				slidesPerView: slidesPerView,
				slidesPerGroup: slidesPerGroup,
				setWrapperSize: true,
				grabCursor: true,
				watchOverflow: true,
				updateOnWindowResize: true,
				observer: true,
				observeSlideChildren: true,
				spaceBetween: 15,
				loop: loop,
				loopFillGroupWithBlank: loopFillGroupWithBlank,
				freeMode: freeMode,
				freeModeMomentum: freeModeMomentum,
				navigation: {
					nextEl: ".gallery .arrows__next",
					prevEl: ".gallery .arrows__prev",
					disabledClass: "arrows__arrow_disabled",
				},
				pagination: {
					el: ".gallery__dots .dots",
					clickable: true,
					dynamicBullets: dynamicBullets,
					dynamicMainBullets: 1,
					bulletClass: "dots__dot",
					bulletActiveClass: "active",
				},
			};
			var GALLERY = new Swiper(".gallery__list", options);
		}

		var windowWidth = $("body").width();

		if ( windowWidth >= 992 ) {
			blockDots[0].style.display = "none";
		}

		if ( windowWidth >= 640 && windowWidth <= 991 ) {
			console.log(windowWidth);
			// console.log('>= 640 < 991');
			if ( $(".gallery .gallery__item").not(".swiper-slide-duplicate").length > 2 ) {
				paramsSlider(
					slidesPerView = 2,
					slidesPerGroup = 2,
					loop = true,
					loopFillGroupWithBlank = false,
					dynamicBullets = false,
					freeMode = false,
					freeModeMomentum = false
				);
				blockDots[0].style.display = "block";
			} else {
				paramsSlider(
					slidesPerView = 2,
					slidesPerGroup = 2,
					loop = false,
					loopFillGroupWithBlank = false,
					dynamicBullets = false,
					freeMode = false,
					freeModeMomentum = false
				);
				blockDots[0].style.display = "none";
			}
		}

		if ( windowWidth <= 639 ) {
			// console.log('<= 639');
			if ( $(".gallery .gallery__item").not(".swiper-slide-duplicate").length > 2 ) {
				paramsSlider(
					slidesPerView = 1,
					slidesPerGroup = 1,
					loop = true,
					loopFillGroupWithBlank = false,
					dynamicBullets = false,
					freeMode = false,
					freeModeMomentum = false
				);
				blockDots[0].style.display = "block";
			} else {
				paramsSlider(
					slidesPerView = 1,
					slidesPerGroup = 1,
					loop = false,
					loopFillGroupWithBlank = false,
					dynamicBullets = false,
					freeMode = false,
					freeModeMomentum = false
				);
				blockDots[0].style.display = "none";
			}
		}

		lightGallery(".gallery", "a");

	});
})(jQuery);

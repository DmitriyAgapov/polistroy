(function($){

	$(document).ready(function(){
		var galleryThumbs = new Swiper('.gallery-thumbs', {
			spaceBetween: 20,
			slidesPerView: 5,
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			breakpoints: {
				768: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 3,
				},
				1280: {
					slidesPerView: 4,
				},
			},
		});
		var galleryTop = new Swiper('.gallery-top', {
			spaceBetween: 0,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			thumbs: {
				swiper: galleryThumbs
			},

			pagination: {
				el: '.gallery-thumbs .swiper-pagination',
			}
		});

	});

})(jQuery);

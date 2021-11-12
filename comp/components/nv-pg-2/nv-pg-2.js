(function($) {
    $(document).ready(function() {

		$('.nv-pg-2').selectionMenuItemsScrollPage({
			activeClass: 'active',
			start: 70,
			end: 120,
			speedScroll: 300,
			element: '.nv-pg-2__item'
		});

		$('.nv-pg-2__cont').sticky({
			stickyoffsetTop: 50,
		});

    });
})(jQuery);

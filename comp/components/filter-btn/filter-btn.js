(function ($) {
	$(document).ready(function () {

		$('.filter-btn a').on('click', function () {
            $('.filter-panel').addClass('active');
            $('.filter-panel__inner').scrollTop(0);
            // $('body').pageScrollHide(); // БЛОЧИМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
		});

	})
})(jQuery);

(function($) {
	$(document).ready(function(){

		var heightWin = $(window).height();
		var screenWin = heightWin * 3;
		$(window).scroll(function () {
			if ($(this).scrollTop() > screenWin) {
				$('.to-top').fadeIn();
			} else {
				$('.to-top').fadeOut();
			}
		});
		$('.to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 700);
			return false;
		});

	});
})(jQuery);

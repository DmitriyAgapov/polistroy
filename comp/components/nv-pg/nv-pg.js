(function($) {
    $(document).ready(function() {

		$(".nv-pg").stickySidebar({
	      topSpacing: 60,
	      bottomSpacing: 15,
	      resizeSensor: false,
	      containerSelector: '.sd',
	      innerWrapperSelector: '.nv-pg__sticky'
	    });

        $('.nv-pg').scrollingToElement({
            offsetTop: 0,
            speed: 300
        });

        $('.nv-pg a[href^="#"]').click(function() {
            $('.nv-pg a').removeClass('active');
            $(this).addClass('active');
        });

    });
})(jQuery);

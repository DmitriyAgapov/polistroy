(function($) {
    $(document).ready(function(){

        $('.search-m-btn').on('click', function() {
            $(this).toggleClass('open');
            $('.menu-m-panel').removeClass('open');

            if ( $('.search-m-panel').hasClass('open') ) {
                $('.search-m-panel').removeClass('open');
                $('.search-m-panel-overlay').removeClass('active');
            } else {
                $('.search-m-panel__inner').scrollTop(0);
                $('.search-m-panel').addClass('open');
                $('.search-m-panel-overlay').addClass('active');
            }

            $('.menu-m-panel').removeClass('open');
            $('.menu-m-panel-overlay').removeClass('active');
            $('.burger').removeClass('open');
        });

    });
})(jQuery);

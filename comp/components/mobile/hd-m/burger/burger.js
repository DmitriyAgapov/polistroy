(function ($) {
    $(document).ready(function(){

        $('.burger').on('click', function() {
            $(this).toggleClass('open');

            if ( $('.menu-m-panel').hasClass('open') ) {
                $('.menu-m-panel').removeClass('open');
                $('.menu-m-panel-overlay').removeClass('active');
                $(this).removeClass('open');
            } else {
                $('.menu-m-panel__inner').scrollTop(0);
                $('.menu-m-panel').addClass('open');
                $('.menu-m-panel-overlay').addClass('active');
                $(this).addClass('open');
            }

            $('.search-m-panel').removeClass('open');
            $('.search-m-panel-overlay').removeClass('active');
            $('.search-m-btn').removeClass('open');
        });

    });
})(jQuery);

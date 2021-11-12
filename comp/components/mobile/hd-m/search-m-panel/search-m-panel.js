(function ($) {
    $(document).ready(function(){

        $('.search-m-panel-overlay').on('click', function() {
            $(this).removeClass('active');
            $('.search-m-panel').removeClass('open');
            $('.search-m-btn').removeClass('open');
        });

    });
})(jQuery);

(function ($) {
    $(document).ready(function(){

        $('.menu-m-panel__overlay').on('click', function() {
            $(this).removeClass('active');
            $('.menu-m-panel').removeClass('open');
            $('.burger').removeClass('open');
        });

    });
})(jQuery);

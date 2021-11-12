(function($) {
    $(document).ready(function(){
       $('.block-description-series__link-toggle').on('click', function() {
           $(this).toggleClass('toggled');
           $('.block-description-series__content-mobile-only').toggleClass('closed');
           $('.block-description-series__content').toggleClass('opened');
       });
    });
})(jQuery);
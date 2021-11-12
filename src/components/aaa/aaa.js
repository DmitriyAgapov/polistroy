(function($) {
    if (typeof Drupal !== 'undefined') {
        Drupal.behaviors.aaa = {
            attach: function(context, settings) {
                init();
            }
        };
    } else {
        init();
    }

    function init() {
        // Ваш код
    }

    $(document).ready(function(){
        // Ваш код
    });

})(jQuery);

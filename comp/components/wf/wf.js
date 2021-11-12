(function ($) {

    if (typeof Drupal !== 'undefined') {
        Drupal.behaviors.wf = {
            attach: function(context, settings) {
                init();
            }
        };
    } else {
        init();
    }
    function init() {

        $('input[name="phone"]').once().inputmask({
            alias: "+7##########",
            "placeholder": "_",
            clearMaskOnLostFocus: true,
            showMaskOnHover: true,
            showMaskOnFocus: true
        });
        $('input[name="email"]').once().inputmask({
            alias: "email",
            "placeholder": "_",
            clearMaskOnLostFocus: true,
            showMaskOnHover: true,
            showMaskOnFocus: true
        });

    }

})(jQuery);

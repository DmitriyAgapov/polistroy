(function($) {
    if (typeof Drupal !== 'undefined') {
        Drupal.behaviors.toBasket = {
            attach: function(context, settings) {
                init();
            }
        };
    } else {
        init();
    }

    function init() {
        $('.to-basket').each(function() {
            var qty = $(this);
            var input = qty.find('.form-item input.form-text');
            var formItem = input.parent();
            formItem.once().append('<span class="qty-up"></span><span class="qty-down"></span>');
        });
        $('.qty-up').once().click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
        $('.qty-down').once().click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
    }

})(jQuery);

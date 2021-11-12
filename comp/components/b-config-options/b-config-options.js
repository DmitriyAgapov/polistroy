(function($) {
    $(document).ready(function(){

        if ( $('body').width() >= 768 && $('body').width() <= 991 ) {
            move_m();
        } else if ( $('body').width() <= 767 ) {
            move_m2();
        } else {
            move_pc();
        }

        $(window).resize(function(){
            if ( $('body').width() >= 768 && $('body').width() <= 991 ) {
                move_m();
            } else if ( $('body').width() <= 767 ) {
                move_m2();
            } else {
                move_pc();
            }
        });

        function move_m() {
            $('.b-config-options .item').each(function(){
                $(this).find('.item__btns').appendTo( $(this).find('.item__cont') );
            });
        }

        function move_m2() {
            $('.b-config-options .item').each(function(){
                $(this).find('.item__btns').appendTo( $(this).find('.item__info') );
            });
        }

        function move_pc() {
            $('.b-config-options .item').each(function(){
                $(this).find('.item__btns').appendTo( $(this).find('.item__info') );
            });
        }

    });
})(jQuery);

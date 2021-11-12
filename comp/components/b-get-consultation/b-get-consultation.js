(function($) {
    $(document).ready(function(){

        if ( $('body').width() < 768 ) {
            move_m();
        } else {
            move_pc();
        }

        $(window).resize(function(){
            if ( $('body').width() < 768 ) {
                move_m();
            } else {
                move_pc();
            }
        });

        function move_m() {
            $('.b-get-consultation .privacy-policy').parent().appendTo( $('.b-get-consultation .webform-submission-form .webform-flex:first-child .webform-flex--container') );
        }

        function move_pc() {
            $('.b-get-consultation .privacy-policy').parent().appendTo( $('.b-get-consultation .webform-submission-form') );
        }

    });
})(jQuery);

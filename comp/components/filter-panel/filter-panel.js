(function ($) {
	$(document).ready(function () {

        $('.filter-panel__overlay').on('click', function () {
            $('.filter-panel').removeClass('active');
            // $('body').pageScrollShow(); // РАЗРЕШАЕМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
        });

        if ( $('body').width() <= 991 ) {
            move_m();
        } else {
            move_pc();
        }

        $(window).resize(function(){
            if ( $('body').width() <= 991 ) {
                move_m();
            } else {
                move_pc();
            }
        });

        function move_m() {
            if ( $('.filter-catalog').length ) {
                $('.filter-catalog').appendTo('.filter-panel__inner');
                $('.filter-panel .form-actions').once().clone(true).appendTo('.filter-panel__ft');
            }
        }
        function move_pc() {
            if ( !$('.sd_left .filter').length ) {
                $('.filter-panel').removeClass('active');
                $('.filter-panel__inner .filter').appendTo('.sd_left');
            }
        }

	})
})(jQuery);

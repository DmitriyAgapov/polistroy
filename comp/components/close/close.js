(function($) {
    $(document).ready(function(){

        $('.close').on('click', function(e) {
            if ( $('.filter-panel').length ) {
                $('.filter-panel').removeClass('active');
                // $('body').pageScrollShow(); // РАЗРЕШАЕМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
            }
            if ( e.target.parentNode.classList.contains('search-m-panel') ) {
                $('.search-m-panel').removeClass('open');
                // $('body').pageScrollShow(); // РАЗРЕШАЕМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
            }
            if ( e.target.parentNode.classList.contains('menu-m-panel__hd') ) {
                $('.menu-m-panel').removeClass('open');
                // $('body').pageScrollShow(); // РАЗРЕШАЕМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
            }
        });

    });
})(jQuery);

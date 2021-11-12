(function($) {
  if (typeof Drupal !== 'undefined') {
    Drupal.behaviors.filter = {
      attach: function(context, settings) {
        init();
      }
    };
  } else {
    init();
  }

  function init() {

      $('.filter__row').each(function(){
          var idRow = $(this).find('.filter__content').attr('id');
          if ( localStorage.getItem( idRow ) ) {
              $('#' + idRow).find('.filter__more').addClass('active').find('span').text('свернуть');
              $('#' + idRow).find('.filter__other').slideDown();
          }
      });

      $(document).once().on('click', '.filter__more', function(){
          $(this).toggleClass('active');
          $(this).parent().find('.filter__other').slideToggle();
          if ( $(this).hasClass('active') ) {
              localStorage.setItem( $(this).parent().attr('id') , 'open');
              $(this).find('span').text('свернуть');
          } else {
              $(this).find('span').text('показать все');
              localStorage.setItem( $(this).parent().attr('id') , '');
          }
      });

      $(document).on('click', '.filter__clear', function(){
		  if ( $('.filter-panel').hasClass('active') ) {
			  $('.filter-panel').removeClass('active');
              // $('body').pageScrollShow(); // РАЗРЕШАЕМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
		  }
      });
      $(document).on('click', '.filter__submit', function(){
		  if ( $('.filter-panel').hasClass('active') ) {
			  $('.filter-panel').removeClass('active');
              // $('body').pageScrollShow(); // РАЗРЕШАЕМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
		  }
      });

  }
})(jQuery);

(function($) {
  $(document).ready(function() {

    $(".compare-table__content-inner").mCustomScrollbar({
      alwaysShowScrollbar: 1,
      axis: "x",
      scrollbarPosition: "outside",
      callbacks:{
          onUpdate:function(){
              // setLazy();
              lazyLoad();
          }
      }
    });

    var sRowHeaderRowHeight;
    var sRow;
    var sRowContentRowHeight;
    $('.compare-table__header .compare-table__row').each(function() {
      sRowHeaderRowHeight = $(this).outerHeight();
      sRow = $(this).data('row');
      sRowContentRowHeight = $('.compare-table__content *[data-row^=' + sRow + ']').outerHeight();
      console.log(sRow + ' ' + sRowHeaderRowHeight);
      // console.log(sRow);
      console.log(sRowContentRowHeight);
      if (sRowHeaderRowHeight > sRowContentRowHeight) {
        $('.compare-table__row[data-row^=' + sRow + ']').height(sRowHeaderRowHeight);
      }
      if (sRowContentRowHeight > sRowHeaderRowHeight) {
        $('.compare-table__row[data-row^=' + sRow + ']').height(sRowContentRowHeight);
      }
    });

    $('.characteristic-type-toggle a').on('click', function() {
      if ($(this).attr('href') == '#all') {
        $('.characteristic-type-toggle .characteristic-type-toggle__item').removeClass('active');
        $(this).parent().addClass('active');
        $('.compare-table__row:not(".different, .compare-table__row-header")').show();
      }
      if ($(this).attr('href') == '#different') {
        $('.characteristic-type-toggle .characteristic-type-toggle__item').removeClass('active');
        $(this).parent().addClass('active');
        $('.compare-table__row:not(".different, .compare-table__row-header")').hide();
      }
    });

  });
})(jQuery);

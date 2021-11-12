(function($){
    $(document).ready( function(){

        // descrTop();
        // descrBottom();

        var mql = window.matchMedia("(orientation: portrait)");

        if(mql.matches) {
            // Портретная ориентация
            $('.descr-pg__more').unbind();
            descrTop();
            descrBottom();
        } else {
            // Горизонтальная ориентация
            $('.descr-pg__more').unbind();
            descrTop();
            descrBottom();
        }

        mql.addListener(function(m) {
            if(m.matches) {
                // Изменено на портретный режим
                $('.descr-pg__more').unbind();
                descrTop();
                descrBottom();
            }
            else {
                // Изменено на горизонтальный режим
                $('.descr-pg__more').unbind();
                descrTop();
                descrBottom();
            }
        });

        function descrTop() {
            // console.clear();
            // console.log( $(window).width() );
            var descr = $('.descr-pg_top');
            var descrValue = descr.find('.descr-pg__value');
            var heightCont = descrValue.height()
            var height = descr.height();
            // console.log( heightCont + ' ' + height );
            if ( ($(window).width()<=991) && (heightCont > height) ) {
                // console.log( '<' );
                descr.addClass('is-hide');
                if ( descr.find('.descr-pg__more').length == '0' ) {
                    descr.append('<span class="descr-pg__more is-show">Развернуть</span>');
                }
            } else {
                // console.log( '>' );
                descr.removeClass('is-show is-hide');
                descr.find('.descr-pg__inner').removeAttr('style');
                descr.find('.descr-pg__more').remove();
            }
            descr.find('.descr-pg__more').on('click', function(){
                if ( $(this).hasClass('is-show') ) {
                    $(this).parents('.descr-pg').find('.descr-pg__inner').css({'max-height':heightCont});
                    $(this).text('Свернуть');
                    $(this).toggleClass('is-show is-hide');
                    $(this).parents('.descr-pg').toggleClass('is-show is-hide');
                } else {
                    $(this).parents('.descr-pg').find('.descr-pg__inner').css({'max-height':height});
                    $(this).text('Развернуть');
                    $(this).toggleClass('is-show is-hide');
                    $(this).parents('.descr-pg').toggleClass('is-show is-hide');
                }
            });
        }

        function descrBottom() {
            // console.clear();
            // console.log( $(window).width() );
            var descr = $('.descr-pg_bottom');
            var descrValue = descr.find('.descr-pg__value');
            var heightCont = descrValue.height()
            var height = descr.height();
            // console.log( heightCont + ' ' + height );
            if ( ($(window).width()<992) && (heightCont > height) ) {
                // console.log( '<' );
                descr.addClass('is-hide');
                if ( descr.find('.descr-pg__more').length == '0' ) {
                    descr.append('<span class="descr-pg__more is-show">Развернуть</span>');
                }
            } else {
                // console.log( '>' );
                descr.removeClass('is-show is-hide');
                descr.find('.descr-pg__inner').removeAttr('style');
                descr.find('.descr-pg__more').remove();
            }
            descr.find('.descr-pg__more').on('click', function(){
                if ( $(this).hasClass('is-show') ) {
                    $(this).parents('.descr-pg').find('.descr-pg__inner').css({'max-height':heightCont});
                    $(this).text('Свернуть');
                    $(this).toggleClass('is-show is-hide');
                    $(this).parents('.descr-pg').toggleClass('is-show is-hide');
                } else {
                    $(this).parents('.descr-pg').find('.descr-pg__inner').css({'max-height':height});
                    $(this).text('Развернуть');
                    $(this).toggleClass('is-show is-hide');
                    $(this).parents('.descr-pg').toggleClass('is-show is-hide');
                }
            });
        }

    });
})(jQuery);

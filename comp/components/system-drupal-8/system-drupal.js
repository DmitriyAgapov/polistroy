(function ($) {

    if (typeof Drupal !== "undefined") {
        Drupal.behaviors.systemDrupal = {
            attach: function(context, settings) {
                init();
            }
        };
    } else {
        init();
    }

    // ------------------------------------------------------------------------

    function init() {

        // ЗАКРЫВАЕМ СООБЩЕНИЯ ДРУПАЛА
        $('.messages__close').on('click', function(e) {
            $(this).parents('.message-system').remove();
        });
        // КОНЕЦ

    }

    // ------------------------------------------------------------------------

    /*
    * ПАНЕЛЬ СИСТЕМНЫХ ВКЛАДОК
    */
    $.fn.systemTabs = function(options) {
        var tabs = this;
        return this.each(function() {
            tabs.ready(function(){
                // console.clear();

                // -------------------------------------------------------------

                var ul = tabs.find("ul");
                var li = ul.find("li");

                if ( !$(".system-tabs__expanded").length ) {
                    ul.after("<div class=\"system-tabs__expanded\"><div class=\"system-tabs__burger\"><span></span></div><div class=\"system-tabs__mn\"></div></div>");
                    $(".system-tabs__mn").append( li.clone() );
                    $(".system-tabs__mn li").each(function() {
                        $(this).removeClass("system-tabs__item").addClass("hidden");
                    });
                }

                var width_div_tabs = tabs.outerWidth();
                // console.log( 'ширина области табов = ' + width_div_tabs );
                // console.log( 'количество табов = ' + ul.find('li').not('.hidden').length + ' шт.' );

                var width_ul = 0;
                li.each(function(){
                    width_ul = width_ul + $(this).outerWidth();
                });
                // console.log('ширина всех табов = ' + width_ul);

                var width_burger = $(".system-tabs__burger").width();
                // console.log('ширина бургера = ' + width_burger);

                if ( width_ul > width_div_tabs ) {

                    // console.group('LI');
                    var new_width_ul = 0;
                    li.each(function(index) {
                        var this_li = $(this);
                        new_width_ul = new_width_ul + this_li.outerWidth();
                        // console.log(new_width_ul);
                        var li_right = this_li.position().left + this_li.outerWidth() + width_burger;
                        // console.log( this_li.position().left + ' | ' + this_li.outerWidth() );

                        if ( li_right > width_div_tabs ) {
                            // console.log(index + ': ' + li_right + ' : ' + this_li.text() + ' : ' + 'не входит');
                            this_li.addClass("hidden");
                            $(".system-tabs__mn li").eq(index).removeClass("hidden");
                        } else {
                            // console.log(index + ': ' + li_right + ' : ' + this_li.text() );
                        }

                    });
                    // console.groupEnd();

                    // console.group('ВИДИМЫЕ LI');
                    var ulWidthVisible = 0;
                    ul.find("li").not(".hidden").each(function(){
                        ulWidthVisible = ulWidthVisible + $(this).outerWidth();
                    });
                    // console.log('ширина видимых табов = ' + ulWidthVisible);
                    // console.groupEnd();

                    // console.group('ШИРИНА СВОБОДНОГО МЕСТА');
                    var widthFree = width_div_tabs - ulWidthVisible - width_burger;
                    // var widthFree = width_div_tabs - (ulWidthVisible - width_burger);
                    // console.log( width_div_tabs + ' - ' + ulWidthVisible + ' - ' + width_burger + ' = ' + widthFree + ' px' );
                    // console.log( width_div_tabs + ' - ' + (ulWidthVisible - width_burger)  + ' = ' + (widthFree-width_burger) + ' px' );
                    // console.groupEnd();

                    // console.group('ШИРИНА ПЕРВОГО СКРЫТОГО ПУНКТА');
                    var widthFirstHiddenItem = ul.find("li.hidden").first().width();
                    // console.log( widthFirstHiddenItem );
                    // console.log( widthFirstHiddenItem + width_burger );
                    // console.groupEnd();

                    if ( widthFree > widthFirstHiddenItem ) {
                        $(".system-tabs__mn li").eq( ul.find("li.hidden").first().index() ).addClass("hidden");
                        ul.find("li.hidden").first().removeClass("hidden");
                    }

                } else {
                    $(".system-tabs__expanded").remove();
                    li.removeClass("hidden");
                }

                // -------------------------------------------------------------

            });
        });
    };

    // ------------------------------------------------------------------------

    $(document).ready(function(){

        /*
        * ПАНЕЛЬ СИСТЕМНЫХ ВКЛАДОК
        * ВЫЗОВ ФУНКЦИИ 'systemTabs()'
        */
        $(".system-tabs").systemTabs();
        $(window).resize(function(){
            $(".system-tabs").systemTabs();
        });
        // КОНЕЦ

        // ------------------------------------------------------------------------

        /*
        * ЛАЙФХАК, ЧТОБЫ МОДАЛКА НЕ БЫЛА МУТНОЙ В БРАУЗЕРЕ ХРОМ
        * при открытии модалки оборачиваем класс 'ui-dialog' в 'div.ui-dialog-wrapper'
        * для которого задаем через стили фиксированную позицию и выравнивание через 'display: flex'
        * при закрытии окна удаляем этот див
        */
        // 1 ВАРИАНТ
        // jQuery.extend(jQuery.ui.dialog.prototype.options, {
        //     open: function (event, ui) {
        //         $('.ui-dialog').once().wrap('<div class="ui-dialog-wrapper"></div>');
        //         // $('body').pageScrollHide(); // ЗАПРЕЩАЕМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
        //     },
        //     beforeClose: function( event, ui ) {
        //         $(this).dialog("destroy");
        //         $('.ui-dialog-wrapper').remove();
        //         // $('body').pageScrollShow(); // РАЗРЕШАЕМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
        //     },
        //     close: function (event, ui) {
        //         // $('.ui-dialog-wrapper').remove();
        //         // $('body').pageScrollShow(); // РАЗРЕШАЕМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
        //     }
        // });
        // 2 ВАРИАНТ
        // $(document).on("dialogcreate", function( event, ui ) {
        //     console.log("dialogcreate");
        //     // console.log( event );
        //     $('.ui-dialog').once().wrap('<div class="ui-dialog-wrapper"></div>');
        // });
        // $(document).on("dialogbeforeclose", function( event, ui ) {
        //     console.log("dialogbeforeclose");
        //     $('.ui-dialog-wrapper').remove();
        //     $('body').pageScrollShow(); // РАЗРЕШАЕМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
        // });
        // $(document).on("dialogclose", function( event, ui ) {
        //     // console.log( event );
        //     console.log("dialogclose");
        //     $('.ui-dialog-wrapper').remove();
        //     $('body').pageScrollShow(); // РАЗРЕШАЕМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
        // });
        // 3 ВАРИАНТ
        // if ($('.ui-dialog:visible').length) {
        //     $('body').pageScrollHide(); // БЛОЧИМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
        //     if ( !$('.ui-dialog-wrapper').length ) {
        //         $('.ui-dialog').wrap('<div class="ui-dialog-wrapper"></div>');
        //     }
        // }
        // $(document).keydown(function(eventObject){
        //     if( eventObject.which == 27 ){
        //         if ($('.ui-dialog:visible').length) {
        //             $('.ui-dialog-wrapper').remove();
        //             $('body').pageScrollShow(); // РАЗРЕШАЕМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
        //         }
        //     };
        // });
        // jQuery('.ui-dialog-titlebar-close').on("click", function() {
        //     $('.ui-dialog-wrapper').remove();
        //     $('body').pageScrollShow(); // РАЗРЕШАЕМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
        // });
        // 4 ВАРИАНТ
        $.widget( "ui.dialog", $.ui.dialog, {
            open: function() {
                $('.ui-dialog').not('.feedback-call-form__ui-dialog').once().wrap('<div class="ui-dialog-wrapper"></div>');
                return this._super();
            },
            close: function () {
                $('.ui-dialog-wrapper, .autodialog-content').remove();
            }
        });
        // КОНЕЦ

    });

})(jQuery);

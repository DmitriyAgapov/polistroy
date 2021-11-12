(function ($) {

    /*
    * делаем проверку на 'drupal'
    * если ='underfined' то выполняем функцию init() после выполнения ajax
    * если !='underfined' то просто выполняем функцию init() при загрузке страницы
    * свой код пишем внутри init()
    */
    if (typeof Drupal !== 'undefined') {
        Drupal.behaviors.mySimpleFileInput = {
            attach: function(context, settings) {
                init();
            }
        };
    } else {
        init();
    }
    function init() {

        $('.wf__upload .form-file').simpleFileInput({
            buttonText: 'Прикрепить файл',
            placeholder: 'Файл не выбран'
        });

    }

})(jQuery);

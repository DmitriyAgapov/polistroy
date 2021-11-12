///Вкладки раздела Единица каталога
(function($) {
    $(document).ready(function() {
        if ($('body').width() >= 768) {
            $("input:radio").eq(0).prop('checked', true);
        }
        else {
            $("input:checkbox").prop({type:"radio"});
            $("input:radio").eq(0).prop('checked', true);
        }
        window.onresize = function(e) {
            if ($('body').width() >= 768) {
                $("input:checkbox").prop('checked', false);
                $("input:checkbox").prop({type:"radio"});
                $("input:radio").eq(0).prop('checked', true);
            }
            else {
                $("input:radio").prop('checked', false);
                $("input:radio").prop({type:"checkbox"});
                $("input:checkbox").eq(0).prop('checked', true);
            }
        };

        // tabs("tabbed-panels__link", "tabbed-panels__block");
        // document.querySelectorAll(".tabbed-panels__link")[0].classList.add('active');
        // document.querySelectorAll(".tabbed-panels__block")[0].classList.add('active');
        // // setJsVoid(document.querySelectorAll(".link"));
        //
        // function tabs(btnClass, blockClass) {
        //     var link = document.querySelectorAll("." + btnClass);
        //     var tabs = document.querySelectorAll("." + blockClass);
        //
        //     for (var i = 0; i < link.length; i++) {
        //         setClick(i);
        //     }
        //
        //     function setClick(i) {
        //         link[i].addEventListener('click', function() {
        //             removeClass(link, 'active');
        //             removeClass(tabs, 'active');
        //             // При клике - убрать активный класс со всех кнопок и блоков,
        //
        //             addClass(link[i], 'active');
        //             addClass(tabs[i], 'active');
        //             // Добавить на нужные элементы.
        //         });
        //     }
        // }
        //
        // /**************************/
        //
        // function addClass(elems, className) {
        //     if (elems instanceof HTMLElement) {
        //         elems.classList.add(className);
        //         return;
        //     }
        //
        //     for (var i = 0; i < elems.length; i++) {
        //         elems[i].classList.add(className);
        //     }
        // }
        //
        // function removeClass(elems, className) {
        //     if (elems instanceof HTMLElement) {
        //         elems.classList.remove(className);
        //         return;
        //     }
        //
        //     for (var i = 0; i < elems.length; i++) {
        //         elems[i].classList.remove(className);
        //     }
        // }

        // function setJsVoid(elems) {
        //     for (var i = 0; i < elems.length; i++) {
        //         elems[i].setAttribute('href', "javascript:void(0);");
        //     }
        // }
    });
})(jQuery);
/*
    ------------------------------------------------------------------
    ----------  /06-jquery-desarrolloweb.com/  -----------------------
    ----------  /01-manual-jquery/  ----------------------------------
    ----------  /src/script/  ----------------------------------------
    ----------  /02-primeros-pasos-jquery-por-la-practica/  ----------
    ----------  /02-añadir-quitar-clases.js  -------------------------
    ------------------------------------------------------------------
*/


(function ($) {


    console.log('\n');
    console.warn('----------  02-añadir-quitar-clases.js  ----------');


    const $a = $("a");
    const $capa = $("#capa");

    $a.mouseover(function () {
        $capa.addClass("clasecss");
    });
    
    $a.mouseout(function () {
        $capa.removeClass("clasecss");
    });

    $a.click(function (event) {
        event.preventDefault();
    });


})(jQuery);

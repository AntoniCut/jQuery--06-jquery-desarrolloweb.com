/*  
    -----------------------------------------------------
    ----------  /06-jquery-desarrolloweb.com/  ----------
    ----------  /01-manual-jquery/  ---------------------
    ----------  /src/script/  ---------------------------
    ----------  /01-introduccion-jquery/  ---------------
    ----------  /02-demos-muy-simples.js  ---------------
    -----------------------------------------------------
*/


(function ($) {


    console.log('\n');
    console.warn('----------  02-demos-muy-simples.js  ----------');


    /*
        --------------------------------
        ----------  1. demo1  ----------
        --------------------------------
    */

    const $capa1 = $("#capa1");
    const $mensaje1 = $("#mensaje1");

    $capa1.mouseenter(function (evento) {
        $mensaje1.css("display", "block");
    });

    $capa1.mouseleave(function (evento) {
        $mensaje1.css("display", "none");
    });



    /*
        --------------------------------
        ----------  2. demo2  ----------
        --------------------------------
    */

    const $capa2 = $("#capa2");
    const $mensaje2 = $("#mensaje2");

    $capa2.mouseenter(function (evento) {
        $mensaje2.css("display", "block");
    });

    $capa2.mouseleave(function (evento) {
        $mensaje2.css("display", "none");
    });


})(jQuery);

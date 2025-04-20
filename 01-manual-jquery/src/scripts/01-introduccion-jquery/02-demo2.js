/*  
    -----------------------------------------------------
    ----------  /06-jquery-desarrolloweb.com/  ----------
    ----------  /01-manual-jquery/  ---------------------
    ----------  /src/script/  ---------------------------
    ----------  /01-introduccion-jquery/  ---------------
    ----------  /02-demo2.js  ---------------------------
    -----------------------------------------------------
*/


(function ($) {


    console.log('\n');
    console.warn('----------  02-demo2.js  ----------');
    

    const $capa = $("#capa");
    const $mensaje = $("#mensaje");
    
    $capa.mouseenter(function (evento) {
        $mensaje.css("display", "block");
    });

    $capa.mouseleave(function (evento) {
        $mensaje.css("display", "none");
    });

})(jQuery);

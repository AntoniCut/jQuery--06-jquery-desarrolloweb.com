/*  
    -----------------------------------------------------
    ----------  /06-jquery-desarrolloweb.com/  ----------
    ----------  /01-manual-jquery/  ---------------------
    ----------  /01-introduccion-jquery/  ---------------
    ----------  /02-demos-muy-simples/  -----------------
    ----------  /02-demo2/  -----------------------------
    ----------  /assets/js/demo2.js  --------------------
    -----------------------------------------------------
*/



export const demo2 = ($) => {

    const $capa = $("#capa");
    const $mensaje = $("#mensaje");
    
    $capa.mouseenter(function (evento) {
        $mensaje.css("display", "block");
    });

    $capa.mouseleave(function (evento) {
        $mensaje.css("display", "none");
    });

}

/*
    ------------------------------------------------------------------
    ----------  /06-jquery-desarrolloweb.com/  -----------------------
    ----------  /01-manual-jquery/  ----------------------------------
    ----------  /src/script/  ----------------------------------------
    ----------  /02-primeros-pasos-jquery-por-la-practica/  ----------
    ----------  /03-mostrar-ocultar-elementos.js  --------------------
    ------------------------------------------------------------------
*/


(function ($) {


    console.log('\n');
    console.warn('----------  03-mostrar-ocultar-elementos.js  ----------');

    const $mayoriaEdad = $("#mayoria_edad");
    const $formularioMayores = $("#formulariomayores");

    $mayoriaEdad.click(function (evento) {

        console.log(evento, $mayoriaEdad.prop("checked"));

        if ( $mayoriaEdad.prop("checked") )
            $formularioMayores.css("display", "block");

        else
            $formularioMayores.css("display", "none");
        
    });


})(jQuery);

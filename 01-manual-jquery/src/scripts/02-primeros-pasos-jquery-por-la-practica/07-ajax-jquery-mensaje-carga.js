/*
    ------------------------------------------------------------------
    ----------  /06-jquery-desarrolloweb.com/  -----------------------
    ----------  /01-manual-jquery/  ----------------------------------
    ----------  /src/script/  ----------------------------------------
    ----------  /02-primeros-pasos-jquery-por-la-practica/  ----------
    ----------  /07-ajax-jquery-mensaje-carga.js  --------------------
    ------------------------------------------------------------------
*/


(function ($) {


    console.log('\n');
    console.warn('----------  07-ajax-jquery-mensaje-carga.js  ----------');

    const $enlaceAjax = $("#enlaceAjax");
    const $cargando = $("#cargando");
    const $destino = $("#destino");


    $enlaceAjax.click(function (evento) {
                
        evento.preventDefault();
        
        $cargando.css("display", "inline");
        
        $destino.load(
            "/06-jquery-desarrolloweb.com/01-manual-jquery/src/services/02-primeros-pasos-jquery-por-la-practica/pagina-lenta.php", 
            function () {
                $cargando.css("display", "none");
            }
        );

    });


})(jQuery);

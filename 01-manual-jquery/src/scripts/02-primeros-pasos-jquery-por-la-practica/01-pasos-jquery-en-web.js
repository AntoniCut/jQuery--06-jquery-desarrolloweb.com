/*
    ------------------------------------------------------------------
    ----------  /06-jquery-desarrolloweb.com/  -----------------------
    ----------  /01-manual-jquery/  ----------------------------------
    ----------  /src/script/  ----------------------------------------
    ----------  /02-primeros-pasos-jquery-por-la-practica/  ----------
    ----------  /01-pasos-jquery-en-web.js  --------------------------
    ------------------------------------------------------------------
*/


(function ($) {


    console.log('\n');
    console.warn('----------  01-pasos-jquery-en-web.js  ----------');


    const $enlace = $('#enlace');

    $enlace.on('click', function (evento) {
        
        alert("Has pulsado el enlace...\nAhora serás enviado a DesarrolloWeb.com");
        evento.preventDefault();
        
    });


})(jQuery);

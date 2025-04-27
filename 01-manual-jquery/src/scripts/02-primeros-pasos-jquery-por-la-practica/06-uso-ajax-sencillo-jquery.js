/*
    ------------------------------------------------------------------
    ----------  /06-jquery-desarrolloweb.com/  -----------------------
    ----------  /01-manual-jquery/  ----------------------------------
    ----------  /src/script/  ----------------------------------------
    ----------  /02-primeros-pasos-jquery-por-la-practica/  ----------
    ----------  /06-uso-ajax-sencillo-jquery.js  ---------------------
    ------------------------------------------------------------------
*/


(function ($) {


    console.log('\n');
    console.warn('----------  06-uso-ajax-sencillo-jquery.js  ----------');


    const $enlaceAjax = $("#enlaceAjax");
    const $enlaceAjaxPhp = $("#enlaceAjaxPhp");

    const $destinoAjax = $("#destinoAjax");
    const $destinoAjaxPhp = $("#destinoAjaxPhp");


    $enlaceAjax.on('click', function (evento) {

        //  -----  elimino el comportamiento por defecto del enlace  -----
        evento.preventDefault();

        //  -----  Aquí pondría el código de la llamada a Ajax  -----
        $destinoAjax.load("contenido-ajax.html");

    });


    $enlaceAjaxPhp.on('click', function (evento) {

        //  -----  elimino el comportamiento por defecto del enlace  -----
        evento.preventDefault();

        //  -----  Aquí pondría el código de la llamada a Ajax  -----
        $destinoAjaxPhp.load(
            "recibe-parametros.php", 
            { 
                nombre: "Pepe", 
                edad: 45 
            }, 
            function () {
                alert("recibidos los datos por ajax");
            }
        );

    });


})(jQuery);

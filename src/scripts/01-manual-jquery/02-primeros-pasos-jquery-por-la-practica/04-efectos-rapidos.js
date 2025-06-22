/*
    ------------------------------------------------------------------
    ----------  /06-jquery-desarrolloweb.com/  -----------------------
    ----------  /01-manual-jquery/  ----------------------------------
    ----------  /src/script/  ----------------------------------------
    ----------  /02-primeros-pasos-jquery-por-la-practica/  ----------
    ----------  /04-efectos-rapidos.js  ------------------------------
    ------------------------------------------------------------------
*/


(function ($) {


    console.log('\n');
    console.warn('----------  04-efectos-rapidos.js  ----------');


    const capaEfectos = $("#capaefectos");
    const $ocultar = $("#ocultar");
    const $mostrar = $("#mostrar");
    const $slideUp = $("#slideUp");
    const $slideDown = $("#slideDown");

    $ocultar.on('click', function (event) {
        event.preventDefault();
        capaEfectos.hide("slow");
    });

    $mostrar.on('click', function (event) {
        event.preventDefault();
        capaEfectos.show(3000);
    });

    $slideUp.on('click', function (event) {
        event.preventDefault();
        capaEfectos.slideUp(3000);
    });

    $slideDown.on('click', function (event) {
        event.preventDefault();
        capaEfectos.slideDown("slow");
    });


})(jQuery);

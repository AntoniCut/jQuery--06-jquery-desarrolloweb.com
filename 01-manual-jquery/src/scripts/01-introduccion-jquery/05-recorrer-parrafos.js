/*
    -----------------------------------------------------
    ----------  /06-jquery-desarrolloweb.com/  ----------
    ----------  /01-manual-jquery/  ---------------------
    ----------  /src/script/  ---------------------------
    ----------  /01-introduccion-jquery/  ---------------
    ----------  /05-recorrer-parrafos.js  ---------------
    -----------------------------------------------------
*/


(function ($) {


    console.log('\n');
    console.warn('----------  05-recorrer-parrafos.js  ----------');


    document.getElementById('rojo').addEventListener('click', function () {
        document.querySelectorAll('p').forEach(function (parrafo) {
            parrafo.classList.add('rojo')
            parrafo.classList.remove('azul')
        })
    })

    $('#azul').on('click', function () {
        $('p').addClass('azul');
        $('p').removeClass('rojo');
    });
    

})(jQuery);
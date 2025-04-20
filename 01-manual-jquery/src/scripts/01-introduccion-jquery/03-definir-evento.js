/*
    -----------------------------------------------------
    ----------  /06-jquery-desarrolloweb.com/  ----------
    ----------  /01-manual-jquery/  ---------------------
    ----------  /src/script/  ---------------------------
    ----------  /01-introduccion-jquery/  ---------------
    ----------  /03-definir-evento.js  ------------------
    -----------------------------------------------------
*/


(function ($) {


    console.log('\n');
    console.warn('----------  03-definir-evento.js  ----------');


    const btn1 = document.getElementById('btn1');
    const $btn2 = $("#btn2");


    btn1.addEventListener('click', function () {
        console.log('VanillaJS: Has hecho clic!');
        alert('VanillaJS: Has hecho clic!');
    });


    $btn2.on('click', function () {
        console.log('jQuery: Has hecho clic!');
        alert('jQuery: Has hecho clic!');
    });

})(jQuery);


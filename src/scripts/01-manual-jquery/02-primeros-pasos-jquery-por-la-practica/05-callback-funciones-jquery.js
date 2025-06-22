/*
    ------------------------------------------------------------------
    ----------  /06-jquery-desarrolloweb.com/  -----------------------
    ----------  /01-manual-jquery/  ----------------------------------
    ----------  /src/script/  ----------------------------------------
    ----------  /02-primeros-pasos-jquery-por-la-practica/  ----------
    ----------  /05-callback-funciones-jquery.js  --------------------
    ------------------------------------------------------------------
*/


(function ($) {


    console.log('\n');
    console.warn('----------  05-callback-funciones-jquery.js  ----------');

    const $original = $("#original");
    const $efectos = $("#efectos");
    const $callback = $("#callback");
    const $micapa = $("#micapa");


    $original.click(function () {
        
        $micapa.css({ 
            top: 200, 
            left: 20 
        });

    });


    $efectos.click(function () {
        
        $micapa.fadeOut(2000);

        $micapa.css({ 
            top: 200, 
            left: 200 
        });
        
        $micapa.fadeIn(2000);

    });


    $callback.click(function () {
        
        $micapa.fadeOut(1000, function () {
            
            $micapa.css({ 
                'top': 200, 
                'left': 200 
            });
            
            $micapa.fadeIn(1000);

        });
    });


})(jQuery);

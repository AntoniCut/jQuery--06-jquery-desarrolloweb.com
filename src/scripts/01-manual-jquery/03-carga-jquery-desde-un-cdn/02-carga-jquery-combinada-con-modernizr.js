/*
     ------------------------------------------------------------------
    ----------  /06-jquery-desarrolloweb.com/  ------------------------
    ----------  /01-manual-jquery/  -----------------------------------
    ----------  /src/scripts/  ----------------------------------------
    ----------  /03-carga-jquery-desde-un-cdn/  -----------------------
    ----------  /01-carga-jquery-combinada-con-modernizr.js  ----------
    -------------------------------------------------------------------
*/


//  ----------  Carga de la Libreria de jQuery desde CDN y si falla desde Local  ----------
yepnope({
    
    load: 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js',

    complete: function () {
        
        console.log('\n');
        console.warn('----------  yepnope cargado  ----------');
        console.log('\n');
        
        //  -----  Validamos si jQuery fue realmente cargado  -----
        if (!window.jQuery) {
            
            console.error('CDN falló. Cargando jQuery desde local...');

            yepnope({
                
                load: '/06-jquery-desarrolloweb.com/01-manual-jquery/src/libs/jquery/local/jquery-3.7.1.min.js',
                
                complete: function () {
                    
                    if (window.jQuery) 
                        iniciarAplicacion('Local');
                    
                    else 
                        console.error('Fallo la carga local de jQuery.');
                }

            });

        } else {
            console.warn('jQuery cargado desde CDN');
            iniciarAplicacion('CDN');
        }

    },

});



//  ----------  Funcionalidad jQuery  ----------
function iniciarAplicacion(origen) {
    
    console.log('\n');
    console.warn('----------  01-carga-jquery-combinada-con-modernizr.js  ----------');

    $(function () {
        
        const jQueryVersion = $.fn.jquery;
        const $version = $('#version');

        console.warn('Versión de jQuery:', jQueryVersion);
        console.warn('Origen de jQuery:', origen);

        $version.append(`<h2>Versión de jQuery: ${jQueryVersion}</h2>`);
        $version.append(`<h3>Origen de jQuery: ${origen}</h3>`);

    });
}

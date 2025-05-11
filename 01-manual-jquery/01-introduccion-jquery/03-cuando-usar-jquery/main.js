/*
    -----------------------------------------------------
    ----------  /06-jquery-desarrolloweb.com/  ----------
    ----------  /01-manual-jquery/  ---------------------
    ----------  /01-introduccion-jquery/  ---------------
    ----------  /03-cuando-usar-jquery/  ----------------
    ----------  /main.js  -------------------------------
    -----------------------------------------------------
*/


import { cdnJQuery_3_6_3 } from "/06-jquery-desarrolloweb.com/01-manual-jquery/src/libs/jquery/cdn/cdn-jquery-3.6.3.js";
import { loadJQueryByCdnOLocal } from "/06-jquery-desarrolloweb.com/01-manual-jquery/src/libs/jquery/load/load-jquery-by-cdn-local.js";


const cdnJQuery = cdnJQuery_3_6_3;
const localJQuery = "/06-jquery-desarrolloweb.com/01-manual-jquery/src/libs/jquery/local/jquery-3.7.1.min.js";

const scriptUrl = "/06-jquery-desarrolloweb.com/01-manual-jquery/src/scripts/01-introduccion-jquery/03-cuando-usar-jquery.js";


//  ------------------------------------------------------------------------------------
//  -----  Ejecutamos la Promesa de carga de jQuery y el script del proyecto  ----------
//  ------------------------------------------------------------------------------------
console.warn("Iniciando carga de jQuery...");
console.log('\n')

loadJQueryByCdnOLocal(cdnJQuery, localJQuery)

    .then($ => {

        console.log('\n');
        console.warn("jQuery cargado correctamente - Version:", $.fn.jquery);

        //  -----  cargamos el script principal del proyecto  -----
        //scriptMain($);
        loadScript(scriptUrl);
    })

    .catch(err => console.error("Error al cargar jQuery:", err));



//  ----------------------------------------------------------------------------------------
//  ----------  Función que carga el script del proyecto de la lógica con jQuery  ----------
//  ---------------------------------------------------------------------------------------- 
function loadScript(scriptUrl) {

    $.ajax({

        url: scriptUrl,
        type: 'HEAD',

        success: function () {

            $.getScript(scriptUrl)
                .done(() => console.log(`Cargado: ${scriptUrl}`))
                .fail((jqxhr, settings, exception) => console.error(`Error en ${scriptUrl}:`, exception));
        },

        error: function () {
            console.warn(`No existe el script: ${scriptUrl}`);
        }

    });

}

/*
    ------------------------------------------------------------------
    ----------  /06-jquery-desarrolloweb.com/  -----------------------
    ----------  /01-manual-jquery/  ----------------------------------
    ----------  /02-primeros-pasos-jquery-por-la-practica/  ----------
    ----------  /06-uso-ajax-sencillo-con-jquery/  -------------------
    ----------  /main.js  --------------------------------------------
    ------------------------------------------------------------------
*/


import { cdnJQuery_3_6_3 } from "/06-jquery-desarrolloweb.com/01-manual-jquery/src/libs/jquery/cdn/cdn-jquery-3.6.3.js";
import { loadJQueryByCdnOLocal } from "/06-jquery-desarrolloweb.com/01-manual-jquery/src/libs/jquery/load/load-jquery-by-cdn-local.js";
import { loadComponentsLayout } from "/06-jquery-desarrolloweb.com/01-manual-jquery/src/scripts/load-components-layout.js";


//  -----  scripts libs jQuery  -----
const cdnJQuery = cdnJQuery_3_6_3;
const localJQuery = "/06-jquery-desarrolloweb.com/01-manual-jquery/src/libs/jquery/local/jquery-3.7.1.min.js";

//  -----  declarar el tilulo del header, url script del proyecto  -----
const headerTitle = 'Sección 2. Primeros pasos jQuery por la práctica <br> 6. Uso AJAX sencillo con jQuery';
const scriptUrl = "/06-jquery-desarrolloweb.com/01-manual-jquery/src/scripts/02-primeros-pasos-jquery-por-la-practica/06-uso-ajax-sencillo-jquery.js";


//  ------------------------------------------------------------------------------------
//  -----  Ejecutamos la Promesa de carga de jQuery y el script del proyecto  ----------
//  ------------------------------------------------------------------------------------
console.warn("Iniciando carga de jQuery...");
console.log('\n')

loadJQueryByCdnOLocal(cdnJQuery, localJQuery)

    .then($ => {

        console.log('\n');
        console.warn("jQuery cargado correctamente - Version:", $.fn.jquery);

        //  -----  cargamos el script que carga los componentes de la layout y el script principal del proyecto  -----
        loadComponentsLayout(headerTitle);
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

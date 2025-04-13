/*
    -----------------------------------------------------
    ----------  /06-jquery-desarrolloweb.com/  ----------
    ----------  /01-manual-jquery/  ---------------------
    ----------  /01-introduccion-jquery/  ---------------
    ----------  /02-demos-muy-simples/  -----------------
    ----------  /02-demo2/  -----------------------------
    ----------  /main.js  -------------------------------
    -----------------------------------------------------
*/


import { loadJQueryByCdnOLocal } from "../../../assets/plugins/load-jquery-by-cdn-local.js";
import { jQueryConfigCdnLocal_3_6 } from "../../../assets/jquery/config-jquery/jquery-config-cdn-local-3.6.js";
import { demo2 } from "./assets/js/demo2.js";


//  ----------  Carga de jQuery y Script  ----------
const jQueryConfig = jQueryConfigCdnLocal_3_6;
const scriptMain = demo2;


//  -----  Ejecutamos las Promesa  -----
console.warn("Iniciando carga de jQuery...");
console.log('\n')

loadJQueryByCdnOLocal(jQueryConfig)

    .then($ => {
        
        console.log('\n');
        console.warn("jQuery cargado correctamente - Version:", $.fn.jquery);
        scriptMain($);              //  -----  cargamos el script principal del proyecto  -----
    })

    .catch(err => console.error("Error al cargar jQuery o jQuery UI:", err));

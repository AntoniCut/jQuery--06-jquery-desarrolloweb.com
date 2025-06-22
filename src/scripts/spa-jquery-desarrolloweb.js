/*
    -----------------------------------------------------
    ----------  /06-jquery-desarrolloweb.com/  ----------
    ----------  /src/scripts/  --------------------------
    ----------  /spa-jquery-desarrolloweb.js/  ----------
    -----------------------------------------------------
*/

import { routesManualSeccion01 } from "/06-jquery-desarrolloweb.com/src/routes/01-routes-manual-seccion-01.js";


export const spaJQueryDesarrolloweb = ($) => {

    
    //  ----------  Documento Cargado  ----------
    console.log('\n');
    console.warn('-----  spa-jquery-desarrolloweb.js  -----');
    console.log('\n');
       
    
    //  ----------  Arrays con la informacion del contenido a cargar de las rutas del proyecto ----------
    const allRoutes = [
        ...routesManualSeccion01
    ];

  
    //  ----------  referencias al HTML  ----------
    const $layout = $('#layout');
    

    //  ----------  Opciones que le pasamos al plugins  ----------
    const configOptions = {
        routes: allRoutes,
        base: '/06-jquery-desarrolloweb.com',
        layoutHeader: '#layoutHeader',
        layoutNavbar: '#layoutNavbar',
        layoutMain: '#layoutMain',
        layoutFooter: '#layoutFooter',
        urlHeader: '/06-jquery-desarrolloweb.com/src/components-layout/layout-header.html',
        urlNavBar: '/06-jquery-desarrolloweb.com/src/components-layout/layout-navbar.html',
        urlFooter: '/06-jquery-desarrolloweb.com/src/components-layout/layout-footer.html',
        urlHome: '/06-jquery-desarrolloweb.com/src/pages/home/index.html',
        titlePage: 'Curso de jQuery de desarrolloweb.com',
        homePath: '/',
        faviconPage: '/06-jquery-desarrolloweb.com/src/favicon/jquery-favicon-original.ico',
        titleHeader: 'Curso de jQuery de desarrolloweb.com',
        draggable: true
    }


    //  ----------  Invocamos el Plugins  --  jquery.spa-with-method-load-from-jquery.js  ----------
    $layout.spaWithMethodLoadFromJQuery(configOptions);

}

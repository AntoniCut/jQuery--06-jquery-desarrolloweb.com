/*
    --------------------------------------------------------
    ----------  /06-jquery-desarrolloweb.com/  -------------
    ----------  /01-manual-jquery/  ------------------------
    ----------  /src/scripts/  -----------------------------
    ----------  /03-carga-jquery-desde-un-cdn/  ------------
    ----------  /01-carga-jquery-desde-un-cdn.js  ----------
    --------------------------------------------------------
*/



(function ($) {


    console.log('\n');
    console.warn('----------  01-carga-jquery-desde-un-cdn.js  ----------');


    $(function () {

        const jQueryVersion = $.fn.jquery;
        const $version = $('#version');

        let origen = 'Desconocido';

        $('script').each(function () {
            
            const $elem = $(this);

            const src = $elem.attr('src') || '';

            if (src.includes('jquery') && src.includes('https')) 
                origen = 'CDN';
            
            else if (src.includes('jquery') && src.includes('/libs/jquery/local/'))
                origen = 'Local';
            
        });
       

        console.warn('jQuery Version:', jQueryVersion);
        console.warn('Origen de jQuery:', origen);

        $version.append(`<h2>Versión de jQuery: ${jQueryVersion} </h2>`);
        $version.append(`<h3>Origen de jQuery: ${origen}</h3>`);

    });

})(jQuery);


/*
(function ($) {


    console.log('\n');
    console.warn('----------  01-carga-jquery-desde-un-cdn.js  ----------');

        
    $(function () {
        
        const jQueryVersion = $.fn.jquery;
        console.warn('jQuery Version:', jQueryVersion);

        const $version = $('#version');
        $version.append(`<h2>Versión de jQuery: ${jQueryVersion} </h2>`);

    });


})(jQuery);
*/
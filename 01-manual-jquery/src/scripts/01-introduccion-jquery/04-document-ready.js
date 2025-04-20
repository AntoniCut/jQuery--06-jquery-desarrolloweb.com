/*
    -----------------------------------------------------
    ----------  /06-jquery-desarrolloweb.com/  ----------
    ----------  /01-manual-jquery/  ---------------------
    ----------  /src/script/  ---------------------------
    ----------  /01-introduccion-jquery/  ---------------
    ----------  /04-document-ready.js  ------------------
    -----------------------------------------------------
*/



//  ----------------------------------
//  ----------  JavaScript  ----------
//  ----------------------------------
function ready(fn) {
            
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
    
}

ready(function () {
    
    console.log('\n');
    console.warn('----------  04-document-ready.js  ----------');

    console.log('\n');
    console.log('El documento está listo con JavaScript');
    alert('El documento está listo con JavaScript');

});


//  ------------------------------
//  ----------  jQuery  ----------
//  ------------------------------
$(document).ready(function () {
    
    console.log('\n');
    console.warn('----------  04-document-ready.js  ----------');

    console.log('\n');
    const jQueryVersion = $.fn.jquery;
    console.warn('jQuery Version:', jQueryVersion);
    
    console.log('\n');
    console.log('El documento está listo con jQuery');
    alert('El documento está listo con jQuery');

});
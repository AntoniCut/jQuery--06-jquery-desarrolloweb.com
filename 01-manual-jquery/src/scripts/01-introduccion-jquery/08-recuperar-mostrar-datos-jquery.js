/*
    -------------------------------------------------------------
    ----------  /06-jquery-desarrolloweb.com/  ------------------
    ----------  /01-manual-jquery/  -----------------------------
    ----------  /src/script/  -----------------------------------
    ----------  /01-introduccion-jquery/  -----------------------
    ----------  /07-recuperar-mostrar-datos-jquery.js  ----------
    -------------------------------------------------------------
*/


(function ($) {


    console.log('\n');
    console.warn('----------  07-recuperar-mostrar-datos-jquery.js  ----------');


    const $load = $("#load");

    $load.on('click', () => $.getJSON('https://jsonplaceholder.typicode.com/todos/', showTodos));


    function showTodos(data) {

        data.forEach(element => {
            let html = $(`<section> <h1> ${element.title} </h1> <p> Usuario: ${element.userId} </p> </section>`);
            $(document.body).append(html);
        })
    }


})(jQuery);
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
    const $info = $("#info");

    $load.on('click', () => $.getJSON('https://jsonplaceholder.typicode.com/todos/', showTodos));


    function showTodos(data) {

        data.forEach(element => {
            
            let html = $(`
                
                <section> 
                    <h3> ${element.title} </h3> 
                    <p> Usuario: ${element.userId} </p> 
                </section>
                
            `);

            $info.append(html);
        })
    }


})(jQuery);
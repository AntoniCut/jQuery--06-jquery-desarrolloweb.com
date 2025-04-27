/*
    -----------------------------------------------------
    ----------  /06-jquery-desarrolloweb.com/  ----------
    ----------  /01-manual-jquery/  ---------------------
    ----------  /src/script/  ---------------------------
    ----------  /01-introduccion-jquery/  ---------------
    ----------  /06-acceso-api.js  ----------------------
    -----------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  06-acceso-api.js  ----------');

    const $info1 = $('#info1');
    const $info2 = $('#info2');

    //  -----  No funciona en IE 11  -----
    fetch('https://jsonplaceholder.typicode.com/todos/1')

        .then(response => response.json())

        .then(json => {

            console.log('Fetch => ', json);

            $info1.append(`
                
                <br>
                <h2> https://jsonplaceholder.typicode.com/todos/1 - utilizando Fetch </h2>
                <br>
                <div class="dato">
                    <h3> ${json.title} </h3>
                    <p> Usuario: ${json.userId} </p>
                    <p> Completado: ${json.completed ? 'Sí' : 'No'} </p>
                </div>
            `);

        });


    $.getJSON('https://jsonplaceholder.typicode.com/todos/1', function (data) {

        console.log('getJSON => ', data);

        $info2.append(`
            
            <br>
            <h2> https://jsonplaceholder.typicode.com/todos/1 - utilizando $.getJSON </h2>
            <br>
            <div class="dato">
                <h3> ${data.title} </h3>
                <p> Usuario: ${data.userId} </p>
                <p> Completado: ${data.completed ? 'Sí' : 'No'} </p>
            </div>
        `);
    });


})(jQuery);




/*
(function ($) {


    console.log('\n');
    console.warn('----------  06-acceso-api.js  ----------');


    // No funciona en IE 11
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        
        .then(response => response.json())
        
        .then(json => console.log('Fetch => ', json))

        
    $.getJSON('https://jsonplaceholder.typicode.com/todos/1', function (data) {
        
        console.log('getJSON => ', data);

    });


})(jQuery);
*/
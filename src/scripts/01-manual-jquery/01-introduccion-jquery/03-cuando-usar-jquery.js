/*  
    -----------------------------------------------------
    ----------  /06-jquery-desarrolloweb.com/  ----------
    ----------  /01-manual-jquery/  ---------------------
    ----------  /src/script/  ---------------------------
    ----------  /01-introduccion-jquery/  ---------------
    ----------  /03-cuando-usar-jquery.js  ---------------
    -----------------------------------------------------
*/


(function ($) {


    console.log('\n');
    console.warn('----------  03-cuando-usar-jquery.js  ----------');

    
    /*
        -----------------------------------------
        ----------  1. definir-evento  ----------
        -----------------------------------------
    */


    const btn1 = document.getElementById('btn1');
    const $btn2 = $("#btn2");

    btn1.addEventListener('click', function () {
        console.log('VanillaJS: Has hecho clic!');
        alert('Vanilla JavaScript: Has hecho clic!!!');
    });

    $btn2.on('click', function () {
        console.log('jQuery: Has hecho clic!');
        alert('jQuery: Has hecho clic!!!');
    });



    /*
        -----------------------------------------
        ----------  2. document-ready  ----------
        -----------------------------------------
    */

    
    //  ----------  JavaScript  ----------
    function ready(fn) {

        if (document.readyState !== 'loading') fn();
        else document.addEventListener('DOMContentLoaded', fn);

    }

    ready(function () {

        console.log('\n');
        console.warn('----------  document ready - fn  ----------');

        console.log('\n');
        console.log('El documento está listo con JavaScript');
        alert('El documento está listo con JavaScript');

    });

    
    //  ----------  jQuery  ----------
    $(document).ready(function () {

        console.log('\n');
        console.warn('----------  document-ready - jQuery  ----------');

        console.log('\n');
        const jQueryVersion = $.fn.jquery;
        console.warn('jQuery Version:', jQueryVersion);

        console.log('\n');
        console.log('El documento está listo con jQuery');
        alert('El documento está listo con jQuery');

    });


    /*
        --------------------------------------------
        ----------  3. Recorrer Párrafos  ----------
        --------------------------------------------
    */

    //  -----  JavaScript  -----
    const btnRojo = document.getElementById('btnRojo');
    const parrafos = document.querySelectorAll('p');

    btnRojo.addEventListener('click', function () {

        parrafos.forEach(function (parrafo) {
            parrafo.classList.add('rojo')
            parrafo.classList.remove('azul')
        });
    });


    //  -----  jQuery  -----
    const $btnAzul = $('#btnAzul');
    const $p = $('p');

    $btnAzul.on('click', function () {
        $p.addClass('azul');
        $p.removeClass('rojo');
    });



    /*
        -------------------------------------
        ----------  4. Acceso API  ----------
        -------------------------------------
    */


    const $info1 = $('#info1');
    const $info2 = $('#info2');


    //  -----  Fetch  --------------------
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
                    <br>
                    <p> Usuario: ${json.userId} </p>
                    <br>
                    <p> Completado: ${json.completed ? 'Sí' : 'No'} </p>
                </div>
            `);

        });

    //  -----  AJAX  -----
    $.getJSON('https://jsonplaceholder.typicode.com/todos/1', function (data) {

        console.log('getJSON => ', data);

        $info2.append(`
            
            <br>
            <h2> https://jsonplaceholder.typicode.com/todos/1 - utilizando $.getJSON </h2>
            <br>
            <div class="dato">
                <h3> ${data.title} </h3>
                <br>
                <p> Usuario: ${data.userId} </p>
                <br>
                <p> Completado: ${data.completed ? 'Sí' : 'No'} </p>
            </div>
        `);
    });



    /*
        -------------------------------------------------------------------
        ----------  5. Recuperar y Mostrar Datos con JavaScript  ----------
        -------------------------------------------------------------------
    */

    function ready(fn) {

        console.log('\n');
        console.warn('----------  07-recuperar-mostrar-datos-javascript.js  ----------');

        if (document.readyState !== 'loading')
            fn();
        else
            document.addEventListener('DOMContentLoaded', fn);
    }


    ready(function () {

        const info3 = document.querySelector('#info3');
        const btnLoad1 = document.getElementById('btnLoad1');

        if (!info3) {
            console.error('No se encontró el contenedor con id "info3". Añádelo en el HTML.');
            return;
        }

        btnLoad1.addEventListener('click', function () {

            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(data => showElements(data, info3))
                .catch(error => console.error('Error al cargar los datos:', error));
        });

    });


    function generateElements(html) {

        const template = document.createElement('template');

        template.innerHTML = html.trim();

        return template.content.children;
    }


    function showElements(data, $info) {

        data.forEach(element => {

            console.log(element);

            const html = generateElements(`
                
                <section class="data"> 
                    <h3>${element.title}</h3>
                    <p>Usuario: ${element.userId}</p>
                </section>

            `);

            Array.from(html).forEach(element => {
                $info.appendChild(element);
            });

        });
    }



    /*
        ---------------------------------------------------------------
        ----------  6. Recuperar y Mostrar Datos con jQuery  ----------
        ---------------------------------------------------------------
    */

    const $btnLoad2 = $("#btnLoad2");
    const $info4 = $("#info4");

    $btnLoad2.on('click', () => $.getJSON('https://jsonplaceholder.typicode.com/todos/', showTodos));


    function showTodos(data) {

        data.forEach(element => {

            let html = $(`
                
                <section class="data"> 
                    <h3> ${element.title} </h3> 
                    <p> Usuario: ${element.userId} </p> 
                </section>
                
            `);

            $info4.append(html);
        })
    }



})(jQuery);

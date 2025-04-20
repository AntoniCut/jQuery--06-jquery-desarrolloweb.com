/*
    -----------------------------------------------------------------
    ----------  /06-jquery-desarrolloweb.com/  ----------------------
    ----------  /01-manual-jquery/  ---------------------------------
    ----------  /src/script/  ---------------------------------------
    ----------  /01-introduccion-jquery/  ---------------------------
    ----------  /07-recuperar-mostrar-datos-javascript.js  ----------
    -----------------------------------------------------------------
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

    console.log('\n');
    console.warn('----------  07-recuperar-mostrar-datos-javascript.js  ----------');


    document.getElementById('load').addEventListener('click', function () {
        
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => showElements(data))

    });
});


function generateElements(html) {
    
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    
    return template.content.children;
}


function showElements(data) {
    
    data.forEach(element => {
        
        console.log(element);
        let html = generateElements(`<section><h1>${element.title}</h1><p>Usuario: ${element.userId}</p></section>`);
        console.log(html);
        
        Array.from(html).forEach(element => {
            document.body.appendChild(element);
        });
    });
}

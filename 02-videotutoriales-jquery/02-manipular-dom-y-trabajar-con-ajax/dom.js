//  --------------------------------------------------------------  -->
//  ----------  /jquery-desarrolloweb.com/  ----------------------  -->
//  ----------  /02-videotutoriales-jquery/  ---------------------  -->
//  ----------  /02-manipular-dom-y-trabajar-con-ajax/  ----------  -->
//  ----------  /dom.js  -----------------------------------------  -->
//  --------------------------------------------------------------  -->


$(document).ready(function () {

    const jQueryVersion = $.fn.jquery;
    console.warn('jQuery Version:', jQueryVersion);
    
    const division = $("<div></div>");
    
    division.attr("id", "kk");
    
    //division.text($("#idelem").val());
    
    division.html('Esto es un cuadro de diálogo... <a href="#" id="enlacecerrar"> Aceptar </a>');

    division.css({
        border: "2px solid #999",
        width: "300px",
        height: "50px",
        lineHeight: "50px",
        position: "fixed",
        top: "45%",
        left: "40%",
        backgroundColor: "#ccc",
        padding: "5px"
    });
    
    //division.appendTo("body");

    $("#f").prepend(division);

    $("#enlacecerrar").on("click", function () {
        
        division.fadeOut(3000, function () {
             division.remove();
        });
    });

});

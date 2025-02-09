<?php

//  --------------------------------------------------------------------
//  ----------  /jquery-desarrolloweb.com/  ----------------------------
//  ----------  /02-videotutoriales-jquery/  ---------------------------
//  ----------  /04-clase-2-experimental-formularios-y-ajax/  ----------
//  ----------  /enviar.php  -------------------------------------------
//  --------------------------------------------------------------------

sleep(2);

//  -----  Verificar si se han enviado los datos del formulario  -----

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    //  -----  Sanitizar y almacenar los datos del formulario  -----
    $nombre = htmlspecialchars(trim($_POST["nombre"] ?? "Sin nombre"));
    $edad = htmlspecialchars(trim($_POST["edad"] ?? "Sin edad"));
    $intereses = htmlspecialchars(trim($_POST["intereses"] ?? "Sin intereses"));
    $sexo = htmlspecialchars(trim($_POST["sexo"] ?? "No especificado"));

    //  -----  Respuesta en formato HTML  -----
    echo "<h3>Datos recibidos correctamente:</h3>";
    echo "<p><strong>Nombre:</strong> $nombre</p>";
    echo "<p><strong>Edad:</strong> $edad</p>";
    echo "<p><strong>Intereses:</strong> $intereses</p>";
    echo "<p><strong>Sexo:</strong> " . ($sexo === "H" ? "Hombre" : "Mujer") . "</p>";

} else {
    //  -----  Si no es una solicitud POST  -----
    echo "Error: No se han recibido datos válidos.";
}

echo"<br><hr><br>";

if($_POST["sexo"] === "H") $sexo = "Hombre";
else $sexo = "Mujer";

echo 'El Amigo ' .$_POST["nombre"] ." tiene " .$_POST["edad"] ." años y es " .$sexo ." y le gusta " .$_POST["intereses"];


?>

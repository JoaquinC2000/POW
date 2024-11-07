<?php 
    $url = "https://restcountries.com/v3.1/all"; // URL de la API
    $datos = file_get_contents($url); // Obtener datos de la API
    echo $datos; // Envia los datos al HTML 
?>
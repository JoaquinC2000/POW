<?php 
    $host = 'localhost';
    $dbname = 'paises';
    $user = 'root';
    $passwork = '';

    $conn = new mysqli($host, $user, $passwork, $dbname);

    if($conn->connect_error){
        die("Conexion fallida: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM"
?>
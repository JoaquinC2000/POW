<?php 
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "tortuga";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if($conn -> connect_error){
        die("Conexión fallida: " . $conn -> connect_error);
    }
    $sql = "SELECT nombre, apellido, telefono, email, estado FROM clientes";
    $result = $conn -> query($sql);

    $clientes = [];
    if($result->num_rows > 0){
        while($row = $result->fetch_assoc()){
            $clientes[] = $row;
        }
    }
    echo json_encode($clientes);
    $conn -> close();

    // header('Content-Type: application/json');
?>
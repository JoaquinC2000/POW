<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "porkydb";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if($conn->connect_error){
        die("Conexión fallida: " . $conn->connect_error);
    }

    $sql = "SELECT nombre_cliente, telefono_cliente, direccion_cliente FROM cliente";
    $result = $conn->query($sql);

    $cliente = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()){
            $cliente[] = $row;
        }
    }

    echo json_encode($cliente);

    $conn->close();
?>
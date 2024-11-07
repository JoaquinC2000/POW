<?php
    // Conexión a la base de datos
    $servername = "localhost";  // Cambia esto si tu servidor es diferente
    $username = "root";         // Cambia el nombre de usuario si es necesario
    $password = "";             // Cambia la contraseña si es necesario
    $dbname = "porkydb";        // Cambia al nombre de tu base de datos

    $conn = new mysqli($servername, $username, $password, $dbname);
    if($conn->connect_error){
        die("Conexion fallida: " . $conn->connect_error);
    }

    // Obtener datos del formulario
    $nombre_cliente = $_POST['nombre_cliente'];
    $telefono_cliente = $_POST['telefono_cliente'];
    $direccion_cliente = $_POST['direccion_cliente'];

    $sql = "INSERT INTO Cliente (nombre_cliente, telefono_cliente, direccion_cliente) VALUES ('$nombre_cliente', '$telefono_cliente', '$direccion_cliente')";

    if($conn->query($sql) === TRUE){
        echo "Cliente agregado correctamente";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();
?>

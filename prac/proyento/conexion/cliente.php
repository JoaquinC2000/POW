<?php
    include_once 'conexion.php';

    $sql = "SELECT id_Cliente, nombre_cliente, telefono_cliente, direccion_cliente FROM cliente";
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
<?php
    include_once 'conexion.php';

    $sql = "SELECT id_Producto, nombre_producto, precio_vta, cant_porciones, descripcion FROM producto";
    $result = $conn->query($sql);

    $productos = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()){
            $productos[] = $row;
        }
    }

    echo json_encode($productos);

    $conn->close();
?>
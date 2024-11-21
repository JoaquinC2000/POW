<?php
// Conexión a la base de datos
include_once 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') { //verifica que los datos llegan mediante una solicitud HTTP de tipo POST
    // Obtener los datos enviados por AJAX
    $id_Producto = $_POST['id_Producto'];
    $nombre_producto = $_POST['nombre_producto'];
    $precio_vta = $_POST['precio_vta'];
    $cant_porciones = $_POST['cant_porciones'];
    $descripcion = $_POST['descripcion'];

    // Validar que los campos no estén vacíos
    if (!empty($id_Producto) && !empty($nombre_producto) && !empty($precio_vta) && !empty($cant_porciones) && !empty($descripcion)) {
        // Consulta para actualizar el producto
        $sql = "UPDATE producto 
                SET nombre_producto = ?, precio_vta = ?, cant_porciones = ?, descripcion = ?
                WHERE id_Producto = ?";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssi", $nombre_producto, $precio_vta, $cant_porciones, $descripcion, $id_Producto);

        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Producto actualizado correctamente"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error al actualizar el producto"]);
        }

        $stmt->close();
    } else {
        echo json_encode(["status" => "error", "message" => "Datos incompletos"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Método no permitido"]);
}

$conn->close();
?>

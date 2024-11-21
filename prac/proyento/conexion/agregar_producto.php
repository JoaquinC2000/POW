<?php
include_once 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre_producto = $_POST['nombre_producto'];
    $precio_vta = $_POST['precio_vta'];
    $cant_porciones = $_POST['cant_porciones'];

    if (!empty($nombre_producto) && !empty($precio_vta) && !empty($cant_porciones)) {
        $sql = "INSERT INTO producto (nombre_producto, precio_vta, cant_porciones) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sdi", $nombre_producto, $precio_vta, $cant_porciones);

        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Producto agregado correctamente"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error al agregar producto"]);
        }
        $stmt->close();
    } else {
        echo json_encode(["status" => "error", "message" => "Datos incompletos"]);
    }
}
$conn->close();
?>

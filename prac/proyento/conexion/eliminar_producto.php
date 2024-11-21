<?php
include_once 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id_Producto = $_POST['id_Producto'];

    if (!empty($id_Producto)) {
        $sql = "DELETE FROM producto WHERE id_Producto = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id_Producto);

        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Producto eliminado correctamente"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error al eliminar producto"]);
        }
        $stmt->close();
    } else {
        echo json_encode(["status" => "error", "message" => "ID de producto no proporcionado"]);
    }
}
$conn->close();
?>

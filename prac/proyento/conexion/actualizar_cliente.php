<?php
// Conexión a la base de datos
include_once 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos enviados por AJAX
    $id_cliente = $_POST['id_Cliente'];
    $nombre_cliente = $_POST['nombre_cliente'];
    $telefono_cliente = $_POST['telefono_cliente'];
    $direccion_cliente = $_POST['direccion_cliente'];

    // Validar que los campos no estén vacíos
    if (!empty($id_cliente) && !empty($nombre_cliente) && !empty($telefono_cliente) && !empty($direccion_cliente)) {
        // Consulta para actualizar el cliente
        $sql = "UPDATE cliente 
                SET nombre_cliente = ?, telefono_cliente = ?, direccion_cliente = ? 
                WHERE id_cliente = ?";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssi", $nombre_cliente, $telefono_cliente, $direccion_cliente, $id_cliente);

        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Cliente actualizado correctamente"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error al actualizar el cliente"]);
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

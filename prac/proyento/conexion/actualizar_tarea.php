<?php
// Conexión a la base de datos
include_once 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos enviados por AJAX
    $idTarea = $_POST['idTarea'];
    $descripcion = $_POST['descripcion'];
    $fecha_inicio = $_POST['fecha_inicio'];
    $fecha_finalizacion = $_POST['fecha_finalizacion'];
    $prioridad = $_POST['prioridad'];

    // Validar que los campos no estén vacíos
    if (!empty($idTarea) && !empty($descripcion) && !empty($fecha_inicio) && !empty($fecha_finalizacion) && !empty($prioridad)) {
        // Consulta para actualizar el Tarea
        $sql = "UPDATE tarea 
                SET descripcion = ?, fecha_inicio = ?, fecha_finalizacion = ?, prioridad = ?
                WHERE idTarea = ?";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssi", $descripcion, $fecha_inicio, $fecha_finalizacion, $prioridad, $idTarea);

        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Tarea actualizado correctamente"]);
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

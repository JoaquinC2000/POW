<?php
    include_once 'conexion.php';

    // $sql = "SELECT descripcion, fecha_inicio, fecha_finalizacion, prioridad FROM tarea";
    $sql = "SELECT t.idTarea, t.descripcion, t.fecha_inicio, t.fecha_finalizacion, t.prioridad, p.nombre_producto, e.descripcion_estado, c.nombre_cliente
    FROM tarea t
    INNER JOIN estado e ON t.id_Estado = e.id_Estado
    INNER JOIN productoxpedido pp ON pp.id_productoxpedido = t.id_productoxpedido
    INNER JOIN producto p ON p.id_Producto = pp.id_Producto
    INNER JOIN pedido pe ON pp.id_Pedido = pe.id_Pedido
    INNER JOIN cliente c ON c.id_Cliente = pe.id_Cliente
    ";
    $result = $conn->query($sql);

    $tareas = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()){
            $tareas[] = $row;
        }
    }

    echo json_encode($tareas);

    $conn->close();
?>
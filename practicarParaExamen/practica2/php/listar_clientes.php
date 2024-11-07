<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "porkydb";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}

// Obtener todos los pedidos
$sql = "SELECT c.id_Cliente, c.nombre_Cliente, c.telefono_Cliente, c.direccion_Cliente
        FROM Cliente c;
$result = $conn->query($sql);

// Mostrar los resultados
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    echo "<p>ID: " . $row["id_Cliente"]. " - Cliente: " . $row["nombre_cliente"]. " - Telefono: " . $row["telefono_cliente"] . " - Dirección: " . $row["direccion_cliente"] . "</p>";
  }
} else {
  echo "No hay cliente";
}

$conn->close();
?>

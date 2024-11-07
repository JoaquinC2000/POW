document.getElementById("clienteForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre_cliente = document.getElementById("nombre_cliente").value;
    let telefono_cliente = document.getElementById("telefono_cliente").value;
    let direccion_cliente = document.getElementById("direccion_cliente").value;

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/agregar_cliente.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Cliente añadido correctamente");
        } else {
            alert("Error al añadir cliente");
        }
    };
    xhr.send(`nombreCliente=${nombre_cliente}&direccionCliente=${direccion_cliente}&telefonoCliente=${telefono_cliente}`);
})

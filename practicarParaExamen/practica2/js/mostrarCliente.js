function cargarClientes(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "mostrar_clientes.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("clienteList").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

window.onload = cargarClientes;
window.onload = checkRegistration;

// Verifica si el transportista está registrado y muestra la pantalla correspondiente
function checkRegistration() {
    const idRecolector = localStorage.getItem("id_recolector");
    if (idRecolector) {
        showHomePage();
    } else {
        showRegistrationForm();
    }
}

// Muestra el formulario de registro
function showRegistrationForm() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="container mt-5">
            <h2>Registro de Transportista</h2>
            <form id="registrationForm">
                <div class="mb-3">
                    <label for="apellido" class="form-label">Apellido:</label>
                    <input type="text" id="apellido" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre:</label>
                    <input type="text" id="nombre" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="celular" class="form-label">Celular:</label>
                    <input type="text" id="celular" class="form-control" required>
                </div>
                <button type="button" class="btn btn-primary" onclick="registerRecolector()">Registrar</button>
            </form>
        </div>
    `;
}
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto de recargar la página
    
    // Obtener los valores de los campos del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Aquí debes tener un conjunto de usuarios registrados o hacer una validación de autenticidad
    const registeredUser = 'admin'; // Usuario registrado
    const registeredPassword = 'password123'; // Contraseña registrada
    
    // Verificar si los datos ingresados coinciden con los valores registrados
    if (username === registeredUser && password === registeredPassword) {
        alert('Inicio de sesión exitoso');
        // Redirigir a otra página o realizar alguna acción tras el inicio de sesión
        window.location.href = "dashboard.html"; // Redirige a un panel de control, por ejemplo
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});

// Función para registrar el transportista
function registerRecolector() {
    const apellido = document.getElementById("apellido").value;
    const nombre = document.getElementById("nombre").value;
    const celular = document.getElementById("celular").value;

    // Obtiene la latitud y longitud del navegador
    navigator.geolocation.getCurrentPosition((position) => {
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;
        const disponible = 'S';

        // Datos para enviar al servidor
        const data = new FormData();
        data.append("apellido", apellido);
        data.append("nombre", nombre);
        data.append("celular", celular);
        data.append("latitud", latitud);
        data.append("longitud", longitud);
        data.append("disponible", disponible);

        // Envía la solicitud AJAX a guardar_recolector.php
        fetch("guardar_recolector.php", {
            method: "POST",
            body: data
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {  // Asegúrate de que `success` esté en el JSON de respuesta
                // Guarda el id_recolector en localStorage
                localStorage.setItem("id_recolector", result.id_recolector);
                showHomePage();
            } else {
                alert("Error al registrar el transportista");
            }
        })
        .catch(error => console.error("Error en el registro:", error));
    }, (error) => {
        console.error("Error obteniendo la ubicación:", error);
        alert("Error al obtener la ubicación: " + error.message);
    });
}

// Muestra la página principal después del registro
function showHomePage() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="container mt-5">
            <h2>Bienvenido a Pico TransUber Packing</h2>
            <p>Seleccione una opción del menú para comenzar.</p>
        </div>
    `;
    updateMenu(true); // Cambia el menú para transportistas registrados
}

// Actualiza el menú según el estado de registro
function updateMenu(isRegistered) {
    const menu = document.getElementById("menu");
    if (isRegistered) {
        menu.innerHTML = `
            <a class="nav-link" href="#" onclick="assignOrders()">Asignarme</a>
            <a class="nav-link" href="#" onclick="viewAssigned()">Ver Mis Asignados</a>
            <a class="nav-link" href="#" onclick="viewAllClients()">Ver Todos los Clientes</a>
            <a class="nav-link" href="#" onclick="logout()">Salir</a>
        `;
    } else {
        menu.innerHTML = `<a href="#" onclick="showRegistrationForm()">Registrar</a>`;
    }
}

// Función para salir y limpiar el localStorage
function logout() {
    localStorage.removeItem("id_recolector");
    updateMenu(false);
    showRegistrationForm();
}

;
function cargarCliente(){
    $.ajax({
        url: 'listar_cliente.php',
        method: 'GET',
        dataType: 'json',
        success: function(data){
            const tableBody = $('clientes-list tbody');
            tableBody.empty();

            $.each(data, function(index, cliente){
                const row = $('<tr></tr>');
                row.append('<td>' + cliente.id + '</td>');
                row.append('<td>' + cliente.nombre + '</td>');
                row.append('<td>' + cliente.estado + '</td>');

                const actionCell = $('<td></td>');
                const button = $('<button>Ver detalles</button>');

                button.click(function(){
                    alert('Detalles de cliente ' + cliente.id);
                });
                actionCell.append(button);
                row.append(actionCell);

                tableBody.append(row);
            });
        },
        error: function(xhr, status, error){
            console.error('Error al cargar los clientes:', error);
        }
    });
}

$(document).ready(function(){
    cargarCliente();
});
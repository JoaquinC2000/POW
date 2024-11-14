var header = document.getElementById('header');

window.addEventListener('scroll', () => {
    var scroll = window.scrollY;
    
    if(scroll > 10){
        header.style.backgroundColor = '#121212';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

$(document).ready(function(){
    $.ajax({
        url: 'conexion/conexion.php',
        method: 'GET',
        dataType: 'json',
        success: function(data){
            let tbody = $("table tbody");
            tbody.empty();

            data.forEach(cliente => {
                let row = `<tr>
                    <td>${cliente.nombre_cliente}</td>
                    <td>${cliente.telefono_cliente}</td>
                    <td>${cliente.direccion_cliente}</td>
                    <td><button class="btn btn-primary">Acción</button></td>
                </tr>`;
                tbody.append(row);
            });
        },
        error: function(error){
            console.log(error);
        }
    })
})
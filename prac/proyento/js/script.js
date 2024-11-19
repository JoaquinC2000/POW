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
    function cargarProductos(){
        $.ajax({
            url: "conexion/producto.php",
            method: "GET",
            dataType: "json",
            success: function (data){
                const tbody = $("#productosContainer");
                tbody.empty();

                data.forEach(producto => {
                    const fila = `
                        <tr>
                            <td>${producto.id_Producto}</td>
                            <td>${producto.nombre_producto}</td>
                            <td>${producto.precio_vta}</td>
                            <td>${producto.cant_porciones}</td>
                            <td><button class="btn btn-primary">Editar</button></td>
                        </tr>`;
                    tbody.append(fila);
                })
            },

            error: function(error){
                console.log(error);
            }
        })
    }
    function cargarClientes(){
        $.ajax({
            url: 'conexion/cliente.php',
            method: 'GET',
            dataType: 'json',
            success: function(data){
                let tbody = $("#clientesContainer");
                tbody.empty();

                data.forEach((cliente, index) => {
                    let fila = `<tr>
                        <td>${cliente.id_Cliente}</td>
                        <td>${cliente.nombre_cliente}</td>
                        <td>${cliente.telefono_cliente}</td>
                        <td>${cliente.direccion_cliente}</td> 
                        <td>
                            <button type="button" 
                                class="btn btn-primary btn-editar" 
                                data-bs-toggle="modal" 
                                data-bs-target="#exampleModal" 
                                data-index="${index}"
                                data-id="${cliente.id_Cliente}"
                                data-nombre="${cliente.nombre_cliente}"
                                data-telefono="${cliente.telefono_cliente}"
                                data-direccion="${cliente.direccion_cliente}">Editar</button>
                        </td>
                    </tr>`;
                    tbody.append(fila);
                });

                $(".btn-editar").click(function (){
                    const index = $(this).data("index");
                    const id = $(this).data("id");
                    const nombre = $(this).data("nombre");
                    const telefono = $(this).data("telefono");
                    const direccion = $(this).data("direccion");
                    
                    
                    $("#nombre-cliente").val(nombre);
                    $("#telefono-cliente").val(telefono);
                    $("#direccion-cliente").val(direccion);

                    $("#guardar").data("id", id);
                    $("#guardar").data("index", index);
                });
            },
            error: function(error){
                console.log(error);
            }
        });
    }
    
    $("#guardar").click(function(){
        console.log("Boton guardar presionado");
        const index = $(this).data("index");
        const clienteActualizado = {
            id_Cliente: $(this).data("id"),
            nombre_cliente: $("#nombre-cliente").val(),
            telefono_cliente: $("#telefono-cliente").val(),
            direccion_cliente: $("#direccion-cliente").val(),
        };
        console.log("Actualizado", index, clienteActualizado);
        $.ajax({
            url: 'conexion/actualizar_cliente.php',
            method: 'POST',
            data: clienteActualizado,
            success: function(response){
                console.log("Cliente actualizado con éxito:", response);
                cargarClientes();
                $('#exampleModal').modal('hide');
            },
            error: function (error){
                console.error("Error al actualizar el cliente:", error);
            }
        });
    });

    function cargarTarea(){
        $.ajax({
            url: 'conexion/tarea.php',
            method: 'GET',
            dataType: 'json',
            success: function(data){
                let tbody = $('#tareaContainer');
                tbody.empty();

                data.forEach(tarea => {
                    let fila = `<tr>
                        <td>${tarea.idTarea}</td>
                        <td>${tarea.descripcion}</td>
                        <td>${tarea.fecha_inicio}</td> 
                        <td>${tarea.fecha_finalizacion}</td> 
                        <td>${tarea.prioridad}</td> 
                        <td>${tarea.descripcion_estado}</td> 
                        <td>${tarea.nombre_producto}</td> 
                        <td>${tarea.nombre_cliente}</td> 
                        <td><button class="btn btn-primary">Editar</button></td>
                    </tr>`;
                    tbody.append(fila);
                });
            },
            error: function(error){
                console.log(error);
            }
        })
    }
    

    if($("#clientesContainer").length){
        cargarClientes();
    }

    if($("#productosContainer").length){
        cargarProductos();
    }

    if($('#tareaContainer').length){
        cargarTarea();
    }

})


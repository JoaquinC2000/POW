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

                data.forEach((producto, index) => {
                    const fila = `
                        <tr>
                            <td>${producto.id_Producto}</td>
                            <td>${producto.nombre_producto}</td>
                            <td>${producto.precio_vta}</td>
                            <td>${producto.cant_porciones}</td>
                            <td>${producto.descripcion}</td>
                            <td>
                            <button type="button" 
                                class="btn btn-primary btn-editar" 
                                data-bs-toggle="modal" 
                                data-bs-target="#modalEditar" 
                                data-index="${index}"
                                data-id="${producto.id_Producto}"
                                data-nombre="${producto.nombre_producto}"
                                data-precio="${producto.precio_vta}"
                                data-porciones="${producto.cant_porciones}"
                                data-descri="${producto.descripcion}">Editar</button>
                                <button type="button" class="btn btn-danger btn-eliminar" data-bs-toggle="modal" data-bs-target="#modalEliminar">Eliminar</button>
                            </td>
                        </tr>`;
                    tbody.append(fila);
                })
                $(".btn-editar").click(function (){
                    const index = $(this).data("index");
                    const id = $(this).data("id");
                    const nombre = $(this).data("nombre");
                    const precio = $(this).data("precio");
                    const porciones = $(this).data("porciones");
                    const descripcion = $(this).data("descri");
                    
                    $("#nombre-producto").val(nombre);
                    $("#precio-vta").val(precio);
                    $("#cant-porciones").val(porciones);
                    $("#descripcion").val(descripcion);

                    $("#guardar").data("id", id);
                    $("#guardar").data("index", index);
                });
                
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
                                data-bs-target="#modalEditar" 
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

    function cargarTarea(){
        $.ajax({
            url: 'conexion/tarea.php',
            method: 'GET',
            dataType: 'json',
            success: function(data){
                let tbody = $('#tareaContainer');
                tbody.empty();

                data.forEach((tarea, index) => {
                    let fechaInicio = convertirFormatoADMY(tarea.fecha_inicio);
                    let fechaFinalizacion = convertirFormatoADMY(tarea.fecha_finalizacion);
                    let fila = `<tr>
                        <td>${tarea.idTarea}</td>
                        <td>${tarea.descripcion}</td>
                        <td>${fechaInicio}</td> 
                        <td>${fechaFinalizacion}</td> 
                        <td>${tarea.prioridad}</td> 
                        
                        <td>
                            <button type="button" 
                                class="btn btn-primary btn-editar" 
                                data-bs-toggle="modal" 
                                data-bs-target="#modalEditar" 
                                data-index="${index}"
                                data-id="${tarea.idTarea}"
                                data-descripcion="${tarea.descripcion}"
                                data-inicio="${tarea.fecha_inicio}"
                                data-finalizacion="${tarea.fecha_finalizacion}"
                                data-prioridad="${tarea.prioridad}">Editar</button>
                        </td>
                    </tr>`;
                    tbody.append(fila);
                });

                $(".btn-editar").click(function (){
                    const index = $(this).data("index");
                    const id = $(this).data("id");
                    const descripcion = $(this).data("descripcion");
                    const inicio = convertirFormatoAYMD($(this).data("inicio"));
                    const finalizacion = convertirFormatoAYMD($(this).data("finalizacion"));
                    const prioridad = $(this).data("prioridad");
                    
                    
                    $("#descripcion").val(descripcion);
                    $("#fecha_inicio").val(inicio);
                    $("#fecha_finalizacion").val(finalizacion);
                    $("#prioridad").val(prioridad);

                    $("#guardar").data("id", id);
                    $("#guardar").data("index", index);
                });
            },
            error: function(error){
                console.log(error);
            }
        })
    }

    $("#guardar").click(function(){
        console.log("Boton guardar presionado");

        const tipoEntidad = $(this).data("tipo");
        console.log("tipo de entidad: ", tipoEntidad);

        let datosActualizados = {};
        switch(tipoEntidad){
            case "cliente":
                datosActualizados = {
                    id_Cliente: $(this).data("id"),
                    nombre_cliente: $("#nombre-cliente").val(),
                    telefono_cliente: $("#telefono-cliente").val(),
                    direccion_cliente: $("#direccion-cliente").val()
                };
                break;
            case "producto":
                datosActualizados = {
                    id_Producto: $(this).data("id"),
                    nombre_producto: $("#nombre-producto").val(),
                    precio_vta: $("#precio-vta").val(),
                    cant_porciones: $("#cant-porciones").val(),
                    descripcion: $("#descripcion").val()
                };
                break;
            case "tarea":
                datosActualizados = {
                    idTarea: $(this).data("id"),
                    descripcion: $("#descripcion").val(),
                    fecha_inicio: $("#fecha_inicio").val(),
                    fecha_finalizacion: $("#fecha_finalizacion").val(),
                    prioridad: $("#prioridad").val()
                };
                break;
            
            default:
                console.error("Tipo de entidad no reconocido", tipoEntidad);
                return;
        }

        console.log("Datos actualizados: ", datosActualizados);

        $.ajax({
            url: `conexion/actualizar_${tipoEntidad}.php`,
            method: 'POST',
            data: datosActualizados,
            success: function(response){
                console.log("${tipoEntidad} actualizado con éxito:", response);
                if (tipoEntidad === "cliente") {
                    cargarClientes();
                } else if (tipoEntidad === "producto") {
                    cargarProductos(); 
                } else if (tipoEntidad === "tarea") {
                    cargarTarea();
                }
                $("#modalEditar").modal('hide');
            },
            error: function (error){
                console.error("Error al actualizar el cliente:", error);
            }
        });
    });

    $("#agregar").click(function(){
        const datosProducto = {
            nombre_producto: $("#nombre-producto-agregar").val(),
            precio_vta: $("#precio-vta-agregar").val(),
            cant_porciones: $("#cant-porciones-agregar").val(),
        };
    
        if(!datosProducto.nombre_producto || !datosProducto.precio_vta || !datosProducto.cant_porciones){
            alert("Por favor, completa todos los campos");
            return;
        }
    
        $.ajax({
            url: "conexion/agregar_producto.php",
            method: "POST",
            data: datosProducto,
            success: function(response){
                console.log("Producto agregado exitosamente", response);
                cargarProductos();
                $("#modalAgregar").modal('hide');
            },
            error: function(error){
                console.error("Error al agregar producto", error);
                alert("Hubo un error al agregar el producto");
            },
        })
    })
    

    if($("#clientesContainer").length){
        cargarClientes();
    }

    if($("#productosContainer").length){
        cargarProductos();
    }

    if($('#tareaContainer').length){
        cargarTarea();
    }
});

function convertirFormatoAYMD(fecha) {
    if (!fecha) return ""; // Maneja fechas nulas
    if (fecha.includes("/")) {
        const partes = fecha.split("/"); // Si está en DD/MM/YYYY
        return `${partes[2]}-${partes[1]}-${partes[0]}`;
    }
    return fecha; // Si ya está en formato YYYY-MM-DD, no lo modifica
}




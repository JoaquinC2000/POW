package com.tp.proyectoFinal;

import static spark.Spark.*;

import com.tp.proyectoFinal.controller.ProductoController;
import com.tp.proyectoFinal.controller.TareasController;
import com.tp.controller.ClienteController;

public class Main {

    public static void main(String[] args) {
        port(1234);

        before((req, res) -> {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
        });
        post("/producto", ProductoController.crear_producto);
        get("/producto", ProductoController.obtener_productos);
        get("/producto/:nombre", ProductoController.productosPorNombre);

        post("/crear_tarea", TareasController.crear_tarea);
        get("/obtener_tareas", TareasController.obtener_tareas);

        get("/clientes_pendientes", ClienteController.clientes_pendientes);
    }

}

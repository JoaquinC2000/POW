package com.tp.proyectoFinal.controller;

import com.google.gson.Gson;
import com.tp.proyectoFinal.dao.EstadoDAO;
import com.tp.proyectoFinal.dao.ProductosxpedidoDAO;
import com.tp.proyectoFinal.dao.TareasDAO;
import com.tp.proyectoFinal.model.Tarea;

import spark.Request;
import spark.Response;
import spark.Route;

import java.text.*;
import java.util.List;

public class TareasController {
    private static TareasDAO tareasDAO = new TareasDAO();
    private static ProductosxpedidoDAO prDAO = new ProductosxpedidoDAO();
    private static EstadoDAO estadoDAO = new EstadoDAO();
    private static Gson gson = new Gson();

    public static Route crear_tarea = (Request req, Response res) -> {
        res.type("application/json");

        String descripcion = req.queryParams("descripcion");
        String fecha_inicio = req.queryParams("fecha_inicio");
        String fecha_finalizacion = req.queryParams("fecha_finalizacion");
        String prioridad = req.queryParams("prioridad");
        int id_Estado = Integer.parseInt(req.queryParams("id_Estado"));
        int id_productoxpedido = Integer.parseInt(req.queryParams("id_productoxpedido"));

        if (descripcion == null || fecha_inicio == null || fecha_finalizacion == null || prioridad == null
                || req.queryParams("id_Estado") == null || req.queryParams("id_productoxpedido") == null) {
            res.status(400);
            return gson.toJson("Todos los campos son obligatorios");
        }

        if (!validarFecha(fecha_inicio) || !validarFecha(fecha_finalizacion)) {
            res.status(400);
            return gson.toJson("Las fechas deben estar en formato dd/MM/yyyy");
        }

        if (!prDAO.existeProductoxPedido(id_productoxpedido)) {
            res.status(400);
            return gson.toJson("El id_productoxpedido no existe");
        }

        if (!estadoDAO.existeEstado(id_Estado)) {
            res.status(400);
            return gson.toJson("El id_Estado no existe");
        }

        Tarea tarea = new Tarea(descripcion, fecha_inicio, fecha_finalizacion, prioridad, id_Estado,
                id_productoxpedido);

        boolean resp = tareasDAO.crear_tarea(tarea);
        if (resp) {
            return gson.toJson(tarea);
        } else {
            return gson.toJson("La informacion NO se ha cargado con exito");
        }
    };


    private static boolean validarFecha(String fecha) {
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        sdf.setLenient(false);
        try {
            sdf.parse(fecha);
            return true;
        } catch (ParseException e) {
            return false;
        }
    }

    public static Route obtener_tareas = (Request req, Response res) -> {
        res.type("application/json");

        try {
            List<Tarea> tareas = tareasDAO.obtener_tareas();
            res.status(200);
            return gson.toJson(tareas);
        } catch (Exception e) {
            res.status(400);
            return gson.toJson(e.getMessage());
        }
    };
}

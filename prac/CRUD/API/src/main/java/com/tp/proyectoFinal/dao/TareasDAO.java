package com.tp.proyectoFinal.dao;

import java.util.List;

import org.sql2o.Connection;

import com.tp.proyectoFinal.connection.Sql2oDAO;
import com.tp.proyectoFinal.interfaces.ItareasDAO;
import com.tp.proyectoFinal.model.Tarea;

public class TareasDAO implements ItareasDAO {

    @Override
    public boolean crear_tarea(Tarea tarea) {

        String query = "INSERT INTO tarea (descripcion, fecha_inicio, fecha_finalizacion, prioridad, id_Estado, id_productoxpedido) VALUES (:descripcion, :fecha_inicio, :fecha_finalizacion, :prioridad, :id_Estado, :id_productoxpedido)";

        try (Connection con = Sql2oDAO.getSql2o().open()) {
            con.createQuery(query)
                    .addParameter("descripcion", tarea.getDescripcion())
                    .addParameter("fecha_inicio", tarea.getFecha_inicio())
                    .addParameter("fecha_finalizacion", tarea.getFecha_finalizacion())
                    .addParameter("prioridad", tarea.getPrioridad())
                    .addParameter("id_Estado", tarea.getId_Estado())
                    .addParameter("id_productoxpedido", tarea.getId_productoxpedido())
                    .executeUpdate();
            return true;
        } catch (Exception e) {
            System.err.println("Error al crear tarea" + e.getMessage());
            return false;
        }
    }

    @Override
    public List<Tarea> obtener_tareas() {
        String query = "SELECT * FROM TAREA";
        try (Connection con = Sql2oDAO.getSql2o().open()) {
            return con.createQuery(query).executeAndFetch(Tarea.class);
        } catch (Exception e) {
            System.err.println(e.toString());
            return null;
        }

    }

}

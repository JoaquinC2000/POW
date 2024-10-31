package com.tp.proyectoFinal.dao;

import org.sql2o.Connection;
import com.tp.proyectoFinal.connection.Sql2oDAO;
import com.tp.proyectoFinal.interfaces.IestadoDAO;

public class EstadoDAO implements IestadoDAO {
    @Override
    public boolean existeEstado(int id_Estado) {
        String query = "SELECT COUNT(*) FROM ESTADO WHERE id_Estado = :id_Estado";
        try (Connection con = Sql2oDAO.getSql2o().open()) {
            int count = con.createQuery(query)
                    .addParameter("id_Estado", id_Estado)
                    .executeScalar(Integer.class);
            return count > 0;
        } catch (Exception e) {
            System.err.println("Error al buscar Estado" + e.getMessage());
            return false;
        }
    }

}

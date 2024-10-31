package com.tp.proyectoFinal.dao;

import org.sql2o.Connection;

import com.tp.proyectoFinal.connection.Sql2oDAO;
import com.tp.proyectoFinal.interfaces.IproductosxpedidoDAO;

public class ProductosxpedidoDAO implements IproductosxpedidoDAO {

    @Override
    public boolean existeProductoxPedido(int id_productoxpedido) {
        String query = "SELECT COUNT(*) FROM PRODUCTOXPEDIDO WHERE id_productoxpedido = :id_productoxpedido";

        try (Connection con = Sql2oDAO.getSql2o().open()) {
            int count = con.createQuery(query)
                    .addParameter("id_productoxpedido", id_productoxpedido)
                    .executeScalar(Integer.class);
            return count > 0;
        } catch (Exception e) {
            System.err.println("Error al buscar Productoxpedido" + e.getMessage());
            return false;
        }
    }

}

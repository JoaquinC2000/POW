package com.tp.proyectoFinal.dao;

import org.sql2o.Connection;

import com.tp.proyectoFinal.connection.Sql2oDAO;
import com.tp.proyectoFinal.interfaces.IproductoDAO;
import com.tp.proyectoFinal.model.Producto;
import java.util.*;

public class ProductoDAO implements IproductoDAO {

    @Override
    public boolean crear_producto(Producto producto) {
        String insertInto = "INSERT INTO PRODUCTO (nombre_producto, precio_vta, cant_porciones) VALUES (:nombre_producto, :precio_vta, :cant_porciones)";

        try (Connection con = Sql2oDAO.getSql2o().open()) {
            con.createQuery(insertInto)
                    .addParameter("nombre_producto", producto.getNombre_producto())
                    .addParameter("precio_vta", producto.getPrecio_vta())
                    .addParameter("cant_porciones", producto.getCant_porciones())
                    .executeUpdate();

            return true;
        } catch (Exception e) {
            System.err.println("Error al ingresar Producto " + e.getMessage());
            return false;
        }
    }

    @Override
    public List<Producto> obtenerTodos() {
        String query = "SELECT * FROM PRODUCTO";
        List<Producto> productos;

        try (Connection con = Sql2oDAO.getSql2o().open()) {
            productos = con.createQuery(query).executeAndFetch(Producto.class);
            return productos;
        } catch (Exception e) {
            System.err.println(e.toString());
            return null;
        }
    }

    @Override
    public List<Producto> productosPorNombre(String nombre) {
        String query = "SELECT * FROM PRODUCTO WHERE nombre_producto LIKE :nombre";
        List<Producto> productos;

        try (Connection con = Sql2oDAO.getSql2o().open()) {
            productos = con.createQuery(query)
                    .addParameter("nombre", "%" + nombre + "%")
                    .executeAndFetch(Producto.class);
            return productos;
        } catch (Exception e) {
            return null;
        }
    }

}

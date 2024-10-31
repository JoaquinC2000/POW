package com.tp.proyectoFinal.interfaces;

import java.util.List;

import com.tp.proyectoFinal.model.Producto;

public interface IproductoDAO {
    public boolean crear_producto(Producto producto);

    public List<Producto> obtenerTodos();

    public List<Producto> productosPorNombre(String nombre);
}

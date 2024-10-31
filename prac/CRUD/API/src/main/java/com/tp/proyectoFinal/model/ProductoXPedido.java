package com.tp.proyectoFinal.model;

import lombok.Data;

@Data
public class ProductoXPedido {
    private int id_productoxpedido;
    private int cantidad_pedido;
    private float precio;
    private String observacion;
    private Pedido pedido;
    private Producto producto;

    public ProductoXPedido(int cantidad_pedido, float precio, String observacion, Pedido pedido, Producto producto) {
        this.cantidad_pedido = cantidad_pedido;
        this.precio = precio;
        this.observacion = observacion;
        this.pedido = pedido;
        this.producto = producto;
    }

    public ProductoXPedido() {
    }
}

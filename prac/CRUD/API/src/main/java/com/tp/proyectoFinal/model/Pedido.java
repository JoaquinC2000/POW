package com.tp.proyectoFinal.model;

import lombok.Data;

@Data
public class Pedido {
    private int id_Pedido;
    private String fecha_pedido;
    private String fecha_entrega;
    private String lugar_entrega;
    private Estado estado;
    private Cliente cliente;

    public Pedido(String fecha_pedido, String fecha_entrega, String lugar_entrega, Estado estado, Cliente cliente) {
        this.fecha_pedido = fecha_pedido;
        this.fecha_entrega = fecha_entrega;
        this.lugar_entrega = lugar_entrega;
        this.estado = estado;
        this.cliente = cliente;
    }

    public Pedido() {
    }
}

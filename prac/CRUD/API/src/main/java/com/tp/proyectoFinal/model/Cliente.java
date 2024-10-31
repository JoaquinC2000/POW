package com.tp.proyectoFinal.model;

import lombok.Data;

@Data
public class Cliente {

    private int id_Cliente;
    private String nombre_cliente;
    private String telefono_cliente;
    private String direccion_cliente;

    public Cliente(int id_cliente, String nombre_cliente, String direccion_cliente) {
        this.id_Cliente = id_cliente;
        this.nombre_cliente = nombre_cliente;
        this.direccion_cliente = direccion_cliente;
    }

    public Cliente() {
    }

}

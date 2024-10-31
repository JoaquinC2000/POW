package com.tp.proyectoFinal.model;

import lombok.Data;

@Data
public class Estado {
    private int id_Estado;
    private String descripcion_estado;

    public Estado(String descripcion_estado) {
        this.descripcion_estado = descripcion_estado;
    }

    public Estado() {
    }

}

package com.tp.proyectoFinal.model;

import lombok.Data;

@Data
public class Tarea {
    private int idTarea;
    private String descripcion;
    private String fecha_inicio;
    private String fecha_finalizacion;
    private String prioridad;
    private int id_Estado;
    private int id_productoxpedido;

    public Tarea(String descripcion, String fecha_inicio, String fecha_finalizacion, String prioridad, int id_Estado,
            int id_productoxpedido) {
        this.descripcion = descripcion;
        this.fecha_inicio = fecha_inicio;
        this.fecha_finalizacion = fecha_finalizacion;
        this.prioridad = prioridad;
        this.id_Estado = id_Estado;
        this.id_productoxpedido = id_productoxpedido;
    }

    public Tarea() {
    }

}

package com.tp.proyectoFinal.interfaces;

import com.tp.proyectoFinal.model.Tarea;
import java.util.List;

public interface ItareasDAO {

    public boolean crear_tarea(Tarea tarea);

    public List<Tarea> obtener_tareas();

}
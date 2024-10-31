package main.java.com.tp.interfaces;

import java.util.List;

import com.tp.proyectoFinal.model.Cliente;

public interface IclienteDAO {
    public List<Cliente> obtenerClientesPendientes();
}

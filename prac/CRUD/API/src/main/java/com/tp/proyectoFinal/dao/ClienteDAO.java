package main.java.com.tp.dao;

import com.tp.*;
import com.tp.connection.Sql2oDAO;

import com.tp.interfaces.IclienteDAO;
public class ClienteDAO implements IclienteDAO{

    public List<Cliente> obtenerClientesPendientes(){
        String query = "SELECT * FROM Cliente c" + 
                        "JOIN Pedido p ON c.id_Cliente = p.id_Pedido" +
                        "JOIN Estado e ON p.id_Estado = e.id_Estado" +
                        "WHERE e.descripcion_estado != 'Terminado'";

        List<Cliente> clientes;

        try (Connection con = Sql2oDAO.getSql2o().open()){
            clientes = con.createQuery(query)
                        .executeAndFetch(Cliente.class);

            return clientes;
        } catch (Exception e) {
            System.err.println(e.toString());
            return null;
        }
    }
    
}

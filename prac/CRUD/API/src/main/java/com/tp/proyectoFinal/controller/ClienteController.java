package main.java.com.tp.controller;
import spark.*;
public class ClienteController {

    private static ClienteDAO cliDAO = new ClienteDAO();
    private static Gson gson = new Gson();

    public static Route clientes_pendientes = (Request req, Response res) -> {
        res.type("application/json");

        try{
            List<Cliente> clientes = cliDAO.obtenerClientesPendientes();
            res.status(200);
            return gson.toJson(clientes);
        } catch (Exception e){
            res.status(500);
            return gson.toJson("Error al obtener los clientes");
        }
    };
}

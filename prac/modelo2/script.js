document.addEventListener("DOMContentLoaded", function () {
    const clienteSelect = document.getElementById("cliente");
    const pedidoSelect = document.getElementById("pedido");
    const productoSelect = document.getElementById("producto");

    // Simulación de datos de clientes, pedidos y productos
    const data = {
        clientes: {
            1: "Cliente 1",
            2: "Cliente 2"
        },
        pedidos: {
            1: ["Pedido 1", "Pedido 2"],
            2: ["Pedido 3"]
        },
        productos: {
            "Pedido 1": ["Producto A", "Producto B"],
            "Pedido 2": ["Producto C"],
            "Pedido 3": ["Producto D", "Producto E"]
        }
    };

    // Llenar los clientes
    for (const id in data.clientes) {
        const option = document.createElement("option");
        option.value = id;
        option.textContent = data.clientes[id];
        clienteSelect.appendChild(option);
    }

    // Escuchar cambios en el select de cliente
    clienteSelect.addEventListener("change", function () {
        const clienteId = this.value;
        pedidoSelect.disabled = false;
        pedidoSelect.innerHTML = '<option value="">Seleccione un pedido</option>';
        
        if (clienteId && data.pedidos[clienteId]) {
            data.pedidos[clienteId].forEach(pedido => {
                const option = document.createElement("option");
                option.value = pedido;
                option.textContent = pedido;
                pedidoSelect.appendChild(option);
            });
        }
    });

    // Escuchar cambios en el select de pedido
    pedidoSelect.addEventListener("change", function () {
        const pedidoId = this.value;
        productoSelect.disabled = false;
        productoSelect.innerHTML = '<option value="">Seleccione un producto</option>';

        if (pedidoId && data.productos[pedidoId]) {
            data.productos[pedidoId].forEach(producto => {
                const option = document.createElement("option");
                option.value = producto;
                option.textContent = producto;
                productoSelect.appendChild(option);
            });
        }
    });
});

// Cargar los datos del archivo JSON (simulación en el cliente)

//fetch hace una solicitud para lee el contenido del archivo JSON
fetch('turnero.json').then(response => response.json()).then(data => {
        let limiteInferior = data.limiteInferior;
        let limiteSuperior = data.limiteSuperior;
        let numerosGenerados = data.numeros.map(item => item.numero);
    });

function guardarDatos(limiteInferior, limiteSuperior, numerosGenerados) {
    let datos = {
        "limiteInferior": limiteInferior,
        "limiteSuperior": limiteSuperior,
        "numeros": numerosGenerados.map(num => ({ "numero": num }))
    };

    fetch('guardar_turnero.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
        .then(response => response.json())
        .then(data => {
            console.log("Datos guardados", data);
        })
        .catch(error => {
            console.error('Error guardando los datos:', error);
        });
}

function generarNumeroAleatorio(limiteInferior, limiteSuperior, numerosGenerados) {
    let numero;
    do {
        numero = Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;
    } while (numerosGenerados.includes(numero)); // Verifica que no sea repetido

    return numero;
}

function reiniciarSistema() {
    let numerosGenerados = []; // Vacía los números generados
    guardarDatos(limiteInferior, limiteSuperior, numerosGenerados);
    console.log("Sistema reiniciado");
}

function guardarEnLocalStorage(limiteInferior, limiteSuperior, numerosGenerados) {
    let datos = {
        "limiteInferior": limiteInferior,
        "limiteSuperior": limiteSuperior,
        "numeros": numerosGenerados
    };
    localStorage.setItem("turnero", JSON.stringify(datos));
}

function cargarDesdeLocalStorage() {
    let datos = JSON.parse(localStorage.getItem("turnero"));
    if (datos) {
        let limiteInferior = datos.limiteInferior;
        let limiteSuperior = datos.limiteSuperior;
        let numerosGenerados = datos.numeros;
    }
}

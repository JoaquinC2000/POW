// // Cargar los datos del archivo JSON (simulación en el cliente)

// //fetch hace una solicitud para lee el contenido del archivo JSON
// fetch('turnero.json').then(response => response.json()).then(data => {
//         let limiteInferior = data.limiteInferior;
//         let limiteSuperior = data.limiteSuperior;
//         let numerosGenerados = data.numeros.map(item => item.numero);
//     });

// function guardarDatos(limiteInferior, limiteSuperior, numerosGenerados) {
//     let datos = {
//         "limiteInferior": limiteInferior,
//         "limiteSuperior": limiteSuperior,
//         "numeros": numerosGenerados.map(num => ({ "numero": num }))
//     };

//     fetch('guardar_turnero.php', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(datos)
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log("Datos guardados", data);
//         })
//         .catch(error => {
//             console.error('Error guardando los datos:', error);
//         });
// }

// function generarNumeroAleatorio(limiteInferior, limiteSuperior, numerosGenerados) {
//     let numero;
//     do {
//         numero = Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;
//     } while (numerosGenerados.includes(numero)); // Verifica que no sea repetido

//     return numero;
// }

// function reiniciarSistema() {
//     let numerosGenerados = []; // Vacía los números generados
//     guardarDatos(limiteInferior, limiteSuperior, numerosGenerados);
//     console.log("Sistema reiniciado");
// }

// function guardarEnLocalStorage(limiteInferior, limiteSuperior, numerosGenerados) {
//     let datos = {
//         "limiteInferior": limiteInferior,
//         "limiteSuperior": limiteSuperior,
//         "numeros": numerosGenerados
//     };
//     localStorage.setItem("turnero", JSON.stringify(datos));
// }

// function cargarDesdeLocalStorage() {
//     let datos = JSON.parse(localStorage.getItem("turnero"));
//     if (datos) {
//         let limiteInferior = datos.limiteInferior;
//         let limiteSuperior = datos.limiteSuperior;
//         let numerosGenerados = datos.numeros;
//     }
// }



//====================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

// const cars = `[
//     {
//         "modelo": "ford mustang",
//         "produccion": 2010,
//         "millaje":12000
//     },

//     {
//         "modelo": "honda accord",
//         "produccion": 2021,
//         "millaje": 4560
//     },

//     {
//         "modelo": "volkswagen Golf",
//         "produccion": 2016,
//         "millaje": 58200
//     }

// ]`;

// console.log(typeof cars);

// const jsonData = JSON.parse(cars);
// console.log(typeof jsonData);


// const carrosNuevos = jsonData.filter(
//     (carro) => carro.produccion > 2010 && carro.millaje < 30000
// );
// console.log(carrosNuevos);

// const newCars = JSON.stringify(carrosNuevos);
// console.log(typeof newCars);


// const fs = require('fs');

// const carroNuevo = {
//     modelo: 'Mini Cooper',
//     produccion: 2022,
//     millaje: 500
// }
// const newCar = JSON.stringify(carroNuevo);

// fs.writeFile('cars.json', newCar, (error) => {
//     if(error) throw error;
//     console.log("informacion recibida");
// });
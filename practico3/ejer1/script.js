let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
let intentos = 0;
let mejorPuntaje = Infinity;
let partidasFinalizadas = 0;
let totalIntentos = 0;

function compararNumero(){
    let numeroIngresado = document.getElementById("numeroIngresado").value.trim();
    const numero = parseInt(numeroIngresado);
    
    const resultado = document.getElementById("resultado");
    if(numeroIngresado === ""){
        resultado.textContent = "cha migo, no da";
        return;
    }

    if(isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 1000){
        resultado.textContent = "Por favor ingrese un número válido entre 1 y 1000"
        return;
    }

    intentos++;
    document.getElementById("intentos").textContent = intentos;

    if (numeroIngresado < numeroAleatorio){
        resultado.textContent = "El número ingresado es muy menor " + numeroAleatorio;
    } else if (numeroIngresado > numeroAleatorio){
        resultado.textContent = " El número ingresado es alto";
    } else {
        resultado.textContent = "¡Felicidades! Adivinaste el número";
        partidasFinalizadas++;
        totalIntentos += intentos;

        if(intentos < mejorPuntaje){
            mejorPuntaje = intentos; 
            document.getElementById("mejorPuntaje").textContent = mejorPuntaje;
        }

        document.getElementById("partidasFinalizadas").textContent = partidasFinalizadas;
        const promedio = (totalIntentos / partidasFinalizadas);
        document.getElementById("promedio").textContent = promedio;
    }

    numeroIngresado = document.getElementById("numeroIngresado").value = "";

}

function finalizarPartida(){
    partidasFinalizadas++;
    totalIntentos += intentos;

    if(intentos < mejorPuntajes){
        mejorPuntajes = intentos; 
        document.getElementById("mejorPuntaje").textContent = 'Mejor puntaje: ${mejorPuntaje}';
    }

    document.getElementById("partidasFinalizadas").textContent = 'Cantidad de partidas finalizadas: ${totalPartidas}';
    const promedio = (totalIntentos / partidasFinalizadas).toFixer(2);
    document.getElementById("promedio").textContent = 'Promedio de intentos: ${promedio}';
}

function reiniciarPartida(){
    numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
    intentos = 0;

    document.getElementById("intentosActuales").textContent = intentos 
    resultado.textContent = "";
    document.getElementById("numeroIngresado").value = "";
}


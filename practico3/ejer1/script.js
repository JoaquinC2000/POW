let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
let intentos = 0;
let mejorPuntaje = null;
let partidasFinalizadas = 0;
let totalIntentos = 0;

function compararNumero(){
    const numeroIngresado = parseInt(document.getElementById("numeroIngresado").value);
    const resultado = document.getElementById("resultado");

    intentos++;

    document.getElementById("intentosActuales").textContent = intentos;

    if (numeroIngresado < numeroAleatorio){
        resultado.textContent = "El número es muy bajo";
    } else if (numeroIngresado > numeroAleatorio){
        resultado.textContent = " El número es grande";
    } else {
        resultado.textContent = "¡Felicidades! Adivinaste el número";
        finalizarPartida();
    }

}

function finalizarPartida(){
    partidasFinalizadas++;
    totalIntentos += intentos;

    if(intentos < mejorPuntajes){
        mejorPuntajes = intentos; 
        document.getElementById("mejorPuntajes").textContent = mejorPuntajes;
    }

    document.getElementById("partidasFinalizadas").textContent = partidasFinalizadas;
    const promedio = (totalIntentos / totalPartidas).toFixer(2);
    document.getElementById("promedio").textContent = promedio;

    reiniciarPartida(false);
}

function reiniciarPartida(resetIntento = true){
    numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
    if(resetIntento) intentos = 0;

    document.getElementById("intentosActuales").textContent = "0" 
    resultado.textContent = "";
    document.getElementById("numeroIngresado").value = "";
}


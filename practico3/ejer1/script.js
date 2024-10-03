let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
let intentos = 0;
let mejorPuntaje = Infinity;
let partidasFinalizadas = 0;
let totalIntentos = 0;

// document.getElementById("inputNumero").focus();
document.getElementById("comprobar").addEventListener('click', compararNumero);
document.getElementById("inputNumero").sdd.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        compararNumero();
    }
});

function compararNumero(){
    let numeroIngresado  = document.getElementById("inputNumero").value.trim();
    const numero = parseInt(numeroIngresado );
    const resultado = document.getElementById("resultado");
    const ganada = document.getElementById("ganada");
    document.getElementById("inputNumero").focus();

    if(numeroIngresado  === ""){
        resultado.textContent = "cha migo, no da";
        return;
    }

    if(isNaN(numero) || numero < 1 || numero > 1000){
        resultado.textContent = "Por favor ingrese un número válido entre 1 y 1000"
        return;
    }

    intentos++;
    document.getElementById("intentos").textContent = intentos;

    if (numero < numeroAleatorio){
        resultado.textContent = "El número ingresado es muy menor " + numeroAleatorio;
    } else if (numero > numeroAleatorio){
        resultado.textContent = " El número ingresado es alto";
    } else {
        resultado.textContent = "";
        ganada.textContent = "¡Felicidades! Adivinaste el número";
        finalizarPartida();
    }

    numeroIngresado  = document.getElementById("inputNumero").value = "";

}

function finalizarPartida(){
    partidasFinalizadas++;
    totalIntentos += intentos;

    if(intentos < mejorPuntaje){
        mejorPuntaje = intentos; 
        document.getElementById("mejorPuntaje").textContent = mejorPuntaje;
    }

    document.getElementById("partidasFinalizadas").textContent = partidasFinalizadas;
    const promedio = (totalIntentos / partidasFinalizadas).toFixed(2);
    document.getElementById("promedio").textContent = promedio;

    // reiniciarPartida(false);
}

function reiniciarJuego(resetIntentos = true){
    numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
    intentos = 0;

    document.getElementById("intentos").textContent = intentos 
    document.getElementById("resultado").textContent = "";
    // resultado.textContent = "";
    document.getElementById("inputNumero").value = "";
    document.getElementById("inputNumero").focus();
}


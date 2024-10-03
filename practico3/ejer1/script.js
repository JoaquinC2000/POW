let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
let intentos = 0;
let mejorPuntaje = Infinity;
let partidasFinalizadas = 0;
let totalIntentos = 0;

const inputNumero = document.getElementById("inputNumero");
const comprobar = document.getElementById("comprobar");
const resultado = document.getElementById("resultado");
const ganada = document.getElementById("ganada");
const intentosSpan = document.getElementById("intentos");
const mejorPuntajeSpan = document.getElementById("mejorPuntaje");
const partidasFinalizadasSpan = document.getElementById("partidasFinalizadas");
const promedioSpan = document.getElementById("promedio");

window.onload = () => {
    inputNumero.focus();
};

comprobar.addEventListener("click", compararNumero);
inputNumero.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        compararNumero();
    }
});

function compararNumero() {
    const numeroIngresado = inputNumero.value.trim();
    inputNumero.focus();

    if (numeroIngresado === "") {
        resultado.textContent = "cha migo, no da";
        return;
    }

    const numero = parseInt(numeroIngresado);
    if (isNaN(numero) || numero < 1 || numero > 1000) {
        resultado.textContent = "Por favor ingrese un número válido entre 1 y 1000";
        return;
    }

    intentos++;
    intentosSpan.textContent = intentos;

    
    if (numero < numeroAleatorio) {
        resultado.textContent =
            "El número ingresado es muy menor " + numeroAleatorio;
    } else if (numero > numeroAleatorio) {
        resultado.textContent = " El número ingresado es alto";
    } else {
        resultado.textContent = "¡Felicidades! Adivinaste el número";
        resultado.style.color = "rgb(0, 148, 0)";
        resultado.style.fontSize = "1.6rem";
        finalizarPartida();
    }

    numeroIngresado = inputNumero.value = "";
}

function finalizarPartida() {
    partidasFinalizadas++;
    totalIntentos += intentos;

    if (intentos < mejorPuntaje) {
        mejorPuntaje = intentos;
        mejorPuntajeSpan.textContent = mejorPuntaje;
    }

    partidasFinalizadasSpan.textContent = partidasFinalizadas;
    const promedio = (totalIntentos / partidasFinalizadas).toFixed(2);
    promedioSpan.textContent = promedio;

    // reiniciarPartida(false);
}

function reiniciarJuego(resetIntentos = true) {
    numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
    intentos = 0;

    resultado.style.color = "#ff5722";
    resultado.style.fontSize = "1.1rem";

    intentosSpan.textContent = intentos;
    resultado.textContent = "";
    inputNumero.value = "";
    inputNumero.focus();
}

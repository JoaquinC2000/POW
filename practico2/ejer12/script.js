function actualizarReloj(){
    const fecha = new Date();

    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    const horaActual = `${horas}:${minutos}:${segundos}`;

    document.getElementById("reloj").innerText = horaActual;
}
setInterval(actualizarReloj, 1000);

actualizarReloj();
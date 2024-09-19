function actualizarReloj(){
    let fecha = new Date(); /* Se obtiene la fecha y hora actual*/
    let horaActual = fecha.toLocaleTimeString();

    document.getElementById("reloj").innerHTML = horaActual;
}
setInterval(actualizarReloj, 1000);
actualizarReloj();
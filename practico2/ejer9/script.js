function mostrarFechHora() {
  const fecha = new Date(); /* Se obtiene la fecha y hora actual*/
  const fechaHora = fecha.toLocaleString();
  document.getElementById("fecha-hora").innerText = fechaHora;
}
mostrarFechHora();

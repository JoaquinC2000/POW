function sumarArreglo(arreglo){
    const suma = arreglo.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0); 
    return suma;
}
const arreglo = [1, 2, 3, 4, 5];
const resultado = sumarArreglo(arreglo);
document.getElementById("resultado").innerText = "resultado: " + resultado;

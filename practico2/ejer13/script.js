const pantalla = document.querySelector(".pantalla");
const pantalla1 = document.querySelector(".pantalla1");
const botones = document.querySelectorAll(".btn");
let igual = false; 

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if(boton.id === "c"){
            pantalla.textContent = "0";
            pantalla1.textContent = " ";
            return;
        }
        if(boton.id === "ce"){
            pantalla.textContent = "0";
            if(igual === true){
                pantalla1.textContent = " ";
            }
            igual = false;
            return;
        }
        if(boton.id === "borrar" || pantalla.textContent === "Error!"){
            if(pantalla.textContent.length === 1){
                pantalla.textContent = "0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            if(igual){
                pantalla1.textContent = " "
            }
            igual = false;
            return;
        }

        if(boton.id === "suma"){
            if(!igual){
                pantalla1.textContent = eval(pantalla1.textContent + pantalla.textContent) + "+";
            }else{
                pantalla1.textContent = pantalla.textContent + "+"; 
            }
            pantalla.textContent = "0";
            return;
        }

        if(boton.id === "resta"){
            if(!igual){
                pantalla1.textContent = eval(pantalla1.textContent + pantalla.textContent) + "-";
            }else{
                pantalla1.textContent = pantalla.textContent + "-"; 
            }
            pantalla.textContent = "0";
            return;
        }

        if(boton.id === "igual"){
            try {
                igual = true;
                let num = pantalla.textContent;
                pantalla.textContent = eval(pantalla1.textContent + pantalla.textContent);
                pantalla1.textContent = pantalla1.textContent + num + "=";
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }
 
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else if(igual){
            pantalla1.textContent = "";
            pantalla.textContent = botonApretado;
            igual = false;
        }else {
        pantalla.textContent += botonApretado;
        }
    });
});

// function appendNumber(num){
//     if(pantalla.textContent === "0"){
//         pantalla.textContent = num;
//     }else{
//         pantalla.textContent += num;
//     }
// }

// // setOperacion(op){

// // }

// function clearScreen(){
//     currentNumber = '';
//     previousNumber = '';
//     operation = '';
//     document.getElementById("resultado").value = '';
// }

// function calcular(){
//     let resultado;
//     const prev = parseFloat(previousNumber);
//     const curr = parseFloat(currentNumber);

//     if(isNaN(prev) || isNaN(curr)) return;

//     switch(operation){
//         case '+':
//             resultado = prev + curr;
//             break;
//         case '-':
//             resultado = curr - prev;
//             break;
//         case '*':
//             resultado = prev * curr;
//             break;
//         case '/':
//             resultado = curr / curr;
//             break;
//         default:
//             return;
//     }

//     currentNumber = resultado.toString();
//     operation = '';
//     previousNumber = '';
//     historial = '';
//     actualizarPantalla();
// }

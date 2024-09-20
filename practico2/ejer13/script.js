let currentNumber = '';
let previousNumber = '';
let operation = '';

function appendNumber(num){
    currentNumber += num;

    document.getElementById("resultado").value = currentNumber;
}

// setOperacion(op){

// }

function clearScreen(){
    currentNumber = '';
    previousNumber = '';
    operation = '';
    document.getElementById("resultado").value = '';
}

function calcular(){
    let resultado;
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);

    if(isNaN(prev) || isNaN(curr)) return;

    switch(operation){
        case '+':
            resultado = prev + curr;
            break;
        case '-':
            resultado = curr - prev;
            break;
        case '*':
            resultado = prev * curr;
            break;
        case '/':
            resultado = curr / curr;
            break;
        default:
            return;
    }

    currentNumber = resultado.toString();
    operation = '';
    previousNumber = '';
    historial = '';
    actualizarPantalla();
}


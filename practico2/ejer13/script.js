let currentNumber = '0';
let previousNumber = '';
let operation = '';

function appendNumber(num){
    currentNumber += num;

    document.getElementById("resultado").value = currentNumber;
}

setOperacion(op){

}

function clearScreen(){
    currentNumber = '0';
    previousNumber = '';
    operation = '';
    document.getElementById("resultado").value = '';
}

function calcular(){

}
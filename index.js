
function calculadora(operacion, num1, num2) { 
    switch(operacion) { 
        case 'suma': 
            return num1 + num2;
        case 'resta': 
            return num1 - num2; 
        case 'multiplicacion':
            return num1 * num2;           
        case 'division': 
            if (num2 === 0) { 
            return 'Error: División por cero'; 
            } 
            return num1 / num2; 
        default: 
            return 'Operación no válida'; 
    } 
}
console.log(calculadora('suma', 5, 3));  

function sumar(a, b) {
    return a + b;
}

console.log(sumar(5, 6)); 



function multiplicarPorTres(n) {
    return n * 3;
}

function sumarCinco(n) {
    return n + 5;
}

console.log(sumarCinco(multiplicarPorTres(3)));


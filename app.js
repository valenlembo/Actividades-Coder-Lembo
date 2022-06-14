/* clase 2: crear un algoritmo con un condicional
Crea un algoritmo que solicite al usuario uno o más valores ingresados por prompt(), compare las entradas y, en función de ciertas condiciones, muestre un resultado. */

let edad = prompt("Ingrese su edad");
if(edad >= 18){
    alert(`Genial tienes ${edad} años puedes navegar por nuestro sitio web`);
}else{
    alert(`Tienes ${edad} años, eres menor de edad no puedes navegar por nuestro sitio web`);
}

let num1 = prompt("Ingrese un numero");
let num2 = prompt("Ingrese otro numero");
let operacion = prompt("Ingrese un + para sumar, un - para restar, un * para multiplicar, un / para dividir");
switch(operacion){
    case "+":
        res = parseFloat(num1) + parseFloat(num2);
        alert(`El resultado de la suma es: ${res}`);
        break;
    case "-":
        res = parseFloat(num1) - parseFloat(num2);
        alert(`El resultado de la resta es: ${res}`);
        break;
    case "*":
        res = parseFloat(num1) * parseFloat(num2);
        alert(`El resultado de la multiplicacion es: ${res}`);
        break;
    case "/":
        res = parseFloat(num1) / parseFloat(num2);
        alert(`El resultado de la division es: ${res}`);
        break;
    default:
        alert("La operacion no es valida");
        break;
}

/* clase 3: CREAR UN ALGORITMO UTILIZANDO UN CICLO
Tomando como base los ejemplos anteriores de la estructura for y while, crear un algoritmo que repita un bloque de instrucciones. En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola.
*/ 

let numeroParaMultiplicar = parseInt(prompt("Ingrese un numero para saber su tabla de multiplicar"));

for(let i = 1; i < 10; i++){
    console.log(`${numeroParaMultiplicar} X ${i} = ${numeroParaMultiplicar * i}`);
}





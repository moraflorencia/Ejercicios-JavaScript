/*
Ejercicios Básicos (Bloque 1)


Ejercicio 1: Variables y Template Literals
Creá variables con tu nombre, edad y ciudad. Después, creá un mensaje usando template literals que diga: "Mi nombre es [nombre], tengo [edad] años y vivo en [ciudad]".
*/

let nombre = "Florencia";
let edad = 24;
let ciudad = "Quilmes";

let mensaje = `Mi nombre es ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`;
console.log(mensaje);


/*
Ejercicio 2: Operadores Aritméticos
Creá dos variables con números. Calculá y mostrá en consola: la suma, resta, multiplicación, división y el módulo de esos números.
*/ 

let num1 = 7;
let num2 = 4;

let suma = num1 + num2;
console.log("Suma:", suma);

let resta = num1 - num2;
console.log("Resta:", resta);

let multiplicacion = num1 * num2;
console.log("Multiplicación:", multiplicacion);

let division = num1 / num2;
console.log("División:", division);

let modulo = num1 % num2;
console.log("Módulo:", modulo);

/*
Probá las siguientes comparaciones y explicá por qué dan ese resultado:

10 == "10"   Da true porque compara solo el valor sin importar el tipo de dato.
10 === "10"  Da false porque compara tanto el valor como el tipo de dato, y son diferentes.
true == 1    Da true porque en la comparación suelta, true se convierte a 1.
true === 1   Da false porque son de tipos diferentes (booleano y número).

*/

/*
Creá una función que reciba un número y retorne "Par" si el número es par, o "Impar" si es impar.
*/

function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }

//------------------------------------------------------------------------------------------------------------------------------------------------

/*
Ejercicios Intermedios (Bloque 2)

Ejercicio 6: Calificación
Creá una función que reciba una nota (0-100) y retorne:

"Excelente" si la nota es >= 90
"Muy bien" si está entre 75 y 89
"Bien" si está entre 60 y 74
"Aprobado" si está entre 50 y 59
"Reprobado" si es menor a 50
*/

function calificacion(nota) {
    if (nota >= 90) {
        return "Excelente";
    }
    else if (89 >= nota >= 75) {
        return "Muy bien";
    }
    else if (74 >= nota >= 60) {
        return "Bien";
    }
    else if (59 >= nota >= 50) {
        return "Aprobado";
    }
    else {
        return "Reprobado";
    }
}}


/*
Ejercicio 7: Tabla de Multiplicar
Creá una función que reciba un número y muestre en consola su tabla de multiplicar del 1 al 10.
*/

function tablaDeMultiplicar(numero) {

    let i = 0;
    let resultado = null;

    for ( i = 1; i <= 10; i++) {
        resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    } 
}

/*
Creá una función que sume todos los números del 1 hasta N (donde N es el parámetro que recibe la función).
*/

function sumaHastaN(N) {

    let suma = 0;
    let i = 0;

    for (i = 1; i <= N; i++) {
        suma += i;
        console.log(suma);
    }
}

/*
Ejercicio 9: Número Primo
Creá una función que determine si un número es primo o no. Un número primo solamente es divisible por 1 y por sí mismo.
*/

function esNumeroPrimo(numero) {

let i = 0;
let cont = 0;

for (i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        cont++;
    }
}

if (cont > 2){
 console.log("No es primo");
}
else {
 console.log("Es primo");
}   
}


/*
Ejercicio 10: FizzBuzz
Escribí una función que imprima los números del 1 al 100, pero:

Para múltiplos de 3, imprime "Fizz" en lugar del número
Para múltiplos de 5, imprime "Buzz"
Para números que son múltiplos de ambos 3 y 5, imprime "FizzBuzz"
*/


function fizzBuzz() {

    let i = 0;

    for (i = 1; i <= 100; i++) {

    if (i % 3 === 0){
        console.log("Fizz");
    }
    else if (i % 5 === 0){
        console.log("Buzz");
    }
    else if (i % 3 === 0 && num % 5 === 0){
        console.log("FizzBuzz");
    }
    else {
        console.log(i);
    }
    } 
}

/*
Ejercicios de Integración

Ejercicio 11: Calculadora Completa
Creá una función calculadora que reciba dos números y una operación (como string: "sumar", "restar", "multiplicar", "dividir") y retorne el resultado. Tiene que manejar el caso de división por cero.
*/

function calculadora(num1, num2, operacion) {

    let resultado = null;

    switch (operacion) {
        case "sumar":
            resultado = num1 + num2;
            break;
        case "restar":
            resultado = num1 - num2;
            break;
        case "multiplicar":
            resultado = num1 * num2;
            break;
        case "dividir":
            if (num2 === 0) {
                return "Error: División por cero";
            } else {
                resultado = num1 / num2;
            }
            break;
        default:
            return "Operación no válida";
    }

    return resultado;
}

/*
Ejercicio 12: Contador de Vocales
Creá una función que reciba un string y cuente cuántas vocales tiene (a, e, i, o, u). Tiene que funcionar con mayúsculas y minúsculas.
*/

function contarVocales(cadena) {
    
}
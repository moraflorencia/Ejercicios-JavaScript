
// Variables en JavaScript: let, const y var

let mensaje = "Hola Mundo!";
console.log(mensaje); 

const mensaje2 = "Hola Mundo con const!"; 
console.log(mensaje2);

var mensaje3 = "Hola Mundo con var!";
console.log(mensaje3);

function saludar() {
    var mensaje4 = "Hola desde una función!";
    console.log(mensaje4);
} // Se aplica dentro y afuera de bloques

function saludarLet() {
    let mensaje5 = "Hola desde una función con let!";
    console.log(mensaje5);
}  // Se aplica dentro del bloque de la función


// Tipos de datos en JavaScript

/* String = string
    Number = int, float
    Boolean = bool
    Undefined 
    Null = null
    Object = object
    Array = array

    console.log(typeof variable)  para ver el tipo de dato
*/

// Forma antigua

let nombre = "Florencia"; // String
let edad = 24;
let mensaje1 = "Hola" + " " + nombre + ", tienes " + edad + " años.";

// Forma moderna con template literals

const nombre2 = "Florencia";
const edad2 = 24;

console.log(`Hola mi nombre es ${nombre2} y tengo ${edad2} años.`);

// Operadores aritméticos en JavaScript

let suma = 5 + 3; // 8
let resta = 10 - 4; // 6    
let multiplicacion = 6 * 7; // 42
let division = 20 / 5;
let modulo = 10 % 3; // 1

// Operadores de comparación en JavaScript

5 == '5'; // true
5 === '5'; // false
5 != '5';   // false
5 !== '5'; // true
5 > 3; // true 

// Truthy y Falsy values

/* Falsy values: false, 0, "", null, undefined, NaN

   Truthy values: cualquier valor que no sea falsy
*/

//Estructuras de control en JavaScript

let edad3 = 18;

if (edad3 >= 18) { 
    console.log("Eres mayor de edad.");
}
else if (edad3 === 18) {
        console.log("Tienes 18 años.");
}
else {
    console.log("Eres menor de edad.");
}

//Operador ternario

let esMayor = (edad3 >= 18) ? "Eres mayor de edad."  : "Eres menor de edad.";
console.log(esMayor);

// Operacion ternario con else if

let mensajeEdad = (edad3 > 18) ? "Eres mayor de edad." 
                  : (edad3 === 18) ? "Tienes 18 años."
                  : "Eres menor de edad.";
console.log(mensajeEdad);

// Switch case en JavaScript

let dia = 3;        
let nombreDia;

switch (dia) {  
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    case 4:
        nombreDia = "Jueves";
        break;
    case 5:
        nombreDia = "Viernes";
        break;
    case 6:
        nombreDia = "Sábado";
        break;
    case 7:
        nombreDia = "Domingo";
        break;
    default:
        nombreDia = "Día inválido";
}

console.log(`El día ${dia} es ${nombreDia}.`);

// Bucles en JavaScript 

for (let i = 1; i <= 5; i++) {
    console.log(`Iteración número ${i}`);
}


let contador = 0;

while (contador < 5) {
    console.log(`Contador es ${contador}`);
    contador++;
}

let contador2 = 0;
do {
    console.log(`Contador2 es ${contador2}`);
    contador2++;
} while (contador2 < 5);

// For con break y continue

for (let i = 1; i <= 10; i++) {
    if (i !== 6) {
        break; // Sale del bucle cuando i es diferente de 6
    }
    if (i % 2 === 0) {
        continue; // Salta la iteración cuando i es par
    } 

    console.log(`Número impar: ${i}`);
}

// Funciones en JavaScript

// Declaración de función tradicional

function saludar3(nombre) {
    return `Hola, ${nombre}!`;
}

let saludo = saludar3("Florencia");

// Metodos de función (expresión de función)

let miNumero = 0;

function incrementarEnUno(numero) {
    miNumero = numero + 1;
};

function saludarcondefault(nombre = "Invitado") {
    return `Hola, ${nombre}!`;
}

saludarcondefault(); // "Hola, Invitado!"
saludarcondefault("Florencia"); // "Hola, Florencia!"

// Funciones flecha (arrow functions)

const saludarFlecha = (nombre) => {
    return `Hola, ${nombre}!`;   // Explicit return
}
const saludarFlechaCorta = nombre => `Hola, ${nombre}!`;  //Implicit return

// Javascript lee primero las funciones declaradas y luego el resto del código


//Creacion de arrays en JavaScript

let frutas = ["Manzana", "Banana", "Cereza"];

console.log(frutas[0]); // "Manzana"

frutas.push("Naranja"); // Agrega "Naranja" al final del array

console.log(frutas.length); // 4

frutas.pop(); // Elimina el último elemento del array

console.log(frutas.length); // 3

// Modificar un elemento

frutas[1] = "Mango"; // Cambia "Banana" por "Mango"

//Obtener longitud del array

let longitudFrutas = frutas.length; // 3

// Ultimo elemento del array

let ultimoElemento1 = frutas[frutas.length - 1]; // "Cereza"

// Metodos basicos de arrays

// push

frutas.push("Pera"); // Agrega "Pera" al final del array

// pop

frutas.pop(); // Elimina el último elemento del array

// shift

frutas.shift(); // Elimina el primer elemento del array

// unshift

frutas.unshift("Fresa"); // Agrega "Fresa" al inicio del array

// slice

let citricos = frutas.slice(1, 3); // Crea un nuevo array con elementos desde el índice 1 hasta el 2

// splice

frutas.splice(1, 1, "Kiwi"); // Reemplaza 1 elemento en el índice 1 con "Kiwi"

// eliminar elementos con splice

frutas.splice(2, 1); // Elimina 1 elemento en el índice 2

// copiar elementos con slice

let nuevasFrutas = frutas.slice(0, 2); // Crea un nuevo array con los primeros 2 elementos

// splice para insertar sin eliminar

frutas.splice(2, 0, "Melón"); // Inserta "Melón" en el índice 2 sin eliminar elementos


/*
Dado el array: const numeros = [10, 20, 30, 40, 50, 60];
1. Obten el primer elemento del array.
2. Obtene el último elemento del array.
3. Obtene el elemento del medio del array.
4. Modifica el tercer elemento del array por 99.
*/

//1. Obten el primer elemento del array.

let primerElemento = numeros[0];
console.log(primerElemento);

//2. Obtene el último elemento del array.

let ultimoElemento = numeros[numeros.length - 1];
console.log(ultimoElemento);

//3. Obtene el elemento del medio del array.

let mitad = (numeros.length)/2 ;

console.log(mitad);

// 4. Modifica el tercer elemento del array por 99.

numeros.splice(3, 1, 99);

/* Metodos modernos de arrays

forEach : Ejecuta una función para cada elemento del array
map : Crea un nuevo array con los resultados de la función aplicada a cada elemento
filter : Filtra los elementos del array que cumplen con una condición
find : Encuentra el primer elemento que cumple con una condición
reduce : Reduce el array a un único valor aplicando una función acumulativa
some/every : Verifica si al menos uno o todos los elementos cumplen con una condición */

const precios = [100, 200, 300, 400, 500];

// ForEach

console.log("Precios con Iva")

precios.forEach((precio) => {
    const precioConIva = precio * 1.21;
    console.log(precioConIva);
});

// ForEach con index y array

precios.forEach(element, index , array) => {  
    const precioConIva = element * 1.21; 
};

const ciudades = ["Buenos Aires", "Córdoba", "Rosario", "Mendoza", "La Plata"];

ciudades.forEach((ciudad, index) => {
    console.log(`${index + 1} - ${ciudad}`);
}   );

// Map

// Crea un nuevo array tranformando cada elemento

const duplicado = nums.map((nums) => {
    return nums * 2;
});

console.log(nums);
console.log(dupicado);

const cuadrados = nums.map((nums) => nums ** 2);
console.log(cuadrados);


//Filter: Para que de el resultado la condición debe ser verdadera

const pares = nums.filter((nums) => nums % 2 === 0);
console.log(pares);

const mayoresDeTres = nums.filter((nums) => nums > 3);
console.log(mayoresDeTres);

// Filter con objetos

const productos = [
    { nombre: "Camisa", precio: 500 },
    { nombre: "Pantalón", precio: 1200 },
    { nombre: "Zapatos", precio: 800 },
    { nombre: "Sombrero", precio: 300 },
];
const productosCaros = productos.filter((producto) => producto.precio > 700);
console.log(productosCaros);

// Find: 

const numeroMayorQueTres = nums.find((nums) => nums > 3);
console.log(numeroMayorQueTres);

const estudianteConA = estudiantes.find((estudiante) => estudiante.nota === "A");
console.log(estudianteConA);

// Findex 

const indiceNumeroMayorQueTres = nums.findIndex((nums) => nums > 3);
console.log(indiceNumeroMayorQueTres);
const indiceEstudianteConA = estudiantes.findIndex((estudiante) => estudiante.nota === "A");
console.log(indiceEstudianteConA);

// Reduce

const sumaTotal = nums.reduce((acumulador, nums) => {
console.log(sumaTotal);
return acumulador + nums; // Suma cada elemento al acumulador
}, 0); // Valor inicial del acumulador es 0

const suma3 = valores.reduce((acumulador, valor) =>{
console.log(suma3);
return acumulador + valor;
}, 0);

// Encadamiento de metodos

const totalVentas = ventas
    .filter((venta) => venta > 100) // Filtra ventas mayores a 100
    .map((venta) => venta * 1.1) // Aplica un incremento del 10%
    .reduce((acumulador, venta) => acumulador + venta, 0); // Suma total de ventas

console.log(totalventas);

// Orden de uso de metodos
// 1. filter
// 2. map
// 3. reduce
// 4. forEach (si es necesario)

// Some y Every

const hayNumeroMayorQueCuatro = nums.some((nums) => nums > 4);
console.log(hayNumeroMayorQueCuatro);

const todosSonMenoresQueDiez = nums.every((nums) => nums < 10);
console.log(todosSonMenoresQueDiez);







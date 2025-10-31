/*
Ejercicio N°1 : Crea un array con 5 nombres de tus pleiculas favoritas. Realiza las siguientes operaciones:
1. Agrega una nueva pelicula al final del array.
2. Agrega una al principio.
3. Cambia el nombre de la tercera pelicula por otra de tu preferencia.
4. Mostra la cantidad total de peliculas.
*/

let peliculas = ["Up", "Bee Movie", "Toy Story", "Buscando a Nemo", "The Incredibles"];

// 1.Agrega una nueva pelicula al final del array.

peliculas.push("Coco");

// 2. Agrega una nueva pelicula al final del array.

peliculas.unshift("Buscando a Dory")

// 3. Cambia el nombre de la tercera pelicula por otra de tu preferencia.

peliculas.splice(3, 1, "MonstersInc");

// 4. Mostra la cantidad total de peliculas.

let longitudPeliculas = peliculas.length;

console.log(longitudPeliculas);

/*
Ejercicio N°2 : Dado el array: const numeros = [10, 20, 30, 40, 50, 60];
1. Obten el primer elemento del array.
2. Obtene el último elemento del array.
3. Obtene el elemento del medio del array.
4. Modifica el tercer elemento del array por 99.
*/

const numeros = [10, 20, 30, 40, 50, 60]

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
console.log(numeros);

/*
Ejercicio 3 : forEach - Mostrar con Formato
Dado el array de nombres: ["Ana", "Juan", "María", "Pedro"]

Usa forEach para mostrar cada nombre con el formato: "Hola, [nombre]!"
*/
const nombres = ["Ana", "Juan", "María", "Pedro"];

nombres.forEach((nombres) => {
    const saludo = `Hola, ${nombres}!`;
    console.log(saludo);
});

/*
Ejercicio 4 : map - Transformar Datos
Dado el array: const precios = [100, 200, 350, 80, 120];

Usa map para crear un nuevo array donde cada precio tenga un 15% de descuento.
*/

const precios = [100, 200, 350, 80, 120];

const preciosConDescuento = precios.map((precio) => {
    const preciosConDescuento = precio * 0.85;
    console.log(preciosConDescuento);
})






/*
Crea un array con 5 nombres de tus pleiculas favoritas. Realiza las siguientes operaciones:
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





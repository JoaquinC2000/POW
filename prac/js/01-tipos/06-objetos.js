let nombre = "Goku";
let anime = "Dragon Ball";

let personaje = { // Objeto literal
    nombre: "Goku",  // par llave-valor
    anime: "Dragon Ball", 
}; 

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

//Modificar
personaje.nombre = 'Vegetta';
personaje['nombre'] = 'Gohan';

console.log(personaje.nombre);

//Eliminar
delete personaje.nombre;
console.log(personaje);
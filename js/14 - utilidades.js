'use strict'
//? El destructuring es una caracteristica nueva de ES6 que nos permite desempacar un arreglo o un objeto directamente y de manera múltiple para extraerlos en variables o constantes.

//* DESESTRUCTURACIÓN DE OBJETOS (OBJECT DESTRUCTURING)
const cancion = {
  nombre: 'abcde',
  autor: 'elegante',
  duracion: '1:00',
  genero: 'Cumbia villera'
}

let { nombre, duracion } = cancion;
console.log(nombre);
console.log(duracion);
//! Seria lo mismo que:
// let nombre = cancion.nombre
// let duracion = cancion.duracion
let { nombre: name, duracion: duration } = cancion;
console.log(name);
console.log(duration);
let { nombre: n, duracion: d, genero: g = 'Cumbia' } = cancion;
console.log(g);

function mostrarCancion({ nombre, autor }) {
  console.log(`La cancion se llama ${nombre} y su autor es ${autor}`);
}

mostrarCancion(cancion)

function getSong() {
  return {
    name: 'abcde',
    author: 'elegante'
  }
}

const { author } = getSong();

console.log(author);

//* DESESTRUCTURACIÓN DE ARREGLOS (ARRAY DESTRUCTURING)

const rgb = [0, 255, 100];

let [red, green, blue] = rgb;
// let [red, blue] = rgb; //! red igual a cero, y a blue igual a 255
// let [red, , blue] = rgb; //*red igual 0, blue igual a 100

console.log(red);
console.log(green);
console.log(blue);

const useState = ['Diego', function (newState) { console.log(newState) }];

const [state, setState] = useState;

console.log(state);

setState('Marcos');


//* SPREAD OPERATOR
//? El spread operator es también una incorporación de ES6 que nos permite trabajar de mejor manera con arrays y objetos. Su simbolo es... x.x
const numeros = [5, 6];
const del1al10 = [1, 2, 3, 4, ...numeros, 7, 8, 9, 10];
console.log(del1al10);
const clon = [...del1al10];
const numeros2 = [15, 16];
console.log(clon);
const del1al16 = [...del1al10, 11, 12, 13, 14, ...numeros2];
console.log(del1al16);

console.log(Math.max(...del1al16));

const dog = {
  name: 'Momo',
  age: 7,
  breed: 'Bulldog Frances'
}
console.log(dog);

const dogWithOwnerInfo = {
  ...dog,
  owner: 'Pablo'
}

console.log(dogWithOwnerInfo);


//* IMPORTACIÓN Y EXPORTACIÓN (IMPORT Y EXPORT)
//? Podemos exportar funciones, objetos o datos para que puedan ser utilizadas en otras partes de mi aplicación. 
//? Existen dos tipos de exports: por defecto (puede haber solo una en un script) o nombrada(puede haber multiples en un script)
import { agregarProducto, constante } from "./07 - funciones.js";
// import pepito from "./11 - eventos"
// console.log(constante);
// console.log(pepito);


//* REPASO DE FUNCIONES (FUNCTIONS)

function saludo(){
  console.log('Hola Mundo')
}

const saludar = function (){
  console.log('Hola mundo de nuevo');
}

const saludazo = () => {
  console.log('Hola mundo una vez mas');
}

saludo();
saludar();
saludazo();

// arrays.filter(item=>item.id == id)

//* OPERADOR TERNARIO

let x=10;
x < 100 ? console.log('Es menor a cien') : console.log('Es mayor o igual a cien');


let user = {
  admin: true
}
let parrafo = document.createElement('p');
parrafo.innerHTML = user.admin ? `<span class='bg-primary'>Hola admin</span>` : null;
document.body.appendChild(parrafo)

//* TRY - CATCH

try {
  alert('No hay errores')
} catch (error) {
  console.log(error);
  alert('Ni me van a leer')
}
try {
  diego;
  alert('Acá si hay errores')
} catch (error) {
  console.log(error.message);
  alert('Error')
}
try {
  if(!name.user){
    throw new Error('El usuario no tiene nombre')
  }
  alert('Acá si hay errores')
} catch (error) {
  console.log(error.message);
  alert('Error')
}
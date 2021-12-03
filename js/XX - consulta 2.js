// //VARIABLES
// /*
// const //aca guardaremos algo que no se va a cambiar nunca //! BUENA PRACTICA
// let //aca guardamos algo que si se va a cambiar y que tiene un scope(limite) definido //! BUENA PRACTICA
// var // global, guarda algo que se va a cambiar y no tiene scope
// */
// let persona;

// // STRINGS
// 'Hola soy Diego 1. let x = 2'
// "Hola soy Diego 2"

// "Hola soy " + persona + " asidasidjh " + persona + " oerpaosja " + persona

// // `Hola soy ${persona} asdasdasdasd ${persona} asdasdasdasd. ${persona.toUpperCase().trim()}` //Template literals

// //Numeros

// 15
// 21
// 1550
// -151+151 === 0 ///true
// -151+151 == '0' ///true
// -151+151 === '0' ///false

// 151 + '151' == '151151' //true

// 11 + 11 + 11 + '11' == '3311'

// '11' + 11 + 11 + 11 == '11111111'

// Math.max(11,23,51,11,12); //51
// Math.random() // numero aleatorio entre 0 y 1. ej=0.513135
// Math.random() * 10 // numero aleatorio entre 0 y 10
// Math.round(1.6) //devuelve 2 //redondea
// Math.floor(1.6) //devuelve 1  //corta los decimales

// //
// true
// !true //false
// false 
// !false //true

// if(!persona){
//   console.log(1234);
// }

// true && true //true
// true && false //false
// false || true //false
// false || false //false


// true || true //true
// true || false //true
// false || true //true
// false || false //false

// true && false || true
// false || true //true

// //Arrays

// let array = ['Diego',12,true,[],{}]

// console.log(array[0]);
// console.log(array.length);
// //TODO array.includes('Diego') => true. te avisa cuando el elemento que le paso está o no en el array
// //TODO array.push(elemento) => agregar al elemento al final del array
// //TODO array.pop(elemento) => eliminar el ultimo elemento del array
// //TODO array.indexOf(12) => devolver 1. la posicion del elemento que le paso
// //TODO array.splice(inicio, cantidad de elementos a borrar, reemplazo) => cortar partes del array y reemplazarlas. ej: array.splice(1,2) ==>['Diego',[],{}] 
// let array2 = [1,2,3,4,5]
// //TODO array.forEach
// array2.forEach(elemento => console.log(elemento))
// //TODO array.map
// console.log(array2.map(elemento => elemento*2))
// //TODO array.filter
// console.log(array2.filter(function(elemento){return elemento>2}));
// console.log(array2.filter(elemento => elemento>2));
// //TODO array.find
// console.log(array2.find(elemento => elemento>2));
// console.log(array2.find(elemento => elemento===4));

// //!OBJETOS

// let objeto = {
//   nombre:'Diego',
//   apellido:'Fernandez',
//   edad:26,

//   saludar:function(){
//     return `Hola soy ${this.nombre}`;
//   }
// }

// console.log(objeto.saludar());

// class Persona{
//   constructor(nombre,apellido,edad){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//   }

//   saludar(){
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// let diego = new Persona('Diego', 'Fernández', 26);
// let roman = new Persona('Roman', 'Gasparini', 22);

// console.log(diego);
// console.log(roman);

// diego.saludar();
// roman.saludar();

// class Cientifico extends Persona{
//   constructor(nombre, apellido, edad, estaVivo,invento){
//     super(nombre, apellido, edad);
//     this.estaVivo = estaVivo;
//     this.invento = invento;
//   }
//   yoCree(){
//     console.log(`yo cree ${this.invento}`);
//   }
// }

// let tesla = new Cientifico('Nikola','Tesla',undefined,false,'la corriente alterna');
// let einstein = new Cientifico('Albert','Einstein',undefined,false,'la teoria de la relatividad');

// console.log(tesla);
// console.log(einstein);

// tesla.yoCree();
// tesla.saludar();

// einstein.yoCree();
// einstein.saludar();

// //!BOM y DOM

// //BOM nos permite manipular el navegador, por ejemplo, el historia, la barra de navegacion, la ventana, los iframes

// //funciones de tiempo 

// setTimeout(()=>console.log('hola, pasaron 10 segundos'),10000);

// // challenge tablas

// let numero = Number(prompt('Ingrese el numero de la tabla que desea saber'));
// let contador = 0;
// while(contador<=10){
//   console.log(numero*contador);
//   contador = contador + 1 ;
// }

// for(let contador2=0;contador2<=10;contador2++){
//   console.log(numero*contador2);
// }

// //challenge de dados


// // TODO 1- Crear login 

//TODO 2- Crear registro  

//TODO 3- Crear muestra de productos y carrito de compras

//TODO 4- Crear el detalle de todos los productos donde tambien se pueda agregar el producto al carrito 
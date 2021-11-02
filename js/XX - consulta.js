// TIPOS DE DATOS

//VARIABLES
var variableQueNoVoyAUtilizar; //Es una mala practica, por eso no la vamos a utilizar
let formaQueVoyAUtilizar;  //forma de llamar variables --> CAMEL CASE
const noModificoNuncaMasEsto = 'Este es un texto que no va a cambiar nunca';

//- STRINGS (cadena de caracteres)
"HOLA, SOY UN STRING" === 'HOLA, SOY UN STRING'
"Hola, esto es una variable const noModificoNuncaMasEsto"

//TEMPLATE LITERALS

// `Hola, esto es una variable const ${noModificoNuncaMasEsto} asdasdasd ${noModificoNuncaMasEsto} asdasdasd ${noModificoNuncaMasEsto}`
//CONCATENACIÓN DE STRING
"Hola, esto es una variable const " + noModificoNuncaMasEsto + ' asdasd ' + noModificoNuncaMasEsto + ''  

/* COSAS QUE PUEDO HACER CON LOS STRINGS
- Buscar texto o palabra adentro de la cadena --> .include(palabra a buscar) --> true o false
- Contar la cantidad de caracteres de la cadena --> .lenght --> numero
- Pasar todo a mayuscula o a minusculal --> .toLowerCase() o .toUpperCase()
- otras cosas
*/

// - NUMBERS
1 
2 
3 
4
5;

4+5 === 9; // true
4+5 == '9' // true
4+5 === '9' // false

4 + '5'== '45' //true

4 + 5 + '3' == 9 + '3' == '93'; //true
4 + '3' + 5 == '435'

//OBJETO MATH 
// Buscar maximos y minimos 
// Redondear
// Truncar
// Buscar numero aleatorio

// - BOOLEANS
true
false

if(variableQueNoVoyAUtilizar /*-->false*/){
  console.log('hola');
}  

if(noModificoNuncaMasEsto /*-->true*/){
  console.log('hola 2');
}

// - ARRAYS ó LISTAS

let array = [];
let marcas = ['US - nike','GER - adidas','UK - topper','UK - underarmour', 'IT - fila'];
let arrayConMuchosTiposDeDatos = ['string',true,15,[],{}];
let posiciones = [0,1,2,3,4,5,6]; /* 
cantidad elementos = 7 --> posiciones.length -->ubicar el ultimo elemento posiciones.length - 1
*/

// Cuando tengo canciones de un album, peliculas de un director, transacciones de un usuario, etc, usamos un array
// Recorrer cada elemento del array --> ciclo for, .forEach(callback)
// Ejecutar una accion a cada uno de los elementos --> .map(callback)
// Saber si hay un elemento adentro de mi array --> .include()
// Buscar un elemento que cumpla una condicion en el array y traerlo --> [].find(callback) ó array.find(callback)
// Buscar varios elementos que cumplan una condicion en el array y traerlos --> .filter(callback)

marcas.forEach(function(marca){
  console.log(marca);
});
marcas.forEach(elemento=> console.log(elemento));
// posiciones.forEach(posicion => alert(posicion));
posiciones[1] = posiciones[1]*4;
let posicionesCuadriplicadas = posiciones.map( posicion => posicion * 4 );

console.log(posiciones);
console.log(posicionesCuadriplicadas);

let marcaAlemana = marcas.filter(elementoProvenienteDeMarcas => elementoProvenienteDeMarcas.includes('UK'));
console.log(marcaAlemana);

//CALLBACK ES UNA FUNCION QUE SE PASA COMO ARGUMENTO

//FUNCIONES 
//Ver carrito

// - OBJECTS

let objeto = {};
let computadora = {
  monitor:'LG 24',
  mouse:'logitech',
  teclado:'logitech',
  procesador: 'ryzen 7',
  parlante:'sony',
  ram:32,
  discoRigido:'ssd 1tb',
  concectarseAInternet:function(){
    console.log('conectado a internet');
  },
  encender: function(){
    console.log('computadora prendida');
  },
  apagar: function(){
    console.log('computadora apagada');
  }
}

console.log(computadora.monitor);

computadora.encender();

// - NULL, UNDEFINED


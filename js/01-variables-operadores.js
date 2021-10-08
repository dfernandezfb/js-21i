/*
alert --> Es para mostrar una alerta en el navegador
prompt --> Es para pedirle un valor al usuario
*/

// //VARIABLES
// let variable1 = 1;
// var variable2 = 2; //! No es una buena práctica
// const variable3 = 3;
// let x
// if (!x) {
//   let variablelet = '50';
//   var variablevar = '100';
// }
// // console.log(variablelet); Al ser una variable let, no la reconoce afuera del entorno
// console.log(variablevar); //Al ser una variable var, si la reconoce afuera del entorno

// //TIPOS DE VARIABLES
// //string
// let string = 'Soy un string, que es una cadena de caracteres 1d$%*+- 🔥';
// console.log(string);
// //number
// let numero = 15;
// console.log(numero);
// //boolean
// let boolean = true;
// let booleanfalse = false;
// console.log(boolean);
// console.log(booleanfalse);
// //array
// let arreglo = [1, 'hola', true, ['hola', 2]];
// console.log(arreglo);
// //object
// let sanmartin = {
//   nombre: 'san martin',
//   lugar: 'Tucuman',
//   edad: 113,
//   divisional: 'B'
// }
// console.log(sanmartin);
// //null
// let nada = null;
// console.log(nada);
// //undefined
// let indefinida;
// console.log(indefinida);

// //OPERADORES
// //asignación --> es el signo igual
// //aritmeticos
// let numero1 = 15;
// let numero2 = '15';

// console.log(numero1 + numero2);
// console.log(numero1 - numero2);
// console.log(numero1 * numero2);
// console.log(numero1 / numero2);
// console.log(numero1 % numero2);

// //unitarios
// //++ incrementa 1
// numero1++;
// console.log(numero1);
// //-- decrementa 1
// numero1--;
// console.log(numero1);
// // complemento
// console.log(!boolean);
// //condicionales
// boolean = true ? console.log('si') : console.log('no');
// //relacionales
// console.log(numero1 > numero2);
// console.log(numero1 < numero2);
// console.log(numero1 == numero2); //true se parecen?
// console.log(numero1 === numero2); //false son exactamente iguales?
// console.log(numero1 != numero2); //false 
// console.log(numero1 !== numero2); //true

// //logicos
// //AND
// console.log(numero1 == 15 && numero2 == 3); //false
// console.log(numero1 == 15 && numero2 == 15); //true
// console.log(numero1 === 15 && numero2 === 15); //false
// //OR
// console.log(numero1 == 15 || numero2 == 3); //true
// console.log(numero1 == 15 || numero2 == 15); //true
// console.log(numero1 === 15 || numero2 === 15); //true
// console.log(numero1 === 3 || numero2 === 2); //false

// //EJERCICIO
// /* Pido 2 valores y muestro en consola la suma y el producto, si la suma o el producto es mayor a 20, mostrar en consola que hay un valor mayor a 20 */
// let a = Number(prompt('Ingrese un numero'))
// let b = Number(prompt('Ingrese otro numero'))
// let suma = a + b;
// let producto = a * b;
// console.log(suma);
// console.log(producto);
// suma > 20 || producto > 20 ? /*si es true*/console.log('Hay un numero mayor a 20') : /*si es false*/console.log('No hay un numero mayor a 20');

//! Agregar el punto y coma, es una muy buena  práctica

//* Soy un comentario de una sola línea

/* Hola, soy
un comentario de
varias lineas
*/

//* Práctica

//1- Crear las 3 variables, me pregunto si van a ser variables constantes o las modifico más adelante?

const x = 2;
const y = 3;
let z;

//2- Mostrar por consola la +, -, * y /
let suma= x+y;
let dif= x-y;
let prod= x*y;
let div= x/y;
console.log(suma);
console.log(dif);
console.log(prod);
console.log(div);

//3- Mostrar si son pares o no
// Si divido un numero par en 2, el resto me da 0. 
// Si divido un numero impar en 2, el resto me da 1
//5/2=2, resto=1
console.log(x%2)
console.log(y%2)
x%2 === 0 ? console.log('el numero x es par') : console.log('El numero x no es par');
y%2 == 1 ? console.log('el numero y es impar') : console.log('El numero y es par');;


//SEGUNDO EJERCICIO
//1- Asignarle el valor a z
//2- Crear una variable que se llame suma y guardar ahi la suma x+y
//3- A la variable suma, sumarle z
//4- Crear una variable que se llame prod y guardar ahi el producto x e y
//5- A la variable prod, multiplicarla por z
//6- Crear una variable dif, que guarde la diferencia entre x e y;
//7- A la variable dif, restarle z
//8- Mostrar en consola todos los resultados

z = 4;
suma = suma + z;
prod = prod * z;
dif = dif - z;

console.log(suma);
console.log(prod);
console.log(dif);
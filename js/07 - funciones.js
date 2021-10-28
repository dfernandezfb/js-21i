// // Formas de declarar una función 
// const hello = function(){
//   console.log('Hola Mundo');
// }
// hello();

// helloWorld();
// function helloWorld(){
//   console.log('Hola Mundito');
// }

// const hiWorld = () => {
//   console.log('Hola Mundazo');
// }
// hiWorld();

// function suma (pepito,menganito){
//   return pepito+menganito;
// }

// let cuenta = suma(452,200);
// console.log(cuenta);

// console.log(suma(5,6));
// console.log(suma(1,7));
// console.log(suma(2,11));
// console.log(suma(4,12));
// console.log(suma(15,16));
// console.log(suma(25,326));

// //CALLBACKS
// function $hello(nombre){
//   alert('Hola '+nombre);
// }
// function ingreso(funcion){
//   let nombre = prompt('Ingrese su nombre');
//   funcion(nombre);
// }
// ingreso($hello);

// const edades = [1, 15, 25, 4, 65, 45];

// const menores = edades.filter(edad=>edad<18);

// console.log(edades);
// console.log(menores);

// const primerMenor = edades.find(edad=>edad==25);

// console.log(primerMenor);

// const rollingStudents=['Pablo Sangenis','Martin Toro', 'Juan Villegas', 'Juan Ramallo', 'El negro Marcos', 'Juan Portillo'];

// const juanes = rollingStudents.filter(student=>student.includes('Juan'));
// console.log(juanes);

//CALCULADORA DE IMC

// imc= masa/altura^2

// let weight = Number(prompt('Indique su peso'));
// let height = Number(prompt('Indique su altura'));

// function imc (peso, altura ){
//   return peso/(altura*altura)
// }

// console.log(imc(70,1.68));

// console.log(`Tu IMC es: ${imc(weight,height).toFixed(2)}`);

//CALCULADORA

// let num1 = Number(prompt('Ingrese un numero'));
// let op = prompt('Ingrese la operación');
// let num2 = Number(prompt('Ingrese otro numero'));

// function calculadora(parametro1,parametro2,parametro3){
//   if(isNaN(parametro1) || isNaN(parametro2)){
//     return 'Ingresa números válidos'
//   }
//   switch(parametro3){
//     case '+':
//       return parametro1 + parametro2;
//     case '-':
//       return parametro1 - parametro2;
//     case 'x':
//       return parametro1 * parametro2;
//     case '/':
//       return parametro1 / parametro2;
//     default:
//       return 'Operación no válida';  
//   }
// }
// console.log(calculadora(num1, num2, op));

// PIEDRA, PAPEL O TIJERAS
// const opciones = ['piedra','papel','tijeras'];

// function bot(){
//   let jugada = Math.round(Math.random()*2); // 0-1 --> 0-2 --> 0, 1 o 2
//   return jugada;
// }
// // function player(){
// //   let jugada = prompt('Ingrese piedra, papel o tijeras');
// //   jugada=opciones.indexOf(jugada);
// //   return jugada
// // }

// // const opciones = ['piedra','papel','tijeras'];
// function jugar(player /*=1*/){
//   definicion(bot() /*0*/,player /*1*/)
// }

// function definicion(bot /*0*/, player /*1*/){
//   switch (true){
//     case bot===player:
//       testSweetAlert('EMPATE',`El bot ha jugado: ${opciones[bot]}`);
//       break;
//       case bot===0 && player===1 /*true*/:
//       testSweetAlert('GANO PLAYER',`El bot ha jugado: ${opciones[bot]}`);
//       break;
//       case bot===0 && player===2:
//       testSweetAlert('GANO EL BOT',`El bot ha jugado: ${opciones[bot]}`);
//       break;
//       case bot===1 && player===0:
//       testSweetAlert('GANO EL BOT',`El bot ha jugado: ${opciones[bot]}`);
//       break;
//       case bot===1 && player===2:
//       testSweetAlert('GANO PLAYER',`El bot ha jugado: ${opciones[bot]}`);
//       break;
//       case bot===2 && player===0:
//       testSweetAlert('GANO PLAYER',`El bot ha jugado: ${opciones[bot]}`);
//       break;
//       case bot===2 && player===1:
//       testSweetAlert('GANO EL BOT',`El bot ha jugado: ${opciones[bot]}`);
//     break;
//   }
// }
// //'piedra'

// // const numeros = [1, 2 ,3, 4, 5];

// // let cajita = numeros.forEach(numero=>console.log(numero));
// // console.log(cajita);

// // let cajita2 = numeros.map(numero => numero*2);
// // console.log(cajita2);


// function testSweetAlert(resultado,jugada){
//   Swal.fire(
//     resultado,
//     jugada,
//     'question'
//   )
// }


//CARRITO DE COMPRAS

let carrito = [];//['agua', 'cerveza', 'pan']

function agregarProducto(){
  let producto = prompt ('Ingrese un producto');
  carrito.push(producto.toLowerCase().trim()); //'  HoLa ' '  hola ' 'hola'
  console.log(carrito);
}

function mostrarCarrito(){
  if(carrito.length===0){
    alert('Todavía no has agregado productos a tu carrito');
  }else{
    alert(`Los productos de tu carrito son:\n-${carrito.join('\n-')}`)
  }
}

function buscarProducto(){
  let producto = prompt('Que producto desea saber si está en el carrito?');
  if(carrito.includes(producto.toLowerCase().trim())===true){ //'Hola'
    alert('El producto está en tu carrito');
  }else{
    alert('El producto no se encuentra en tu carrito');
  }
}

function filtrarProductos(){
  let palabraAFiltrar = prompt('Por que palabra queres filtrar tu carrito?');
  let productosFiltrados = carrito.filter(producto => producto.includes(palabraAFiltrar.toLowerCase().trim()));
  if(productosFiltrados.length===0){
    alert('Ningun producto contiene la palabra especificada');
  }else{
    alert(`Los productos que contienen la palabra especificada son: \n-${productosFiltrados.join('\n-')}`);
  }
}

function eliminarProducto(){
  let productoAEliminar = prompt('Ingrese el producto a eliminar');
  let posicion = carrito.indexOf(productoAEliminar.toLowerCase().trim());
  if(posicion===-1){
    alert('El producto que desea borrar no está en su carrito')
  }else{
    carrito.splice(posicion,1);
    alert('El producto se borró correctamente')
  }
}

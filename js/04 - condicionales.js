//CONDICIONALES
//CONDICIONALES SIMPLES
// if(condicion){
//Ejecuta esto
//}

// const anteojos = prompt('¿Trajiste los anteojos?');
// if(anteojos.toLowerCase() === 'si'){
//   alert('Letra chica: Corre hermano!')
// }

//CONDICIONALES DOBLES Y MULTIPLES CONDICIONALES
// if(condicion){
//   Ejecuta esto
// }
// else{
//   Ejecuta esto otro
// }
// const anteojos = prompt('¿Trajiste los anteojos?');
// if(anteojos.toLowerCase() !== 'si' && anteojos.toLowerCase()!=='no'){
//   alert('No es una respuesta válida, contesta si o no')
// }else{
//   if(anteojos.toLowerCase() === 'si'){
//     alert('Letra chica: Corre hermano!')
//   }
// }

// const anteojos = prompt('¿Trajiste los anteojos?');
// if(anteojos.toLowerCase() !== 'si' && anteojos.toLowerCase()!=='no'){
//   alert('No es una respuesta válida, contesta si o no')
// }else if(anteojos.toLowerCase() === 'si')
// {
//   alert('Letra chica: Corre hermano!')
// }



//PARES E IMPARES
// let numero = Number(prompt('Ingrese un numero'));
// //x%2=0 -->PAR
// //x%2=1 -->IMPAR
// if(numero%2==0){
//   alert('El numero es par')
// }else{
//   alert('El numero no es par')
// }

//PATOVICA DE FIESTA
// let edad = prompt('Cuál es tu edad?');
// if(typeof edad == 'number'){
//   console.log('Entré');
//   if(edad>=18){
//     alert('Disfrute la fiesta');
//   }else{
//     let tutor = prompt('Tenes tutor?');
//     if(tutor.toLowerCase()=='si'){
//       alert('Disfruten la fiesta');
//     }else{
//       alert('Vaya a la casa changuito');
//     }
//   }
// }else{
//   alert('Ingrese un número válido')
// }

//PROVINCIAS COPADAS
const provincia = prompt('¿De que provincia sos?');

// if(provincia === 'Tucumán'){
//   alert('Que rico sanguche de milanesa y mirinda manzana')
// }else if( provincia ==='Córdoba'){
//   alert('Que buen fernet');
// }
// else if(provincia==='Chaco'){
//   alert('Que buen chipa');
// }else{
//   alert('Que provincia aburrida')
// }

//PROVINCIAS COPADAS CON SWITCH
switch (provincia) {
  case 'Tucuman':
    alert('Que rico sanguche de milanesa y mirinda manzana');
    break;
  case 'Cordoba':
    alert('Que buen fernet');
    break;
  default:
    console.log('entre acá');
    alert('Que provincia aburrida')
    break
}
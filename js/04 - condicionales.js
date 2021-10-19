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
// const provincia = prompt('¿De que provincia sos?');

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
// switch (provincia) {
//   case 'Tucuman':
//     alert('Que rico sanguche de milanesa y mirinda manzana');
//     break;
//   case 'Cordoba':
//     alert('Que buen fernet');
//     break;
//   default:
//     console.log('entre acá');
//     alert('Que provincia aburrida')
//     break
// }

//EJERICIOS DE REPASO

// const x = Number(prompt('Ingrese un numero')); //9
// const y = Number(prompt('Ingrese otro número')); //7

// if(x>y)
// {
//   console.log(x+y);
// }
// else if(x<y)
// {
//   console.log(y-x);
// }
// else 
// {
//   console.log(x*y);
// }

//EJERCICIO DE EDAD
// const edad = Number(prompt('Que edad tenes?')); //38
// const genero = 'masculino'
// switch(true){
//   case edad>0 && edad<10 && genero==='masculino'/*false*/:
//     alert('Elegante');
//     console.log('entre');
//   break; //sale del switch
//   case edad>=10 && edad<20:
//     alert('Los wachiturros');
//   break;
//   case edad>=20 && edad<30:
//     alert('Black eyes peas');
//   break;
//   case edad>=30 && edad<40 /*true*/:
//     alert('Backstreet boys');
//   break;
//   case edad>=40 && edad<50:
//     alert('Phil Collins');
//   break;
//   default:
//     alert('Los 60, 70 y 80 son lo mejor');
//   break;
// }

// switch(genero){
//   case 'masculino':
//     alert('M');
//   break;
//   case 'femenino':
//     alert('F');
//   break;
//   default:
//     alert('E')
//   break;
// }

//EJERCICIO DIA

// const dia = new Date().getDay(); 
// //1 si es lunes
// //2 si es martes
// //...

// switch(dia){
//   case 1:
//     console.log('Hoy es Lunes');
//   break;
//   case 2:
//     console.log('Hoy es Martes');
//   break;
//   case 3:
//     console.log('Hoy es Miercoles');
//   break;
//   case 4:
//     console.log('Hoy es Jueves');
//   break;
//   case 5:
//     console.log('Hoy es Viernes');
//   break;
//   case 6:
//     console.log('Hoy es Sabado');
//   break;
//   case 7:
//     console.log('Hoy es Domingo');
//   break;
// }
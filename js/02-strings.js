//Un simple string
console.log('Hola Mundo');
console.log("Hola Mundo");

//Escapando a tantas comillas
console.log('La persona dijo: "Hola Mundo"');
console.log("La 'persona' dijo: \"Hola Mundo\"");

//Concatenación de string
console.log("Hola "+", "+"soy "+"una "+"concatenación");
let ganador = 'Leo Messi';
// Concatenar un string con una variable
console.log('El ganador es: '+ ganador); 
//Generar un nuevo ganador
// ganador=prompt('Indique su nombre')
let premio = '$1000';
let direccion = 'San Martin 250          '
console.log('El ganador es: '+ ganador);
//Concatenación de variable en el medio de un texto
console.log('El ganador es: '+ ganador + ', y se gano un ' + premio + 'que lo tiene que pasar a retirar en: ' + direccion);

//Template literals
console.log(`El ganador es: ${ganador}, y se gano un ${premio}, que lo tiene que pasar a retirar en ${direccion}`);

//metodos utiles
console.log(direccion.toUpperCase()); //pasar a mayuscula
console.log(direccion.toLowerCase()); //pasar a minuscula
console.log(direccion.length); //ver la cantidad de caracteres (propiedad)
console.log(direccion.charAt(5));//para obtener el caracter segun la posición
console.log(direccion.substr(0,3)); //El cero es la posición inicial, y el 3 indica la cantidad de caracteres que quiero obtener desde mi posicion inicial
console.log(direccion.trim()); // Borra todos los espacios del inicio y final de la cadena
console.log(direccion.includes('San Martin')); //Devuelve un true, si encuentra la cadena especificada en la cadena direccion en este caso.

//EJERCICIO
//1. Guardamos el apellido del usuario con un prompt
//2. Utilizamos length para ver cuantos caracteres ahi
//3. Con charAt obtengo el ultimo caracter

// let lastname = prompt('Escriba su apellido'); //scheuermann
// let charLength = lastname.length; // 11
// let lastLetter = lastname.charAt(charLength - 1); //busca en la posicion 11-1=10
// console.log(lastLetter);
//0s 1c 2h 3e 4u 5e 6r 7m 8a 9n 10n

// posiciones en javascript 0f 1e 2r 3n 4a 5n 6d 7e 8z 9

//EJERCICIO 2
//1. Guardamos el nombre del usuario con un prompt
//2. Guardemos la primera letra con charAt en la posición cero
//3. Pasamos la primera letra a mayuscula con toUpperCase
//4. Concatenar el resto de la cadena con substr con la letra obtenida
let nombre = prompt('Escriba su nombre');
let firstLetter = nombre.trim().charAt(0);
firstLetter = firstLetter.toUpperCase();
let resto = nombre.trim().substr(1,nombre.length).toLowerCase() //0d 1i 2e 3g 4o 5
console.log(firstLetter + resto );

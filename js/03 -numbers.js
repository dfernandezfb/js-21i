//21.67
//Redondear numeros
let numRedondeado2 = Math.round(21.67);
console.log(numRedondeado2);
//Truncar un numero
let numRedondeado = Math.floor(21.67);
console.log(numRedondeado);

//Encontrar máximos y minimos
let maximo = Math.max(12,15,25,63,12,78);
console.log(maximo);
let minimo = Math.min(12,15,25,63,12,78);
console.log(minimo);

//Potencias y raices
let cuadrado = Math.pow(3,2);
let cubo = Math.pow(3,3);
console.log(cuadrado);
console.log(cubo);

let raiz = Math.sqrt(4) //raiz cuadrada
console.log(raiz);

//Crear un numero aleatorio
let aleatorio = Math.floor(Math.random()*10);
console.log(aleatorio);

//Parsear cadenas
let cadena = '123.25asdasd'
console.log(cadena);
let cadenaParseada = parseInt(cadena);
let cadenaParseada2 = parseFloat(cadena);
let cadenaParseada3 = Number(cadena);
console.log(cadenaParseada);//123
console.log(cadenaParseada2);//123.25
console.log(cadenaParseada3);//NaN

//Limitar numeros decimales
let numeroMolesto = 125.5956635131584321534215342;
console.log(numeroMolesto.toFixed(2));
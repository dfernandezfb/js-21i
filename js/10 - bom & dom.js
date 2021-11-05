//window.location

// console.log(window.resi);


//? Funciones del tiempo

//setInterval

// window.setInterval(/*funcion a ejecutar*/saludar,/*tiempo cada cuanto se ejecuta*/2000)

function saludar(){
  console.log('Hola Homero');
}

clearInterval(/*ID del setInterval*/) //sirve para para el llamado de la funcion, pero necesito pasarle el ID del setInterval
//setTimeout

window.setTimeout(saludar,5000)

clearTimeout(/*ID del setTimeout*/) //sirve para para el llamado de la funcion, pero necesito pasarle el ID del setTimeout
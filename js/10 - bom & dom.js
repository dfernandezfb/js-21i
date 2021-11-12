//window.location

// console.log(window.resi);


//? Funciones del tiempo

// setInterval

// let idIntervalo = window.setInterval(/*funcion a ejecutar*/saludar,/*tiempo cada cuanto se ejecuta*/2000)

// function saludar(){
//   console.log('Hola Homero');
// }
// setTimeout(function terminarSaludos(){clearInterval(idIntervalo)},10000) 

// clearInterval(/*ID del setInterval*/) //sirve para para el llamado de la funcion, pero necesito pasarle el ID del setInterval
//setTimeout

// window.setTimeout(saludar,5000)  //1000ms = 1s

// clearTimeout(/*ID del setTimeout*/) //sirve para para el llamado de la funcion, pero necesito pasarle el ID del setTimeout

// //! DOM

// console.log(document.head);
// console.log(document.body);
// console.log(document.characterSet);
// console.log(document.title);
// console.log(document.body);

// //? El DOM estructura el documento como un arbol de nodos, donde se establecen relaciones. Los nodos padres son parent Elements, los hijos son child Elements, y los hermanos son siblings Elements

// // document.body.innerHTML='<button>Hola Mundo</button>' //para ingresar codigo html en un elemento

// //!Para seleccionar los elementos
// let hipervinculo = document.getElementById('id-del-elemento');
// document.querySelector('#id-del-elemento');

// document.getElementsByClassName('clase-de-los-elementos');
// document.getElementsByTagName('etiqueta-de-los-elementos')
// document.getElementsByName('nombre-de-los-elementos')

// console.log(hipervinculo);
// // hipervinculo.innerText='Ir a la gaceta' //Modifico el texto de la etiqueta
// hipervinculo.innerHTML='<strong>Ir a la gaceta</strong>' //Modifico el HTML dentro de la etiqueta

// hipervinculo.setAttribute('class','clase-creada-en-javascript')
// console.log(hipervinculo.classList)
// hipervinculo.classList.add('clase-nueva');
// hipervinculo.classList.remove('clase-nueva');

// //!Creación de nodos


// function agregarh3(){
//   let nuevoElemento = document.createElement('h3');
//   nuevoElemento.innerText='Soy un h3 creado dinámicamente';
//   let padreDelElemento = document.querySelector('#contenedor-de-prueba');
//   padreDelElemento.appendChild(nuevoElemento);  
// }


//EJERCICIO PRÁCTICO - SECCIÖN DE COMENTARIOS
let form =document.getElementById('comments-form');
function addComment(event){
  event.preventDefault(); //prevenimos las acciones por defecto del evento

  console.log(event);
  let comment = document.querySelector('#comment-form').value;
  let removeButton = document.createElement('button');
  removeButton.innerText='X';
  removeButton.classList.add('btn','btn-danger')
  removeButton.setAttribute("onclick","removeComment(event)")

  let commentBlock = document.createElement('li');
  commentBlock.innerText = comment;
  let commentsList = document.querySelector('#comments-list');
  commentBlock.appendChild(removeButton)
  commentsList.appendChild(commentBlock);

  form.reset();
}

function removeComment(event){
  event.target.parentElement.remove();
}
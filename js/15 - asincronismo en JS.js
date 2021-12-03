//* Entendiendo al motor de JS en el navegador
// console.log('Hola');

// setTimeout(()=>{
//   console.log('Soy un metido');
// },0);

// console.log('Comisión 21i');
// console.log('Comisión 21i');
// console.log('Comisión 21i');
// console.log('Comisión 21i');
// console.log('Comisión 21i');
// console.log('Comisión 21i');
// console.log('Comisión 21i');
// console.log('Comisión 21i');
// console.log('Comisión 21i');
// console.log('Comisión 21i');
// console.log('Comisión 21i');
// console.log('Comisión 21i');


//* PROMESAS

// const promesa = new Promise((resolve, reject)=>{
//   const numero = Math.random();
//   setTimeout(()=>{
//     numero < 0.5 ?
//     resolve(numero)
//     :
//     reject(new Error('El numero no es menor que 0.5'))
//   },5000)
// })

// promesa.then(numero=>console.log(numero)).catch(error=>console.log(error));

//* ASYNC - AWAIT
// const asincrona = async () =>{
//   try {
//     let resultado = await promesa;
//     console.log(resultado);
    
//   } catch (error) {
//     console.log(error);
//   }

// }

// asincrona();

//* FETCH

let url = 'https://rickandmortyapi.com/api'

const getData = async() =>{
  try {
    const numero = Math.floor(Math.random()*20);
    const response = await fetch(url + '/character/' + numero);
    const data = await response.json(); //? .json() es un metodo propio del objeto Response
    console.log(data);
    let card = document.createElement('div');
      card.innerHTML= `
      <div class="card" style="width: 18rem;">
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">status: ${data.status}</p>
        </div>
      </div>
      `;
      document.body.classList.add('d-flex', 'flex-wrap')
      document.body.appendChild(card);
    // const personajes = data.results;
    // personajes.forEach(personaje=>{
    //   let card = document.createElement('div');
    //   card.innerHTML= `
    //   <div class="card" style="width: 18rem;">
    //     <img src="${personaje.image}" class="card-img-top" alt="...">
    //     <div class="card-body">
    //       <h5 class="card-title">${personaje.name}</h5>
    //       <p class="card-text">status: ${personaje.status}</p>
    //     </div>
    //   </div>
    //   `;
    //   document.body.classList.add('d-flex', 'flex-wrap')
    //   document.body.appendChild(card);
    // })
  } catch (error) {
    console.log(error);
  }
}

getData();
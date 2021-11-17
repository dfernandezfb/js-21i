const persona = {
  nombre:'Diego',
  edad:26,
  apellido:'Fernández'
}

let personaDevueltaDesdeUnServidor = JSON.stringify(persona);
console.log(personaDevueltaDesdeUnServidor);

let personaLista = JSON.parse(personaDevueltaDesdeUnServidor)

console.log(personaLista);

//! LOCAL STORAGE

localStorage.setItem('nombre','Diego Fernández');
localStorage.setItem('nombre2','Roman Gasparini');
localStorage.setItem('nombre3','Pablo Sangenis');

console.log(localStorage.getItem('nombre'));

localStorage.removeItem('nombre');

console.log(localStorage.getItem('nombre'));

localStorage.clear();

localStorage.setItem('persona',JSON.stringify(persona));
console.log(JSON.parse(localStorage.getItem('persona')));
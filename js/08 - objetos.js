let alumno = {
  nombre:'Emmanuel',
  apellido: 'Sosa',
  edad: 39,
  hobbies: ['futbol','programacion']
}
//Acceder a las propiedades del objeto
console.log(`La edad del alumno es:${alumno.edad}`);
console.log(`La edad del alumno es:${alumno['edad']}`);

//Modificar propiedades del objeto
alumno.nombre = 'Emanuel';
alumno['edad'] = 38;

console.log(`El nombre del alumno es: ${alumno.nombre}`);
console.log(`La edad del alumno es: ${alumno['edad']}`);

//Agregar propiedades

alumno.provincia = 'Tucumán';
console.log(alumno.provincia);

console.log(alumno);
/*alumno = {
  nombre:'Emmanuel',
  apellido: 'Sosa',
  edad: 39,
  hobbies: ['futbol','programacion'],
  provincia: 'Tucumán'
}*/

//Borrar propiedades del objeto
delete alumno.provincia;

console.log(alumno.provincia);

let losTipitos = [{nombre:'Campanas en la noche', duración:3.50},{nombre:'Silencio', duracion:2.25}]
let autosFiat = [{nombre:'Palio', modelo:2011, sigueEnVenta:true},{nombre:'Punto', modelo:2015, sigueEnVenta:true}]

console.log(autosFiat);

//EJERCICIO PERSONA

let persona = {
  nombre: 'Diego',
  edad: 25,
  dni: 40526321,
  domicilio: 'San Miguel de Tucumán',
  hijos: 0,
  profesion: ['estudiante de ingenieria','backend developer'],
  saludar: function(){
    alert('Buenas noches, mi nombre es ' + this.nombre)
  },
  listar: function (){
    alert(`Me llamo ${this.nombre}, tengo ${this.edad} años, y vivo en ${this.domicilio}`);
  }
}

// persona.listar();

	
let products = [
  { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
  { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
  { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
];
console.log(products[2].categories[0]);


//EJERCICIO DE PELICULAS

let peliculas = [
  {
    titulo: 'El club de la pelea',
    genero: 'Ficción',
    año: 1995,
    sinopsis: 'Unos locazos que les encanta hacerse re cagar',
    mostrarDatos: function(){
      console.log(`
      Título: ${this.titulo} \n
      Género: ${this.genero} \n
      Año: ${this.año} \n
      Sinopsis: ${this.sinopsis}`)
    }
  },
  {
    titulo: '101 dalmatas',
    genero: 'Infantil',
    año: 1999,
    sinopsis: 'Unos caschi que los quieren hacer abrigo',
    mostrarDatos: function(){
      console.log(`
      Título: ${this.titulo} \n
      Género: ${this.genero} \n
      Año: ${this.año} \n
      Sinopsis: ${this.sinopsis}`)
    }
  },
  {
    titulo: '¿Donde están las rubias',
    genero: 'Comedia',
    año: 2002,
    sinopsis: 'Dos polizontes vestidos de rubias',
    mostrarDatos: function(){
      console.log(`
      Título: ${this.titulo} \n
      Género: ${this.genero} \n
      Año: ${this.año} \n
      Sinopsis: ${this.sinopsis}`)
    }
  }
]
// peliculas[0].mostrarDatos();
// peliculas[1].mostrarDatos();
// peliculas[2].mostrarDatos();

for(let i=0; i<peliculas.length;i++){
  peliculas[i].mostrarDatos();
}

peliculas.forEach(pelicula=>{
  pelicula.mostrarDatos();
})

for (pelicula of peliculas){
  pelicula.mostrarDatos();
}

for ( let dato in peliculas[0]){ //'string'
  console.log(`${dato}:${peliculas[0][dato]}`) 
}

function Alumno (nombre, edad, curso){
  this.name = nombre;
  this.age = edad;
  this.course = curso
}

let oscar = new Alumno('Oscar',30,'Fullstack');
let pablo = new Alumno('Pablo',45, 'Fullstack');
let fulano = new Alumno('Fulano', 20, 'Marketing');
 
let alumnos=[oscar, pablo, fulano];

console.log(oscar);
console.log(pablo);
console.log(fulano);

class Provincia{
  constructor(nombre, habitantes, montañas){
    this.name=nombre;
    this.people = habitantes;
    this.mountain = montañas
  }
}


let tucuman = new Provincia('Tucuman', 1600000, true);
let cordoba = new Provincia ('Cordoba',2500000, true);

console.log(tucuman==cordoba);
console.log(tucuman===cordoba);


console.log(tucuman);
console.log(cordoba);

let chubut = new Object;
chubut.name = 'Chubut';
chubut.people=500000;
chubut.mountain=false;

console.log(chubut);

let cadena = new String('Hola Mundo');
console.log(cadena);







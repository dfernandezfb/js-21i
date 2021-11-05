// //REPASO

// // let personaje = {
// //   nombre: 'Ironman',
// //   superPoder: ['Armadura','Tiene mucha plata'],
// //   pareja:{
// //     nombre:'Peppers',
// //     tieneSuperPoderes:false,
// //   },
// //   pertenece: 'Avengers',
// //   creador: 'Tony Stark',
// //   actor:'Robert Downey JR',

// //   volar: function(){
// //     console.log('Estoy volando');
// //   },
// //   tiraRayoLaser:function(){
// //     console.log('pium');
// //   }
// // }

// // console.log(personaje.nombre); // 'Ironman'

// // console.log(personaje.pareja); 
// // /*
// // {
// //   nombre:'Peppers',
// //   tieneSuperPoderes:false
// // }
// // */ 
// // console.log(personaje.pareja.nombre); // 'Peppers'

// // let parejaDeIronman = personaje.pareja.nombre;

// // personaje.tiraRayoLaser();

// // personaje.pareja.tieneSuperPoderes = true;

// // console.log(personaje);

// // function Personaje(nombre,actor,pertenece){
// //   this.nombre = nombre;
// //   this.actor = actor;
// //   this.pertenece = pertenece;
// // }

// // let ironman = new Personaje('Ironman','Robert Jr', 'Marvel');
// // let superman = new Personaje ('Superman', 'Henry Cavill', 'DC');

// // console.log(ironman);
// // console.log(superman);

// class Personaje{ //CLASE
//   constructor(nombre, actor, pertenece){
//     this.nombre = nombre;
//     this.nombreDeActor = actor; //CAMEL CASE
//     this.pertenece = pertenece;
//   }
// }

// let ironman = new Personaje('Ironman','Robert Jr', 'Marvel'); //OBJETOS INSTANCIADOS
// let superman = new Personaje ('Superman', 'Henry Cavill', 'DC'); //INSTANCIA DE LA CLASE

// // SETTERS Y GETTERS: propiedades predefinidas de los objetos que me sirven para obtener datos (get) y asignar un valor a un propiedad ya existente o no (set) 

// let casa = {
//   direccion: 'San Martin 250',
//   color:'uva',

//   get obtenerColor(){
//     return this.color
//   },

//   set agregarColorTecho(color){
//     this.colorTecho = color
//   }
// }

// console.log(casa.obtenerColor);

// casa.agregarColorTecho = 'verde';

// console.log(casa);


// //POO

// //Clases --> un molde

// class Persona{    // UPPER CAMEL CASE
//   constructor(nombre, edad, nacionalidad){
//     this.nombre=nombre;
//     this.edad=edad;
//     this.nacionalidad=nacionalidad;
//   }

//   saludar(){
//     console.log(`Hola, soy ${this.nombre}`);
//   }

// } 

// let diego = new Persona('Diego', 25, 'Argentina');
// let marcos = new Persona('Marcos', 30, 'Argentina');
// let fernanda = new Persona('Fernanda', 28, 'Argentina');
// let pablo = new Persona('Pablo', 40, 'Argentina');

// console.log(diego);
// console.log(marcos);
// console.log(fernanda);
// console.log(pablo);

// diego.saludar()
// marcos.saludar()
// fernanda.saludar()
// pablo.saludar()

// //HERENCIA

// class Mentor extends Persona{
//   constructor(nombre, edad, nacionalidad, comision, curso){
//     super(nombre,edad,nacionalidad);
//     this.comision=comision;
//     this.curso=curso;
//   }
// }

// class Alumno extends Persona{
//   constructor(nombre,edad, nacionalidad, disponibilidad){
//     super(nombre,edad,nacionalidad);
//     this.disponibilidad=disponibilidad;
//   }
//   saludar(){
//     console.log('Hola, soy el alumno ' + this.nombre);
//   }
// }


// let roman = new Mentor ('Roman', 26, 'Argentina', '21i','Fullstack');

// console.log(roman);

// roman.saludar();

// let german = new Alumno('German', 25, 'Argentina','Todo el día');

// console.log(german);

// german.saludar()

// let cadena = new String('Hola Mundo')
// console.log(cadena);


//EJERCICIO CUENTA BANCARIA

// class Cuenta {
//   constructor(titular, numero, alias){
//     this.titular = titular;
//     this.saldo = 0;
//     this.numero = numero;
//     this.alias = alias;
//   }
//   ingresar(monto){
//     if(monto<=0){
//       alert('El monto no es válido');
//     }else{
//       this.saldo=this.saldo + monto;
//       this.informar();
//     }
//   }
//   extraer(monto){
//     if(monto<=0){
//       alert('El monto no es válido');
//     }else if(monto<=this.saldo){
//       this.saldo=this.saldo-monto;
//       this.informar();
//     }else{
//       alert('Saldo insuficiente, espera el aguinaldo');
//     }
//   }
//   informar(){
//     alert(`La cuenta ${this.numero} del titular ${this.titular} tiene un saldo de ${this.saldo}`)
//   }
// }

// let diego = new Cuenta('Diego',354354354,'eldiegote');

// diego.ingresar(50000)
// diego.extraer(60000)

//EJERCICIO LISTA DE LIBROS

class Lista{
  constructor(dueño){
    this.dueño=dueño;
    this.librosYaLeidos=[];
    this.librosNoLeidos=[];
    this.siguienteLibro={};
    this.libroActual={};
    this.ultimoLibro={};
    this.libros=[];
  }
  agregarLibro(libro){
    this.libros.push(libro);
    if(libro.leido){   // es lo mismo que utilizar libro.leido == true
      this.librosYaLeidos.push(libro);
    }else{
      this.librosNoLeidos.push(libro);
    }
  }
  empezarLibro(nombreLibro){
    let libroQueCoincida = this.libros.find(libro=>libro.titulo===nombreLibro);
    if(!libroQueCoincida){
      console.log('Ese libro no es está en tu lista');
    }else{
      this.libroActual= libroQueCoincida;
    }
  }
  buscarLibrosPorGenero(genero){
    let librosQueCoincidan = this.libros.filter(libro=>libro.genero===genero);
    if(librosQueCoincidan.length===0){
      console.log('No tengo libros de ese genero');
    }else{
      console.log(librosQueCoincidan);
    }
  }
  finalizarLibro(){
    this.ultimoLibro=this.libroActual;
    this.libroActual=null;
    this.librosYaLeidos.push(this.ultimoLibro);
    let posicionLibroASacar = this.librosNoLeidos.indexOf(this.ultimoLibro)
    this.librosNoLeidos.splice(posicionLibroASacar,1);
  }
}
//
class Libro{
  constructor(titulo,genero,autor,leido){
    this.titulo=titulo;
    this.genero=genero;
    this.autor=autor;
    this.leido=leido;
  }
}

let padreRicoPadrePobre = new Libro('Padre rico, padre pobre', 'Finanzas', 'Robert Kiyosaki', false);
let elPrincipito = new Libro('El Principito', 'Infantil', 'Anthony', false);
let elArteDeLaGuerra = new Libro('El arte de la guerra', 'Infantil', 'sun', false);
let laMuerteVisitaAlDentista = new Libro('La muerte visita al dentista', 'Policial', 'Agatha Christie', false);

let diego = new Lista('Diego');

diego.agregarLibro(padreRicoPadrePobre);
diego.agregarLibro(elPrincipito);
diego.agregarLibro(elArteDeLaGuerra);
diego.agregarLibro(laMuerteVisitaAlDentista);

diego.empezarLibro('El Principito');

console.log(diego);

//!TERMINADO
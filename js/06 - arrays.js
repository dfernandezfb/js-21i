let rollingStudents = ['Pablo', 'Emma', 'Oscar'];
console.log(rollingStudents);
rollingStudents[2]= 'Juan';
console.log(rollingStudents);

// const days= ['Lunes', 'Martes','Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

// for(let i=0; i<days.length; i++){
//   console.log(days[i]);
// }



// console.log(days[0]);
// console.log(days[1]);
// console.log(days[2]);
// console.log(days[3]);
// console.log(days[4]);
// console.log(days[5]);
// console.log(days[6]);

rollingStudents.push('Martin')
console.log(rollingStudents);

let lastStudent= rollingStudents.pop();
console.log(rollingStudents);
console.log(lastStudent);

rollingStudents.unshift('Camila');
console.log(rollingStudents);

let firstStudent = rollingStudents.shift();
console.log(rollingStudents);
console.log(firstStudent);

let emmaPosition = rollingStudents.indexOf('Emma');
console.log(emmaPosition);

rollingStudents.reverse();
console.log(rollingStudents);

const rollingStudents2 = ['Marcos', 'Sergio'];

const rollingStudentsFull = rollingStudents.concat(rollingStudents2);
console.log(rollingStudentsFull);

console.log(rollingStudentsFull.includes('Pablo'));
console.log(rollingStudentsFull.includes('Camila'));

console.log(rollingStudentsFull.join());
console.log(rollingStudentsFull.join(' - ')); // 'Juan - Emma - Pablo - Marcos - Sergio'

// const cortados = rollingStudentsFull.splice(2) //[Pablo, Marcos, Sergio] - rollingStudentsFull = [Juan, Emma]
// console.log(rollingStudentsFull);
// console.log(cortados);


// const cortado = rollingStudentsFull.splice(2,1) //[Pablo] - rollingStudentsFull = [Juan, Emma, Marcos , Sergio]
// console.log(rollingStudentsFull);
// console.log(cortado);

// const cortado = rollingStudentsFull.splice(2,1,'German') //[Pablo] - rollingStudentsFull = [Juan, Emma, German, Marcos , Sergio]
// console.log(rollingStudentsFull);
// console.log(cortado);

const cortado = rollingStudentsFull.slice(2,) //[Pablo] - rollingStudentsFull = [Juan, Emma, Pablo, Marcos , Sergio]
console.log(rollingStudentsFull);
console.log(cortado);


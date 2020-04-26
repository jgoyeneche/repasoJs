// Objetos

// Object Literal

const persona = {
    nombre: 'Juan',
    profesión: 'Desarrollador Web',
    edad: 500
}

console.log(persona);


//Object constructor
function Tarea(nombre, urgencia){ //Dado que es un objeto/clase, se utiliza mayuscula al comienzo
    this.nombre = nombre;
    this.urgencia = urgencia;
}

// crear una nueva tarea:
const tarea1 = new Tarea('Aprender JavaScript', 'Urgente');
console.log(tarea1);
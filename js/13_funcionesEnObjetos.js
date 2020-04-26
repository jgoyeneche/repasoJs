// Métodos o funciones en un objeto

//Forma antigua
// const persona = {
//   nombre: "Juan Pablo",
//   trabajo: "Desarrollador Web",
//   edad: 500,
//   musicaRap: true,
//   mostrarInformación: function () {
//     console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
//   }
// };

//Forma nueva
const persona = {
    nombre: "Juan Pablo",
    trabajo: "Desarrollador Web",
    edad: 500,
    musicaRap: true,
    mostrarInformación() {
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
    }
};

persona.mostrarInformación();

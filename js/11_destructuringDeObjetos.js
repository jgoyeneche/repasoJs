// Destructuring de objetos

const aprendiendoJS = {
    version: {
        nueva: 'ES6+',
        anterior: 'ES5'
    },
    frameworks: ['React', 'VueJS', 'AngularJS']
}

//Destructuring es extraer valores de un objeto

console.log(aprendiendoJS)

//Version anterior
// let version = aprendiendoJS.version.nueva;

// console.log(version);

let {version, frameworks} = aprendiendoJS;
console.log(version);
console.log(frameworks);

let {nueva} = aprendiendoJS.version;
console.log(nueva);
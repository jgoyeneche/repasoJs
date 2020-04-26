// Spread operator ...

let lenguajes = ['JavaScript', 'PHP', 'Python'];
let frameworks = ['ReactJS', 'Laravel', 'Django'];

//Unir los arreglos en un 1 solo

// let combinacion = lenguajes.concat(frameworks);

let combinacion = [...lenguajes,...frameworks];

console.log(combinacion);

let [cualquiera] = lenguajes;
console.log(cualquiera);

function suma(a,b,c){
    console.log(a+b+c);
}
const numeros = [1,2,3];

suma(...numeros);
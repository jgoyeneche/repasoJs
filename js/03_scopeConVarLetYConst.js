// Scope
// Con var, el scope es global

// var musica = 'Rock';

// if(musica){
//     var musica = 'Grunge';
//     console.log('dentro del if: ', musica);
// }
// console.log('Fuera del IF ',musica);
 
// scope con let
// Con let y const el scope es dentro de las llaves

let musica = 'Rock';

if(musica){
    let musica = 'Grunge';
    console.log('dentro del if: ', musica);
}
console.log('Fuera del IF: ',musica);
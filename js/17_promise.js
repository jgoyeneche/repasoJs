// Promises

const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() => {
        let descuento = true;
        if(descuento){
            resolve('Descuento aplicado!');
        }
        reject('No se pudo adplicar el descuento')
    }, 3000);
});

aplicarDescuento.then(resultado => {
 console.log(resultado);
}).catch(error => {
    console.log(error);
});


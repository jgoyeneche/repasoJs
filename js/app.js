// Promises con Ajax

const descargarUsuarios = cantidad => new Promise((resolve, reject)=>{
    // pasar la cantidad a la api
    const api=`https://randomuser.me/api/?results=${cantidad}&nat=us`;
 
     //Llamado a Ajax
     const xhr = new XMLHttpRequest();
 
     //Abrir la conexión
     xhr.open('GET', api, true);
 
     //On load
     xhr.onload = () => {
         if(xhr.status === 200){
             resolve(JSON.parse(xhr.responseText).results); 
         } else{
             reject(Error(xhr.statusText));
         }
     }
 
     //Opcional (on error)
     xhr.onerror = (error) => reject(error);
     
     //Enviar
     xhr.send();
 });

 descargarUsuarios(20).then(
     miembros => console.log(miembros),
     error => console.error(
         new Error('Huboi un error: ' + error)
     )
 )
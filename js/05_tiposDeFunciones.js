// creando una función

//function declaration  -- Si llamas la función declarada antes de la declaración, funcionará igual porque JS reconoce las funcionaes declaradas antes de correr el código.
function saludar(nombre){
    console.log('Bienvenido '+ nombre);
}

saludar('Juan');

//function expression

const cliente = function(nombreCliente){
    console.log('Mostrando datos del cliente: '+nombreCliente);
}
cliente('Juan');
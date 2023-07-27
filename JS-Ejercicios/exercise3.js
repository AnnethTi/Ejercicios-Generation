// Exercise #3 (sugerencia reduce()) 

// Write a program to compute the sum and product (multiplication) of an array of numbers. 
// Print out the sum and the product. 

// Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24. 


const numeros = [1, 2, 3, 4];

function sumaArray(array){
    let resultado = 0;
    for (let i = 0; i < array.length; i++) resultado+= array[i];
    return resultado;
}

function productoArray(array){
    let resultado = 1;
    for (let i = 0; i < array.length; i++) {
        resultado *= array[i];
    }
    return resultado;
}



function imprimirResultados(){
    console.log('La suma de los numeros es: ' + sumaArray(numeros))
    console.log('El producto de los numeros es: ' + productoArray(numeros))
}

imprimirResultados();



//Funciones utilizando el metodo reduce
function sumaArrayWithReduce(array){
    const resultado = array.reduce(function(acumulador, numero) {
    return acumulador + numero;
    }, 0);    
    return resultado;
}
    
function productoArrayWithReduce(array){
    const resultado = array.reduce(function(acumulador, numero) {
        return acumulador * numero;
    }, 1); // este 1 es el valor inicial del acumulador 
    return resultado;
}
      

function imprimirResultados(){
    console.log('La suma de los numeros es: ' + sumaArrayWithReduce(numeros))
    console.log('El producto de los numeros es: ' + productoArrayWithReduce(numeros))
}

imprimirResultados();
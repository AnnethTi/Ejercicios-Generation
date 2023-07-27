// Exercise #2 (sugerencia map()) 
// Write a function that: 
// Takes in an array of numbers. 
// Doubles the value of each number in the array. 
// Prints out the new updated array. 
// Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10] 

// !! Tomar en cuenta que estas funciones nos retorna un array nuevo
//      SIN  modificar el original que pasamos como parametro

const numeros = [1, 2, 4, 5];

function arrayDouble(array){
    const arrDouble = [];
    for (let i = 0; i < array.length; i++) {
        arrDouble[i] = array[i] * 2;
    }
    return arrDouble;
}

console.log(arrayDouble(numeros));


// Aqui se utiliza el metodo map()

function arrayDoubleWithMap(array){
   const arrayDouble = array.map(function(numero) {
        return numero * 2;
    });
    return arrayDouble;
}
    

console.log(arrayDoubleWithMap(numeros)); 


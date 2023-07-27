// Exercise # 6 
// Realizar una función que realice el algoritmo de burbuja. 
// Entrada [3, 6, 12, 5, 100, 1 ] 
// Salida [1, 3, 5, 6, 12, 100] 

const numeros = [3, 6, 12, 5, 100, 1] ;

function ordenamientoBurbuja(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            let variableSecundaria = 0;
            if (array[j] > array[j+1]){
                variableSecundaria = array[j+1];
                array[j+1] = array[j];
                array[j] = variableSecundaria;
            }
            
        }
    }
    //return array;
}

ordenamientoBurbuja(numeros);
console.log(numeros)
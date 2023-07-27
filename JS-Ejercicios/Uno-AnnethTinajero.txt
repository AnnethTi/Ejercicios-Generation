// Exercise #1 (sugerencia: join()) 

// Copy the code below into your workspace: 

// Complete the function to print out the string: This is a sentence. 
const arr = ["This", "is", "a", "sentence."]; 

function printOutString(array) { 
  let sentence = '';
  // your code here 
  for(let i = 0; i < arr.length; i++){
    sentence+= array[i];
    sentence+= ' ';
  }
  sentence = sentence.slice(0, -1); //se elimina el ultimo espacio de la cadena
  return sentence;
} 

console.log(printOutString(arr)); 


// Funcion con el metodo join
function printOutStringWithJoin(array){
  let sentence = array.join(' ');
  return sentence;
}

console.log(printOutStringWithJoin(arr));

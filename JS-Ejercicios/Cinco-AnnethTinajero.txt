// Exercise #5 
// For each of the exercises below, assume you are starting with the following people array.  
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"]; 

// Write a command that prints out all of the people in the list. 
console.log(people);

// Write the command to remove "Dani" from the array. 
people.splice(1,1);

// Write the command to remove "Juan" from the array. 
people.splice(2,1)

// Write the command to move "Luis" to the front of the array. 
function moverElementoAlPrincipio(array, elemento) {
    const index = array.indexOf(elemento);
    array.splice(index, 1);
    array.unshift(elemento);
}
moverElementoAlPrincipio(people, 'Luis');

// Write the command to add your name to the end of the array. 
people.push('Anneth');

// Using a loop, iterate through this array and after console.log "Maria", exit from the loop. 
let palabraBuscada = 'Maria';
for (let i = 0; i < people.length; i++) {
    if (people[i] === palabraBuscada){
        console.log(people[i])
        break;
    }
}

// Write the command that gives the indexOf where "Maria" is located. 
let indexPalabra = people.indexOf(palabraBuscada);
console.log(`Index de la palabra ${palabraBuscada} es: ${indexPalabra}`);

// At the end of the exercise, there should be 4 people in the array. 
console.log(people);
console.table(people);


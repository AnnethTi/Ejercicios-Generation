// Exercise #4 (sugerencia filter() e includes()) 

let student1Courses = ['Math', 'English', 'Programming']; 

let student2Courses = ['Geography', 'Spanish', 'Programming']; 

// Create a program that loops over the 2 arrays; if there are any common courses print them out to the console. 

function palabrasRepetidas(array, arrayTwo) {
    let palabrasRepetidas = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] === arrayTwo[j]) palabrasRepetidas.push(array[i])
        }
    }
    return palabrasRepetidas;
}

console.log('Las palabras repetidas son: '+ palabrasRepetidas(student1Courses,student2Courses));



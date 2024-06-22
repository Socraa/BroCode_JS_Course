// const names = '["Plato", "Nietzsche", "Diogenes", "Aurelius"]';



// const person = {

//     "name": "Plato",
//     "age": 80,
//     "isRich": "true",
//     "hobbies": ["Speaking", "Teaching", "Lecturing"]

// };

// const people = [{
//     "name": "plato",
//     "age": 70,
//     "isRich": "true"

// },{

//     "name": "Nietzsch",
//     "age": 55,
//     "isRich": "false"

// },{

//     "name": "Diogenes",
//     "age": 81,
//     "isRich": "false"

// },{

//     "name": "Aurelius",
//     "age": 58,
//     "isRich": "true"

// }];

// // const jsonString = JSON.stringify(names);
// // console.log(jsonString);
// // Output: ["Plato","Nietzsche","Diogenes","Aurelius"] | array turns into a string

// const jsonData = JSON.parse(names);
// console.log(jsonData);
// // Output: ['Plato', 'Nietzsche', 'Diogenes', 'Aurelius'] | turns a string into an array


fetch("people.json")
    .then(response => response.json())
    .then(response => response.forEach(value => console.log(value.name)))
    .catch(error => console.error(error));
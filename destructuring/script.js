//-----Example-1-----
// Swap the value of two variables

let a = 1;
let b = 2;

[a, b] = [b, a]; //destructuring array

console.log(a); // Output: 2
console.log(b); // Output: 1

//----------------------------------------------------------------------------------------------------------------------------

//-----Example-2-----
// Swap 2 elements in an array

const color = ["red", "green", "blue", "black", "white"];

[color[0], color[3]] = ["pink", color[0]]; //destructuring array

console.log(color); // Output: ['pink', 'green', 'blue', 'red', 'white']

//----------------------------------------------------------------------------------------------------------------------------

//-----Example-3-----
// Assing array elements to variables

const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColor] = colors;

console.log(firstColor); // Output: red
console.log(secondColor); // Output: green
console.log(thirdColor); // Output: blue
console.log(extraColor); // Output: ['black', 'white']

//----------------------------------------------------------------------------------------------------------------------------

//-----Example-4-----
// Extract values from objects

const person1 = {
    firstName: "SpongeBob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

const {firstName, lastName, age, job="unemployed"} = person1; // if there is no job, then unemployed will be shown

console.log(firstName); //Output: SpongeBob
console.log(lastName); //Output: SquarePants
console.log(age); //Output: 30
console.log(job); //Output: Fry Cook

//----------------------------------------------------------------------------------------------------------------------------

//-----Example-5-----
// Destructure in function parameters

function displayPerson({firstName, lastName, age, job="unemployed"}){
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

const person1 = {
    firstName: "SpongeBob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}


displayPerson(person1);
// Output: Name: SpongeBob SquarePants
// Output: Age: 30
// Output: Job: Fry Cook

displayPerson(person2);
// Output: Name: Patrick Star
// Output: Age: 34
// Output: Job: unemployed
/*let number = [1,2,3,4,5];

let max = Math.max(...number);

console.log(max);
*/

/*
let username = "Jai Dyelle";
let letters = [...username].join("-");
console.log(letters);


let fruits = ["apple", "banana", "coconut" ];
let colors = ["red", "blue", "green"];

let colorFruits = [...fruits, ...colors];
console.log(colorFruits);
*///spread

function openFridge(...foods){
console.log(...foods);
}
function getFood(...foods){
    return foods;
}

let food1 = "siomai";
let food2 = "pizza";
let food3 = "bbq";
let food4 = "hatdog";

//openFridge(food1, food2, food3, food4);
let foods = getFood(food1, food2, food3, food4);
console.log(foods);






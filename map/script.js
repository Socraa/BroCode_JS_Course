// const num = [1,2,3,4,5];

// const squares = num.map(square);
// console.log(squares);

// function square(element){
//     return Math.pow(element, 2);
// }


let names = ["Jai", "Dyelle","Socra"];

const uppers = names.map(upper);
uppers.forEach(display);
console.log(uppers);



function upper(element){
   return element.toUpperCase();
}

function display(element){
    console.log(element);
}



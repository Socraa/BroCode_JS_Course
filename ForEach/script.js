// let num = [1,2,3,4,5];

// num.forEach(display);

// function display(element, elements){
//     console.log(element);
//     console.log(elements);
// }

let num = [1,2,3,4,5];

num.forEach(double);
num.forEach(display);


// Element, index, and array are provided 
// The first argument will be the each element of the array
// The seond will be the index of the element of the array
// The third will be the array itself
function double(element, index, array){ 
    // console.log("element: ", element, "index: ", index, "array: ", array);
    array[index] = element * 2;
}

function display(element){
    console.log(element);
}



let fruits = ["Banana","Apple","Orange","Coconut"];

fruits.forEach(toUpper);
fruits.forEach(display);

function display(element){
    console.log(element);
}

function toUpper(element, index, array){
    array[index] = element.toUpperCase();
}









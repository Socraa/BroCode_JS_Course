// //----------.firstElementChild----------

// const element = document.querySelector('#fruits');
// const firstChild = element.firstElementChild;

// firstChild.style.background = "red"; 
// // Output: apple will be red

// firstElementChild Example-2

// const ulElement = document.querySelectorAll('ul'); 

// ulElement.forEach(ulElement => {
//    const firstChild = ulElement.firstElementChild;
//    firstChild.style.background = "yellow"; 
// });


// //----------.lastElementChild----------
// const element = document.querySelectorAll('ul');

// element.forEach(element => {
//     const lastChild = element.lastElementChild;
//     lastChild.style.background = "yellow";
// })

// //----------.nextElementSibling----------

// const element = document.querySelector('#apple');
// const next = element.nextElementSibling;
// next.style.background = "yellow";
// // Output: the orange will be yellow


//----------.previousElementSibling----------
// const element = document.querySelector('#orange');
// const previous = element.previousElementSibling;
// previous.style.background = "yellow";


//----------.parentElement----------
// const element = document.querySelector('#orange');
// const parent = element.parentElement;
// parent.style.background = "yellow";


// ----------.children----------
const element = document.querySelector('#fruits');
const children = element.children; // turns into an array-like object

Array.from(children).forEach(child => {
    child.style.background = "yellow";
});






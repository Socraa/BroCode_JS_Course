// function hello(){ // this is a Function Declaration
//     console.log("Hello");
// }

// setTimeout(hello, 3000);

// setTimeout(function(){
//     console.log("Hello");
// }, 3000);

const num = [1,2,3,4,5];

const squares = num.map(function(elemnt){ // This is a Function Expression
    return Math.pow(elemnt, 3);
});

console.log(squares);
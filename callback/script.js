
// function hello(callback){

//     setTimeout(function (){
//         console.log("Hello!");
//         callback();  
//     }, 3000);
 
// }

// function goodBye(){
//     console.log("GoodBye!");   
// }

// hello(goodBye);


sum(displayConsole, 4,4);

function sum(callback, x,y){
    let result = x + y;
    callback(result);
}

function displayConsole(resulta){
    console.log(resulta);
}

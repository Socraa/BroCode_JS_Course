// function createCounter(){

//     let count = 0;

//     function increment(){ // closure
//         count++;
//         console.log("Count increased to " + count);
//     }

//     function getCount(){
//         return count;
//     }

//     return {increment,getCount}; // turning the function increment into an object
    
// }

// const counter = createCounter();

// counter.increment(); // called the function that turn into an object
// counter.increment();

// console.log(counter.getCount()); // need to use console.log sisnce its function doesn't have one


function createGame(){

    let score = 0

    function plus(plusPoints){
        score += plusPoints;
        console.log("+" + plusPoints +"pts");
    }

    function subtract(subPoints){
        score -= subPoints;
        console.log("-"+subPoints+"pts");
    
    }

    function finalPoints(){
        return score;
    }

    return {plus, subtract, finalPoints}; // turn the closure/function inside the function into an object

}


const game = createGame();

game.plus(10); // Output: +10pts
game.subtract(5); // Output: -5pts
console.log(game.finalPoints()); // Output: 5




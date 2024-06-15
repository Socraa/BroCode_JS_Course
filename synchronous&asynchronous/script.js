
// //synchronous code. Execute line by line
// console.log("Task-1");
// console.log("Task-2");
// console.log("Task-3");


// asynchronous code. Execute code at the same time
 function func1(callback){
    setTimeout(() => {

        console.log("task-1");
        callback();
    }, 3000);
}

 function func2(){
    console.log("task-2");
    console.log("task-3");
    console.log("task-4");
}

func1(func2);
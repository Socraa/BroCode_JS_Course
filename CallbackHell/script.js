function task1(callback){
    setTimeout(() =>{
        console.log("Task 1 Complete!");
        callback();
    }, 3000);
}

function task2(callback){
    console.log("Task 2 Complete!");
    callback();
}

function task3(callback){
    console.log("Task 3 Complete!");
    callback();
}

function task4(callback){
    console.log("Task 4 Complete!");
    callback();
}


//Callback Hell/Pyramid of Doom
task1(() =>{
    task2(() =>{
        task3(() =>{
            task4(() =>{
                console.log("all task Complete!");
            })
        });
    });
});

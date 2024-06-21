

function walkDog(){

    return new Promise((resolve, reject)=> {
        setTimeout(() => {

            const dogWalked = true;

            if(dogWalked){
                resolve("Walk the Fucking DOG!!"); // resolve become the value of the Promise if dogWalked is true
            }else{
                reject("WHY THE FUCK DIDN'T YOU WALK THE FUCKING DOG!!"); // reject become the value of the Promise if dogWalked is false
            }
        }, 1500);
    });
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;

            if(kitchenCleaned){
                resolve("Clean the FUCKING KITCHEN!!");
            }else{
                reject("YOU LAZY ASS BITCH!!");
            }

    
        }, 2500);
    })
}

function takeTrash(){

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const trashTaken = false;
            if (trashTaken){
                resolve("TAKE OUT THE FUCKING TRASH!!!");
            }else{
                reject("DUMB ASS LAZY ASS BITCH!!");
            }
        }, 1000);
    })
}


walkDog().then(value => {
    console.log(value); // value is the resolve function of the promise
    return cleanKitchen(); // to know that the next .then will be cleanKitchen
})
.then(value => {
    console.log(value);
    return takeTrash();
})
.then (value => {
    console.log(value);
    console.log("shut the fuck up :)");
})
.catch(error =>{ // catch if there is a reject
    console.error(error); // reject will represent error. If one fucntion is rejected, it will not continue anymore
})


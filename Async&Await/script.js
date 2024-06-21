function walkDog(){

    return new Promise((resolve, reject)=> {
        setTimeout(() => {

            const dogWalked = false;

            if(dogWalked){
                resolve("Walk the Fucking DOG!!"); 
            }else{
                reject("WHY THE FUCK DIDN'T YOU WALK THE FUCKING DOG!!"); 
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
            const trashTaken = true;
            if (trashTaken){
                resolve("TAKE OUT THE FUCKING TRASH!!!");
            }else{
                reject("DUMB ASS LAZY ASS BITCH!!");
            }
        }, 1000);
    })
}


async function doChores(){

    try{

        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeTrashResult = await takeTrash();
        console.log(takeTrashResult);
    
        console.log("hi");

    }catch(error){
        console.error(error);
    }

}

doChores();
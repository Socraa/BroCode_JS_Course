let logIn = false;
let user;
let pass;

while(!logIn){
    user = window.prompt("Enter User");
    pass = window.prompt("Enter Pass");


    if(user == "Jai" && pass == "Dyelle"){
        logIn = true;
        console.log(`Welcome ${user}!!`);
    }else{
        console.log(`Invalid User or Pass`);
    }
}
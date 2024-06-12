
//Creating a user input the easy way
//let username = window.prompt("Enter Name");
//console.log(username);

//Pro way
let username;
document.getElementById("submit").onclick = function(){
    username = document.getElementById("input1").value;
    document.getElementById("h1").textContent = `Hello ${username}`
}

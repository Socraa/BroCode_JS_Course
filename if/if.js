/*let mytext = document.getElementById("enterAge");
let sub = document.getElementById("sub");
let h3 = document.getElementById("h3");
let age;

sub.onclick = function(){
    
    age = mytext.value;
    age = Number(age);
    if(age >= 18){
        h3.textContent = `You're ${age} years old`;
    }else{
        h3.textContent = `You're not Allowed!!!!`;
  
    }
}
*/


//Ternary Operator
let age = 21;

let mess = age >= 18 ? "You're not the Father": "You're the Father";
console.log(mess);
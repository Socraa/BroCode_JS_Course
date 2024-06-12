let min = 1;
let max = 6;



document.getElementById("generate").onclick = function(){
    let randomNum = Math.trunc(Math.random() * max) + min;
    document.getElementById("number").textContent = randomNum;
}

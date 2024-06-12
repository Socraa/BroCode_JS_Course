let numm = 0;

const increase = document.getElementById("inc").onclick = function(){
    numm++;
    document.getElementById("number").textContent = numm;
}

const decrease = document.getElementById("dec").onclick = function(){
    numm--;
    document.getElementById("number").textContent = numm;
}

const resett = document.getElementById("reset").onclick = function(){
    numm = 0;
    document.getElementById("number").textContent = numm;
}
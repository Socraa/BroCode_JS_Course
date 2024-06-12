
let cir;
let radius;
const PI = 3.14159;

document.getElementById("submit1").onclick = function(){
    radius = document.getElementById("input1").value;
    radius = Number(radius);//type conversion
    cir = 2 * PI * radius;

    document.getElementById("h3").textContent = cir + "cm";
    
}
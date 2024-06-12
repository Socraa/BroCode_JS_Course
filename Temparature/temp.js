let textBox = document.getElementById("textBox");
let toFahrenheit = document.getElementById("toFahrenheit");
let toCelcius = document.getElementById("toCelcius");
let result = document.getElementById("result");
let temp;

function convert(){

    if (toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + "°F";

    }else if (toCelcius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (9/5);
        result.textContent = temp + "°C";

    }else{
        result.textContent = `Select a Fucking Unit!!`
    }

}
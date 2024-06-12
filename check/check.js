let myCheckBox = document.getElementById("myCheckBox");
let visa = document.getElementById("visaBtn");
let master = document.getElementById("masterCardBtn");
let payPal = document.getElementById("payPalBtn");
let submit = document.getElementById("mySubmit");
let payResult = document.getElementById("payResult");
let subResult = document.getElementById("subResult");

submit.onclick = function(){
    if (myCheckBox.checked){
        payResult.textContent = `You're Subscribe :)`;
    }else{
        payResult.textContent = `You're not Subscribe :(`;
    }

    if(visa.checked){
        subResult.textContent = `You're paying with Visa`;
    }else if(master.checked){
        subResult.textContent = `You're paying with MasterCard`;
    }else if(payPal.checked){
        subResult.textContent = `You're paying with Paypal`;
    }else{
        subResult.textContent = `Broke ass NIGGA`;
    }
}

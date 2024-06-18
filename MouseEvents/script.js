const myBox = document.querySelector('#myBox');

// function changeBg(){  // Simpler but less flexible
//     myBox.style.background = "yellow";
// }


// myBox.addEventListener("click", function(event){ // using anonymous fucntion
//     event.target.style.background = "red";
//     event.target.textContent = "BITCH!!! 😡";
// });

myBox.addEventListener("click", event => { // using arrow fucntion
    event.target.style.background = "red";
    event.target.textContent = "BITCH!!! 😡";
})

myBox.addEventListener("mouseover", event => {
    event.target.style.background = "linear-gradient(180deg, darkcyan, cyan, yellow)";
    event.target.textContent = "STFU!!";
})

myBox.addEventListener("mouseout", event => {
    event.target.style.background = "linear-gradient(180deg, darkcyan, darkcyan, cyan)";
    event.target.textContent = "Click Me 😁";

})
// const myButton = document.querySelector('#myButton');

// myButton.addEventListener("mouseover",event =>{
//     event.target.classList.toggle("hover");  // the css ".enabled" will be added to the css of myButton
// });

// myButton.addEventListener("mouseout",event =>{ // event represent the action(mouseout) and the target represent myButton
//     event.target.classList.toggle("hover"); // the css ".hover" will be removed from the myButton
// });


// myButton.classList.add("enabled");


// myButton.addEventListener("click", event => {
//     event.target.classList.replace("enabled", "disabled"); // replace the .enabled css with .disabled css
// })


// myButton.classList.add("enabled");

// myButton.addEventListener("click", event => {

//     if(event.target.classList.contains("enabled")){
//         event.target.classList.replace("enabled", "disabled");
//     }else{
//         event.target.textContent += "😁";
//     }
// })


//NodeList shit

let myButtons = document.querySelectorAll('.myButtons');


myButtons.forEach(button =>{
    button.classList.add("enabled");
});

myButtons.forEach(button =>{
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});

myButtons.forEach(button =>{
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});

myButtons.forEach(button =>{
    button.addEventListener("click", event =>{

        if(event.target.classList.contains("disabled")){
            event.target.textContent += "😁";
        }else{
            event.target.classList.replace("enabled", "disabled");
        }

    })
})


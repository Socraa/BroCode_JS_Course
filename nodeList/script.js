let myButtons = document.querySelectorAll('.myButtons');
const buttons = document.querySelector('#buttons'); // div where my bottons are



// Add HTML/CSS Properties

myButtons.forEach(element =>{
    element.style.background = "yellow";
    element.textContent += "";
});

// MouseOver + MouseOut event Listener

myButtons.forEach(button => {
    button.addEventListener("mouseover",event => {
        event.target.style.background = "cyan";
    })
});

myButtons.forEach(button => {
    button.addEventListener("mouseout",event => {
        event.target.style.background = "darkcyan";
    })
});


// Add an Element
const newButton = document.createElement('button');
newButton.textContent = "Button 5";
// newButton.classList = "myButtons"; // brocode style | setting the newbutton's class as myButtons
newButton.classList.add("myButtons"); // GPT style | setting the newbutton's class as myButtons
buttons.appendChild(newButton);

myButtons = document.querySelectorAll('.myButtons'); // updates myButton since nodeList is not going to automatically update itself
console.log(myButtons);


myButtons.forEach(button =>{
    button.addEventListener('click', event =>{
        event.target.remove(button);
        myButtons = document.querySelectorAll('.myButtons'); // updates myButton removed the button
        console.log(myButtons);
    })
});








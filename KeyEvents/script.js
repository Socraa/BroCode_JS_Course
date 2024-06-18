const myBox = document.querySelector('#myBox');
const moveAmount = 10;
let y = 0;
let x = 0;

document.addEventListener("keyup", event =>{
    myBox.textContent = "🙂";
    myBox.style.background = "linear-gradient(180deg, darkcyan, cyan)";
});

document.addEventListener("keydown", event => {
    myBox.textContent = "😎";
    myBox.style.background = "linear-gradient(180deg, darkred, red)";
});

document.addEventListener("keydown", event => {

    event.preventDefault;

    if(event.key.startsWith("Arrow")){
        

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            
            case "ArrowDown":
                y += moveAmount;
                break;

            case "ArrowLeft":
                x -= moveAmount;
                break;

            case "ArrowRight":
                x += moveAmount;
                break;    
            
        }
        myBox.style.top = y + "px";
        myBox.style.left = x + "px";
    }
});


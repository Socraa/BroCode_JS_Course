const username = " Jai";

const hello = document.querySelector('#hello');

hello.textContent += username === "" ? " Guess" : username;
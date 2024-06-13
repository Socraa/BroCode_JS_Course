let timerId;

function startTimer(){
    timerId = setTimeout(() => {
        console.log("started");
        window.alert("Hello");
    }, 3000);
}

function resetTimer(){
    console.log("stop");
    clearTimeout(timerId);

}
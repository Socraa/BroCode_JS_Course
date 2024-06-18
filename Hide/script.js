const hide = document.querySelector('#hide');
const picHide = document.querySelector('#picHide');

hide.addEventListener("click", event => {

    // const currentDisplay = window.getComputedStyle(picHide).display; // Retrieve the computed style of the 'picHide' element
    // if (currentDisplay === "flex") {
    //     picHide.style.display = "none";
    //     hide.textContent = "Show";
    // } else {
    //     picHide.style.display = "flex";
    //     hide.textContent = "Hide";
    // }


    if (picHide.style.display === "none"){
        picHide.style.display = "flex";
        hide.textContent = "Hide";
    }else{
        picHide.style.display = "none";
        hide.textContent = "Show";
    }

})
const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId = null;


document.addEventListener("DOMContentLoaded", initializeSlide);


function initializeSlide(){

    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 3000);
    }
}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;

    }else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");

}

function resetInterval() { // clears the setInvertal
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 3000);
}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
    resetInterval(); // if prevSlide is click, it will reset the timer of the setInterval
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
    resetInterval();
}
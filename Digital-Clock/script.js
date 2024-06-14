function updateClock(){

    const now = new Date();
    let hours = now.getHours().toString().padStart(2,0);
    let mid = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // it is like saying if hours's modulus is 0 then return 12 instead of modulus
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds}${mid}`;
    document.getElementById("clock").textContent = timeString;

}

updateClock();
setInterval(updateClock, 1000);
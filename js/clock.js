const clock = document.querySelector("h2#clock");

function getTime() {
clock.innerText = new Date().toLocaleTimeString('it-IT');    
}

getTime();
setInterval(getTime, 1000);
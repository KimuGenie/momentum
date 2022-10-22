const API_KEY = "98fbdd4545137e1bee36cd250bcf6641";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")

        weather.innerText = data.weather[0].description;
        city.innerText = data.name;
        
    });
}

function onGeoError() {
    alert("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
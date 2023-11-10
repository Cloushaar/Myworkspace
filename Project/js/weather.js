const API_KEY = "1ac080dc93439a38b46300494311e09b";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} \ ${Math.round(data.main.temp)}°`;
    });
}

function onGeoError(){
    alert("Can't find your location, Can't searching your weather!");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
const inputbox = document.querySelector('.input-box');
const searchbtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-img');
const temp = document.querySelector('.temp');
const disp = document.querySelector('.disp');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('wind-speed');
const error=document.querySelector('.location-not-found');
const weather_body=document.querySelector('.weather-body');

async function checkweather(city) {
    const api = "458cab07198369bc0379204516e6267e"; // ye meri weather map ki idi hain 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`; // ye meri api h jo mene waetehr map se li hain
    //fetch ekl function h jo muje url se data dega nikhal kr json use ek string me convert karega
`   5689
`
    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);

    if(weather_data.cod===`404`){
       error.style.display="block";
       weather_img.style.display="none";
       weather_body.style.display="none";
        
        return;
    }
    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}*C`;
    disp.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    //  windspeed.innerHTML=`${weather_data.wind.speed}`;


    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "/img/rain.png";
            break;
        case 'Clear':
            weather_img.src = "/img/clear.png";
            break;
        case 'Haze':
            weather_img.src = "/img/weather.png";
            break;
        case 'Snow':
            weather_img.src = "/img/snow.png";
            break;

        case 'Dust':
            weather_img.src = "/img/dust.jpeg";
            break;

        case 'Mist':
            weather_img.src = "/img/mist.png";
            break;
    }

}
searchbtn.addEventListener('click', () => {
    checkweather(inputbox.value);
})
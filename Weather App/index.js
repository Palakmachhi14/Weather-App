var inputvalue = document.querySelector('#cityname')
var btn = document.querySelector('#Add')
var city = document.querySelector('#city')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')

var apik= "b53f1939ee69b88c22479cf390fd88c8" 

function convertion(val)
{
    return (val -273).toFixed(3)
}


btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            var nameval = data['name']; 
            var description = data['weather'][0]['description'];
            var temperature = data['main']['temp'];
            var windspeed = data['wind']['speed'];

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${convertion(temperature)}</span>`;
            descrip.innerHTML = `Sky Conditions: <span>${description}</span>`;
            wind.innerHTML = `Wind Speed: <span>${windspeed}</span>`;

        })
        .catch(ErrorEvent => alert('You entered the wrong city name or there was an issue with the network'));
});

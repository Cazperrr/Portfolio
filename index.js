window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("navbar").style.boxShadow = "0 8px 6px -6px #000";
    } else {
        document.getElementById("navbar").style.boxShadow = "none";
    }
});

const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "63a8a3fd2de25d3d346a29994d7cbe3d";
const city = "Gothenburg";
const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric&lang=sv`;

//test: https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=63a8a3fd2de25d3d346a29994d7cbe3d&units=metric&lang=sv

fetch(url)
    .then((response) => {
        if (!response.ok) {
            const weatherBox = document.querySelector('.weather-box');
            weatherBox.style.display = 'none';

            throw new Error("Nätverksrespons var inte ok");
        }
        return response.json();
    })
    .then((data) => {
        const temprature = data.main.temp;
        const location = data.name;
        const image = document.querySelector('.weather-box img');
        document.getElementById("weatherInfo").innerHTML = `${location} ${temprature}°C.`;

        switch (data.weather[0].main) {
            case 'Clear':
                image.src = 'images/Clear.png';
                break;

            case 'Clouds':
                image.src = 'images/Cloud.png';
                break;

            case 'Mist':
                image.src = 'images/Mist.png';
                break;

            case 'Rain':
                image.src = 'images/Rain.png';
                break;

            case 'Snow':
                image.src = 'images/Snow.png';
                break;

            default:
                image.src = '';
        }
    })
    .catch((error) => {
        console.error("Det gick inte att hämta väderdata:", error)
    });

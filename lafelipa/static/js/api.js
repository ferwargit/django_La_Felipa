const API_KEY = "3ddea520b50e1e9f35af8b57e4807dbe";
const LOCATIONS = {
	LA_CUMBRECITA: {
		lat: -31.898333333333,
		lon: -64.773333333333,
	},
};
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${LOCATIONS.LA_CUMBRECITA.lat}&lon=${LOCATIONS.LA_CUMBRECITA.lon}&appid=${API_KEY}&units=metric&lang=sp`;

const iconClassMap = {
	"01d": "wi wi-owm-day-800",
	"01n": "wi wi-owm-night-800",
	"02d": "wi wi-owm-801",
	"02n": "wi wi-owm-night-801",
	"03d": "wi wi-owm-day-802",
	"03n": "wi wi-owm-night-802",
	"04d": "wi wi-owm-day-803",
	"04n": "wi wi-owm-night-803",
	"09d": "wi wi-owm-day-501",
	"09n": "wi wi-owm-night-501",
	"10d": "wi wi-owm-day-501",
	"10n": "wi wi-owm-night-501",
	"11d": "wi wi-owm-day-200",
	"11n": "wi wi-owm-night-200",
	"13d": "wi wi-owm-day-600",
	"13n": "wi wi-owm-night-600",
	"50d": "wi wi-owm-day-741",
	"50n": "wi wi-owm-night-741",
};

const icon = document.querySelector("#icon");
const jsonUrl = document.body.dataset.jsonUrl;

async function getWeather() {
	try {
		const response = await fetch(url);
		// const response = await fetch(jsonUrl);
		// const response = await fetch("https://arielnieto1975.github.io/Cabanas_La_Felipa/json/data.json");
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		icon.className = iconClassMap[data.weather[0].icon];
		document.querySelector(".temp").innerHTML =
			Math.round(data.main.temp) + " °C";
	} catch (error) {
		console.error(error);
	}
}

getWeather();

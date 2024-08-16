const url = 'https://weather-api138.p.rapidapi.com/weather?city_name=Fergana';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '548e2ea598mshfb7a4fc6d85a2bdp1f5120jsn3ffd65318da0',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};

async function fetchWeather() {
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

fetchWeather();


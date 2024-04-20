const cityId = '5884098'; // City ID for Barrie, Ontario
const apiKey = 'a9b59a5651bab743e2766bdc013ab8da'; // Your OpenWeatherMap API key

const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=${5884098}&appid=${a9b59a5651bab743e2766bdc013ab8da}`;

// Make a GET request to the OpenWeatherMap API
fetch(apiUrl)
    .then(response => {
        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        return response.json();
    })
    .then(data => {
        // Extract relevant weather data
        const temperature = data.list[0].main.temp;
        const description = data.list[0].weather[0].description;

        // Display weather data on the page
        const weatherDiv = document.getElementById('weatherData');
        weatherDiv.innerHTML = `
            <h2>Current Weather</h2>
            <p>Temperature: ${temperature.toFixed(1)}°C</p>
            <p>Description: ${description}</p>
        `;
    })
    .catch(error => {
        // Handle any errors
        console.error('Error fetching weather forecast:', error);
    });

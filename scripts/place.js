// currentyear 
const currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = new Date().getFullYear();

// lastModified
const lastModifiedElement = document.getElementById("lastModified");
const date = new Date(document.lastModified);

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
};

lastModifiedElement.textContent = date.toLocaleDateString('en-US', options);


// calculateWindChill
function calculateWindChill(temperature, windSpeed) {
    return (
        13.12 +
        (0.6215 * temperature) -
        (11.37 * Math.pow(windSpeed, 0.16)) +
        (0.3965 * temperature * Math.pow(windSpeed, 0.16))
    ).toFixed(1);
}

// Static values
const temperature = 31;
const windSpeed = 5;

// Display the values
document.getElementById("temperature").textContent = temperature;
document.getElementById("wind-speed").textContent = windSpeed;

// Only calculate wind chill when conditions are met
if (temperature <= 10 && windSpeed > 4.8) {
    document.getElementById("wind-chill").textContent =
        `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    document.getElementById("wind-chill").textContent = "N/A";
}
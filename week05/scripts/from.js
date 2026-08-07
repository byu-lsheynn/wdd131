// --- GET DATES for FOOTER ---
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

// Product Array
const products = [
    { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "Power Converter", averagerating: 4.7 },
    { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "Low Voltage Switch", averagerating: 3.9 },
    { id: "jj-1969", name: "Warp Drive", averagerating: 5.0 }
];

// Populate Select Options Dynamically
const selectElement = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    selectElement.appendChild(option);
});

// Populate Current Year in Footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
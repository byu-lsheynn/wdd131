// currentyear 
const currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = new Date().getFullYear();

// lastModified
const lastModifiedElement = document.getElementById("lastModified");
const date = new Date(document.lastModified);

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
lastModifiedElement.textContent = date.toLocaleDateString('en-US', options);

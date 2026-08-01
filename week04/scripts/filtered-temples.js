document.addEventListener("DOMContentLoaded", () => {
    // -- TEMPLE DATA ARRAY -- //
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        // Three additional temple objects
        {
            templeName: "Cebu City Philippines",
            location: "Cebu City, Cebu, Philippines",
            dedicated: "2010, June, 13",
            area: 29556,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cebu-city-philippines-temple/cebu-city-philippines-temple-2255.jpg"
        },
        {
            templeName: "Manila Philippines",
            location: "Quezon City, Manila, Philippines",
            dedicated: "1984, September, 25",
            area: 26683,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manila-philippines-temple/manila-philippines-temple-48891.jpg"
        },
        {
            templeName: "Salt Lake Utah",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            area: 382207,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-8458.jpg"
        }
    ];

    // -- CARD BUILDER & FILTER LOGIC -- //
    const container = document.getElementById("temple-cards");
    const categoryTitle = document.getElementById("category-title");

    function displayTemples(filteredTemples) {
        if (!container) return;
        container.innerHTML = "";

        filteredTemples.forEach(temple => {
            const card = document.createElement("figure");

            card.innerHTML = `
                <h3>${temple.templeName}</h3>
                <p><span class="label">Location:</span> ${temple.location}</p>
                <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
                <p><span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft</p>
                <img src="${temple.imageUrl}" 
                     alt="${temple.templeName} Temple" 
                     loading="lazy" 
                     width="400" 
                     height="250">
            `;

            container.appendChild(card);
        });
    }

    // Display initial home view (all temples)
    displayTemples(temples);

    // Navigation filters
    const navLinks = document.querySelectorAll("#menu-nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Set active class
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            // Update main page title
            if (categoryTitle) {
                categoryTitle.textContent = link.textContent;
            }

            const filter = link.id;
            let filtered = [];

            switch (filter) {
                case "old":
                    filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
                    break;
                case "new":
                    filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
                    break;
                case "large":
                    filtered = temples.filter(t => t.area > 90000);
                    break;
                case "small":
                    filtered = temples.filter(t => t.area < 10000);
                    break;
                default:
                    filtered = temples;
                    break;
            }

            displayTemples(filtered);
        });
    });

    // -- HAMBURGER MENU LOGIC -- //
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const menuNav = document.getElementById("menu-nav");

    if (hamburgerBtn && menuNav) {
        hamburgerBtn.addEventListener("click", () => {
            hamburgerBtn.classList.toggle("active");
            menuNav.classList.toggle("open");
        });
    }

    // -- FOOTER DATES LOGIC -- //
    // currentyear 
    const currentYearElement = document.getElementById("currentyear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // lastModified
    const lastModifiedElement = document.getElementById("lastModified");

    if (lastModifiedElement) {
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

        lastModifiedElement.textContent = `Last Modification: ${date.toLocaleDateString('en-US', options)}`;
    }
});
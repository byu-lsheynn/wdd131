document.addEventListener("DOMContentLoaded", () => {
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
    currentYearElement.textContent = new Date().getFullYear();
    
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
        
        lastModifiedElement.textContent = date.toLocaleDateString('en-US', options);
    }
});


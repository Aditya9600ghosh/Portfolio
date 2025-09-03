// This script handles the mobile navigation (hamburger menu)

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Check if both elements exist before adding event listener
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Toggle the 'nav-active' class to show/hide the navigation links
            navLinks.classList.toggle('nav-active');

            // Animate the hamburger icon into an 'X'
            hamburger.classList.toggle('toggle');
        });
    }
});

// JavaScript to toggle the mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Event listener to handle the click event on the mobile menu button
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }
});
// Example: Fade in the mission section when it scrolls into view
document.addEventListener('DOMContentLoaded', () => {
    const missionSection = document.querySelector('#mission');
    
    window.addEventListener('scroll', () => {
        const sectionPosition = missionSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (sectionPosition < screenPosition) {
            missionSection.classList.add('fade-in');
        }
    });
});

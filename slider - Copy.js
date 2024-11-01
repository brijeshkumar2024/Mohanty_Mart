let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;


function showSlide(index) {
    console.log('Showing slide:', index); // Add this line for debugging
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'flex' : 'none';
    });
}

// Initial display of the first slide
showSlide(currentSlide);

// Function to go to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Function to go to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Automatic slide change every 3 seconds
setInterval(nextSlide, 3000);

// Event listeners for the next and previous buttons
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

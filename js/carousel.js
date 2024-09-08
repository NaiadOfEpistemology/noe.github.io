let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-images img');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    moveToNextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    moveToPreviousSlide();
});

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop to the first slide if we reach the last one
    updateCarousel();
}

function moveToPreviousSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop to the last slide if we go before the first one
    updateCarousel();
}

function updateCarousel() {
    const newPosition = -currentIndex * 100; // Calculate the percentage to shift
    document.querySelector('.carousel-images').style.transform = `translateX(${newPosition}%)`;
}

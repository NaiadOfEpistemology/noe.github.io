document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.carousel-nav .prev');
    const nextBtn = document.querySelector('.carousel-nav .next');
    const carouselImages = document.querySelector('.carousel-images');
    let index = 0;

    function updateCarousel() {
        const width = document.querySelector('.carousel').offsetWidth;
        carouselImages.style.transform = `translateX(-${index * width}px)`;
    }

    nextBtn.addEventListener('click', function() {
        const totalImages = document.querySelectorAll('.carousel-images img').length;
        index = (index + 1) % totalImages;
        updateCarousel();
    });

    prevBtn.addEventListener('click', function() {
        const totalImages = document.querySelectorAll('.carousel-images img').length;
        index = (index - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    // Initialize carousel position
    updateCarousel();
});

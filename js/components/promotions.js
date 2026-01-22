document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.promotions-carousel__slide');
    const indicators = document.querySelectorAll('.promotions-carousel__indicator');
    const prevButton = document.querySelector('.promotions-carousel__nav--prev');
    const nextButton = document.querySelector('.promotions-carousel__nav--next');

    let currentSlide = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove('promotions-carousel__slide--active');
        });

        indicators.forEach(indicator => {
            indicator.classList.remove('promotions-carousel__indicator--active');
        });

        if (slides[index]) {
            slides[index].classList.add('promotions-carousel__slide--active');
        }
        
        if (indicators[index]) {
            indicators[index].classList.add('promotions-carousel__indicator--active');
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
    }

    if (prevButton) {
        prevButton.addEventListener('click', prevSlide);
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

});

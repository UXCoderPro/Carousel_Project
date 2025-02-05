document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll("#pic");
    const prevButton = document.getElementById("left page");
    const nextButton = document.getElementById("right page");
    const pages = document.querySelectorAll(".page");
    
    let currentIndex = 0;
    const slideWidth = slides[0].offsetWidth + 24;
    
    function updateCarousel() {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        });
        pages.forEach((page, index) => {
            page.classList.toggle("active", index === currentIndex);
        });
    }

    nextButton.addEventListener("click", function () {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first slide
        }
        updateCarousel();
    });

    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1; // Loop back to the last slide
        }
        updateCarousel();
    });

    pages.forEach((page, index) => {
        page.addEventListener("click", function () {
            currentIndex = index;
            updateCarousel();
        });
    });

    updateCarousel();
});

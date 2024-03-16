document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    const slides = carousel.querySelectorAll(".carousel-item");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");
    let slideIndex = 0;

    // Function to show slide
    function showSlide(n) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        if (n >= slides.length) { slideIndex = 0; }
        if (n < 0) { slideIndex = slides.length - 1; }
        slides[slideIndex].classList.add('active');
    }

    // Function to change slide
    function changeSlide(n) {
        showSlide(slideIndex += n);
    }

    // Event listener for previous button
    prevBtn.addEventListener("click", function () {
        changeSlide(-1);
    });

    // Event listener for next button
    nextBtn.addEventListener("click", function () {
        changeSlide(1);
    });

    // Show first slide initially
    showSlide(slideIndex);
});

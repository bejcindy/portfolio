let slideIndex = 1;

// Initialize slideshow when page loads
document.addEventListener('DOMContentLoaded', function () {
    setContainerHeight();
    showSlide(slideIndex);
});

// Set container height to match tallest image
function setContainerHeight() {
    let slides = document.getElementsByClassName("slide");
    let container = document.querySelector('.slideshow-container');
    let images = container.querySelectorAll('.slide img');
    let loadedCount = 0;
    let maxHeight = 0;

    // Function to update max height after all images load
    function updateHeight() {
        loadedCount++;
        if (loadedCount === images.length) {
            // All images loaded, find max height
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "block";
                let height = slides[i].offsetHeight;
                if (height > maxHeight) {
                    maxHeight = height;
                }
                slides[i].style.display = "none";
            }
            container.style.minHeight = maxHeight + 'px';
            showSlide(slideIndex);
        }
    }

    // Wait for all images to load
    images.forEach(function (img) {
        if (img.complete) {
            updateHeight();
        } else {
            img.addEventListener('load', updateHeight);
        }
    });
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

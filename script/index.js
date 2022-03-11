function showAuto() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("single-slide");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        dots[slideIndex - 1].className += " active";
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 5000); // Change automatic images every 5 seconds
    }
}

showAuto();

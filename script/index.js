let slides = document.getElementsByClassName("single-slide");
let dots = document.getElementsByClassName("dot");

function showAuto() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
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
        setTimeout(showSlides, 3000); // Change automatic images every 5 seconds
    }
}

function currentSlide(index){
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        if(i == index-1){
            slides[index-1].style.display = "block";
            dots[index - 1].className += " active";
        }
    }
}

showAuto();

function slidesPlugin(activeSlide = 0){
    let slides = document.querySelectorAll(".slide");

    slides[activeSlide].classList.add('active');

    for (const slide of slides) {
        slide.addEventListener("click", (e) => {
            clearActiveClasses();
            slide.classList.add('active');
        });
    }
    
    function clearActiveClasses(){
        for (const slide of slides) {
            slide.classList.remove('active');
        }
    }    
}

slidesPlugin(4);
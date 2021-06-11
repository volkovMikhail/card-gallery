let slides = document.querySelectorAll(".slide");

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
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentState = 1;

nextBtn.addEventListener('click', (e) => {
    currentState++

    if (currentState >= circles.length) {
        currentState = circles.length;
        nextBtn.disabled = true;
    }

    prevBtn.disabled = false;
    
    activate();
});

function activate() {
    circles.forEach((circle, index) => {
        if (index < currentState) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const activeCircles = document.querySelectorAll(".circle.active");

    progress.style.width = ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%" ; 
}

prevBtn.addEventListener('click', (e) => {
    currentState--;

    if (currentState <= 1) {
        currentState = 1;
        prevBtn.disabled = true;
    }

    nextBtn.disabled = false;

    activate();
})
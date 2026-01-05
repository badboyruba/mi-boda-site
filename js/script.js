// Setăm data nunții
const weddingDate = new Date("September 26, 2026 00:00:00").getTime();

// Păstrăm valorile anterioare pentru a declanșa animația doar la schimbare
let prevValues = {days: '', hours: '', minutes: '', seconds: ''};

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const newValues = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
    };

    // Actualizăm fiecare element cu animație
    animateNumber("days", newValues.days, prevValues.days);
    animateNumber("hours", newValues.hours, prevValues.hours);
    animateNumber("minutes", newValues.minutes, prevValues.minutes);
    animateNumber("seconds", newValues.seconds, prevValues.seconds);

    prevValues = {...newValues};
}

// Funcție pentru animația numerelor
function animateNumber(id, value, prevValue) {
    const element = document.getElementById(id);
    element.innerText = value;

    if(value !== prevValue){
        // Resetăm animația CSS
        element.classList.remove("change");
        void element.offsetWidth; // forțăm reflow
        element.classList.add("change"); // adăugăm clasa care declanșează animatia risePulseGlow
    }
}

// Actualizăm la fiecare secundă
setInterval(updateCountdown, 1000);
updateCountdown(); // apel inițial

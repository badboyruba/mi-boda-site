// Setăm data nunții
const weddingDate = new Date("September 26, 2026 00:00:00").getTime();
let prevValues = {days:'', hours:'', minutes:'', seconds:''};

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const newValues = {
        days: Math.floor(distance / (1000*60*60*24)),
        hours: Math.floor((distance % (1000*60*60*24)) / (1000*60*60)),
        minutes: Math.floor((distance % (1000*60*60)) / (1000*60)),
        seconds: Math.floor((distance % (1000*60)) / 1000)
    };

    animateNumber("days", newValues.days, prevValues.days);
    animateNumber("hours", newValues.hours, prevValues.hours);
    animateNumber("minutes", newValues.minutes, prevValues.minutes);
    animateNumber("seconds", newValues.seconds, prevValues.seconds);

    prevValues = {...newValues};
}

function animateNumber(id, value, prevValue){
    const element = document.getElementById(id);
    element.innerText = value;

    if(value !== prevValue){
        element.classList.remove("change");
        void element.offsetWidth;
        element.classList.add("change");
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Music Player
const audio = document.getElementById("wedding-music");
const playPauseBtn = document.getElementById("play-pause");

playPauseBtn.addEventListener("click", ()=>{
    if(audio.paused){
        audio.play();
        playPauseBtn.innerText = "Pausar";
    } else {
        audio.pause();
        playPauseBtn.innerText = "Reproducir";
    }
});

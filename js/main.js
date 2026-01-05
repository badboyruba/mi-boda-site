// Muzica pentru nunta
const song = document.getElementById("weddingSong");
const btn = document.getElementById("playPauseBtn");
const heart = document.getElementById("heart");

// Încearcă să pornești melodia automat când se încarcă pagina
window.addEventListener("load", () => {
    song.play().catch(() => {
        // Dacă browser-ul blochează autoplay, schimbăm butonul
        btn.innerText = "🎵 Reproducir";
        heart.classList.remove("pulse");
    });
});

// Buton play/pause
btn.addEventListener("click", () => {
    if (song.paused) {
        song.play();
        btn.innerText = "⏸ Pausar";
        heart.classList.add("pulse");
    } else {
        song.pause();
        btn.innerText = "🎵 Reproducir";
        heart.classList.remove("pulse");
    }
});

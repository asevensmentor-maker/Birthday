document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");

    // Smooth Navigation
    document.querySelectorAll("[data-link]").forEach(link => {
        link.addEventListener("click", function () {
            const target = this.getAttribute("data-link");
            document.body.classList.add("fade-out");
            setTimeout(() => window.location.href = target, 500);
        });
    });

    startHearts();

    // Run final page logic only if elements exist
    initFinalPage();
});

// Heart Rain
function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 500);
}

// Final Page Logic
function initFinalPage() {
    const hero = document.getElementById("hero");
    const gf = document.getElementById("gf");
    const cakeContainer = document.getElementById("cake-container");
    const knife = document.getElementById("knife");
    const candle = document.getElementById("candle");
    const message = document.getElementById("message");
    const finalText = document.getElementById("finalText");
    const blowBtn = document.getElementById("blowBtn");
    const slices = document.querySelectorAll(".slice");

    if (!hero || !gf) return;

    let currentSlice = 0;

    setTimeout(() => hero.classList.add("walk-in"), 500);
    setTimeout(() => gf.style.display = "block", 2000);

    setTimeout(() => {
        cakeContainer.style.display = "block";
        blowBtn.style.display = "inline-block";
        message.innerText = "Blow the candle, my love 💖";
    }, 3500);

    blowBtn.addEventListener("click", () => {
        candle.style.display = "none";
        blowBtn.style.display = "none";
        message.innerText = "Tap the cake to cut it! 🎂";
    });

    cakeContainer.addEventListener("click", (e) => {
        if (candle.style.display !== "none") return;
        if (currentSlice >= slices.length) return;

        const rect = cakeContainer.getBoundingClientRect();
        knife.style.left = (e.clientX - rect.left - 25) + "px";
        knife.style.top = (e.clientY - rect.top - 25) + "px";
        knife.style.display = "block";

        slices[currentSlice].classList.add("cut");
        currentSlice++;

        if (currentSlice === slices.length) {
            message.innerText = "Happy Birthday My Love ❤️🎂";
            finalText.style.display = "block";
        }
    });
}

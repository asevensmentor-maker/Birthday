document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");

    // Smooth Navigation
    document.querySelectorAll("[data-link]").forEach(link => {
        link.addEventListener("click", function () {
            const target = this.getAttribute("data-link");
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = target;
            }, 500);
        });
    });

    startHearts();
});

// Heart Rain
function startHearts() {
    if (window.heartInterval) return;

    window.heartInterval = setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 400);
}

// Celebration Hearts
function launchHearts(count = 30) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "50%";
        heart.style.animationDuration = "3s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }
}
const cakeContainer = document.getElementById("cake-container");
const slice = document.getElementById("slice1");
const knife = document.getElementById("knife");
const candle = document.getElementById("candle");
const message = document.getElementById("message");
const finalText = document.getElementById("finalText");

let sliceCut = false;

/* Show Cake After Story */
setTimeout(() => {
    cakeContainer.style.display = "block";
    message.innerText = "Blow the candle, my love 💖";
}, 3000);

/* Blow Candle */
candle.addEventListener("click", () => {
    candle.style.display = "none";
    message.innerText = "Tap the cake to cut it! 🎂";
});

/* Cut Cake Slice */
cakeContainer.addEventListener("click", (e) => {
    if (sliceCut || candle.style.display !== "none") return;

    const rect = cakeContainer.getBoundingClientRect();
    knife.style.left = (e.clientX - rect.left - 25) + "px";
    knife.style.top = (e.clientY - rect.top - 25) + "px";
    knife.style.display = "block";

    slice.classList.add("cut");
    sliceCut = true;

    message.innerText = "Happy Birthday My Love ❤️🎂";
    launchHearts(40);
    launchFireworks(25);

    if (finalText) {
        finalText.style.display = "block";
    }
});

/* Hearts Animation */
function launchHearts(count) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "0";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }
}

/* Fireworks Animation */
function launchFireworks(count) {
    for (let i = 0; i < count; i++) {
        const fire = document.createElement("div");
        fire.className = "firework";
        fire.innerHTML = "✨";
        fire.style.left = Math.random() * 100 + "vw";
        fire.style.top = Math.random() * 60 + "vh";
        document.body.appendChild(fire);
        setTimeout(() => fire.remove(), 1200);
    }
}

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

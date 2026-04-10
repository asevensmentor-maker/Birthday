document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");

    // Smooth navigation
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

// Heart Rain Effect
function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }, 400);
}

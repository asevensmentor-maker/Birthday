/* Smooth Page Transitions */
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");

    document.querySelectorAll("a, button[data-link]").forEach(link => {
        link.addEventListener("click", function (e) {
            const target = this.getAttribute("data-link");
            if (target) {
                e.preventDefault();
                document.body.classList.add("fade-out");
                setTimeout(() => {
                    window.location.href = target;
                }, 500);
            }
        });
    });

    startHearts();
});

/* Heart Rain Effect */
function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }, 300);
}

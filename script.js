/* =====================================================
   Birthday Surprise Website - Global Script
   Features:
   ✔ Smooth Page Transitions
   ✔ Heart Rain Animation
   ✔ Fade-in Effects
   ✔ Smooth Navigation
   ✔ Mobile-Friendly Optimizations
   ✔ Utility Functions
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Apply fade-in effect when page loads
    document.body.classList.add("fade-in");

    // Initialize smooth navigation
    initSmoothNavigation();

    // Start heart rain animation
    startHearts();
});

/* =====================================================
   Smooth Page Transitions
===================================================== */
function initSmoothNavigation() {
    document.querySelectorAll("[data-link]").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = this.getAttribute("data-link");

            if (!target) return;

            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = target;
            }, 500);
        });
    });
}

/* =====================================================
   Heart Rain Effect
===================================================== */
function startHearts() {
    // Prevent multiple heart intervals
    if (window.heartInterval) return;

    window.heartInterval = setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "💖";

        // Random horizontal position
        heart.style.left = Math.random() * 100 + "vw";

        // Random animation duration
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

        // Random size
        heart.style.fontSize = (Math.random() * 10 + 14) + "px";

        document.body.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);

    }, 400);
}

/* =====================================================
   Optional Utility: Scroll to Top Button Support
===================================================== */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* =====================================================
   Optional Utility: Typing Effect
   Usage: typeText("elementId", "Your Message", 50);
===================================================== */
function typeText(elementId, text, speed = 50) {
    const element = document.getElementById(elementId);
    if (!element) return;

    element.innerHTML = "";
    let index = 0;

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

/* =====================================================
   Optional Utility: Play Audio
===================================================== */
function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    if (audio) {
        audio.play().catch(() => {
            console.log("Autoplay blocked by browser.");
        });
    }
}

/* =====================================================
   Optional Utility: Launch Celebration Hearts
===================================================== */
function launchHearts(count = 30) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "0";
        heart.style.position = "fixed";
        heart.style.animationDuration = "3s";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 3000);
    }
}

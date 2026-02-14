// ❤️ Romantic Message
const text = `You are one of my favourite people, my comfort human, and the reason
I smile randomly. You are a great inspiration. You teach me a lot of
things. I have learned so much from you and I truly use those lessons
in my life.

Sometimes I adapt quickly, sometimes I take time. Because as humans,
it is not always easy to accept our flaws. But in the end, I deeply
appreciate you for helping me grow.

You are a beautiful human. A great friend.
And deep down, I love you.
I never want to lose you. 💕`;

// ❤️ Typewriter Effect
function startTypewriter(speed = 35) {
    const typewriter = document.getElementById("typewriter");
    if (!typewriter) return;

    let index = 0;
    typewriter.textContent = "";

    function type() {
        if (index < text.length) {
            typewriter.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

// 💔 Move "No" Button
function moveButton() {
    const button = document.querySelector(".no");
    if (!button) return;

    const x = Math.random() * 200 - 100;
    const y = Math.random() * 100 - 50;

    button.style.transform = `translate(${x}px, ${y}px)`;
}

// 💖 When She Clicks YES
function sayYes() {
    const finalMessageEl = document.getElementById("finalMessage");
    if (finalMessageEl) {
        finalMessageEl.innerText =
            "YAYYYYY 😭💖 You just made my heart explode!!!";
    }

    // Play music safely
    const player = document.getElementById("musicPlayer");
    if (player) {
        player.play().catch(() => {});
    }

    // Confetti effect
    if (typeof confetti === "function") {
        confetti({
            particleCount: 250,
            spread: 150,
            origin: { y: 0.6 }
        });
    }
}

// 💕 Floating Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 15 + Math.random() * 25 + "px";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// ⏳ Start Everything After DOM Loads
document.addEventListener("DOMContentLoaded", () => {

    // Countdown
    let count = 10;
    const countdownEl = document.getElementById("countdown");

    if (countdownEl) {
        const countdownInterval = setInterval(() => {
            countdownEl.textContent = count;
            count--;

            if (count < 0) {
                clearInterval(countdownInterval);

                const hero = document.querySelector(".hero");
                if (hero) hero.style.display = "none";

                const proposal = document.getElementById("proposalSection");
                if (proposal) proposal.classList.remove("hidden");

                startTypewriter();
            }
        }, 1000);
    }

    // Start floating hearts
    setInterval(createHeart, 500);

    // Attach move effect to No button
    const noBtn = document.querySelector(".no");
    if (noBtn) {
        noBtn.addEventListener("mouseenter", moveButton);
    }
});
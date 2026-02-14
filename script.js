let count = 10;
const countdownEl = document.getElementById("countdown");

const countdownInterval = setInterval(() => {
    countdownEl.innerText = count;
    count--;

    if (count < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".hero").style.display = "none";
        document.getElementById("proposalSection").classList.remove("hidden");
        startTypewriter();
    }
}, 1000);
const text = 
        `You are my one of the favourite person, my comfort human, and the reason
        I smile randomly. You are a great inspiration. You teach me alot of
        things. You inspire me. I have learned a lot of things from you. And i
        do use those lessons in my life. Well sometimes i adapt them quickly,
        sometimes i take time and i agree sometimes i just feel like it's ok the
        way i am. Because as a human it is sometimes dificult for us to accept
        our flaws and deny them. But in the end i really reallyappreciate you
        for telling me. I love you for that. And i have grown so much with
        you.You are a great human. Good friend. Kbhi kbhi ldai bi zaruri hai.
        But deep down i love you. And i don't want to loose you.💕`;
let index = 0;
function startTypewriter() {
    const typewriter = document.getElementById("typewriter");

    function type() {
        if (index < text.length) {
            typewriter.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 40);
        }
    }

    type();
}


function moveButton() {
    const button = document.querySelector(".no");
    const x = Math.random() * 400 - 200;
    const y = Math.random() * 200 - 100;
    button.style.transform = `translate(${x}px, ${y}px)`;
}

function sayYes() {
    document.getElementById("finalMessage").innerText =
        "YAYYYYY 😭💖 You just made my heart explode!!!";

    document.getElementById("bgMusic").play();

    const container = document.body;
    const fireworks = new Fireworks.default(container);
    fireworks.start();
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);

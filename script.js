/* ==========================================================
                    AOS
========================================================== */

AOS.init({
  duration: 1000,

  once: true,

  easing: "ease-in-out",
});

/* ==========================================================
                NAVBAR SCROLL
========================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ==========================================================
                    MODAL FOTO
========================================================== */

const memoryItems = document.querySelectorAll(".memory-item img");

const modalImage = document.getElementById("modalImage");

const modal = new bootstrap.Modal(document.getElementById("photoModal"));

memoryItems.forEach((img) => {
  img.addEventListener("click", () => {
    modalImage.src = img.src;

    modal.show();
  });
});

/* ==========================================================
                    SMOOTH SCROLL
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/* ==========================================================
                    STARS
========================================================== */

const stars = document.getElementById("stars");

for (let i = 0; i < 90; i++) {
  const star = document.createElement("div");

  star.className = "star";

  star.style.left = Math.random() * 100 + "%";

  star.style.top = Math.random() * 100 + "%";

  star.style.animationDuration = 2 + Math.random() * 5 + "s";

  star.style.animationDelay = Math.random() * 5 + "s";

  star.style.opacity = Math.random();

  star.style.width = 2 + Math.random() * 3 + "px";

  star.style.height = star.style.width;

  stars.appendChild(star);
}

/* ==========================================================
                    BUBBLE
========================================================== */

const bubbleContainer = document.getElementById("bubble-container");

function createBubble() {
  const bubble = document.createElement("div");

  bubble.className = "bubble";

  const size = 10 + Math.random() * 45;

  bubble.style.width = size + "px";

  bubble.style.height = size + "px";

  bubble.style.left = Math.random() * 100 + "%";

  bubble.style.animationDuration = 7 + Math.random() * 7 + "s";

  bubble.style.opacity = 0.08 + Math.random() * 0.15;

  bubbleContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 15000);
}

setInterval(createBubble, 700);

/* ==========================================================
                    MUSIC
========================================================== */

const music = document.getElementById("bgMusic");

/* ==========================================
        MUSIC TOGGLE
========================================== */

const musicToggle = document.getElementById("musicToggle");

const musicIcon = musicToggle.querySelector("i");

musicToggle.addEventListener("click", () => {
  if (music.paused) {
    music.play();

    musicIcon.className = "bi bi-volume-up-fill";

    musicToggle.classList.add("playing");
  } else {
    music.pause();

    musicIcon.className = "bi bi-volume-mute-fill";

    musicToggle.classList.remove("playing");
  }
});

/* ==========================================
        OPEN GIFT
========================================== */

const opening = document.getElementById("opening-screen");

const openGift = document.getElementById("openGift");

openGift.addEventListener("click", () => {
  music.play();

  opening.classList.add("hide");

  document.body.classList.remove("lock");
});

document.body.classList.add("lock");
musicToggle.classList.add("playing");

/* ==========================================================
                HERO IMAGE PARALLAX
========================================================== */

const hero = document.getElementById("hero");

openGift.addEventListener("click", () => {
  music.play();

  opening.classList.add("hide");

  document.body.classList.remove("lock");

  setTimeout(() => {
    hero.classList.add("show");
  }, 600);
});

/* ==========================================================
                FADE HERO
========================================================== */

window.addEventListener("scroll", () => {
  const value = window.scrollY;

  hero.style.opacity = 1 - value / 1200;
});

// Countdown Timer
const eventDate = new Date("Dec 15, 2025 10:00:00").getTime();
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;
  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "Event Started!";
    clearInterval(countdown);
    return;
  }
  document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

// Info Popup
const infoBtn = document.getElementById("infoBtn");
const popup = document.getElementById("infoPopup");
infoBtn.addEventListener("click", () => popup.style.display = "flex");
window.addEventListener("click", e => { if (e.target === popup) popup.style.display = "none"; });

// Fade-in on scroll
const fadeEls = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  fadeEls.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) el.classList.add("visible");
  });
});


// Show scroll-to-top button
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
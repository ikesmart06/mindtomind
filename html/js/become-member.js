// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile menu toggle
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Page load animation
window.addEventListener("load", () => {
  document.querySelectorAll(".animate").forEach((el, i) => {
    el.style.animationDelay = `${i * 0.3}s`;
  });
});

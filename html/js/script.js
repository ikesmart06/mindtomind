

// responsiveness
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const header = document.querySelector("header");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Impact Section Counter (runs only once on load)
const counters = document.querySelectorAll(".num");

const animateCounter = (el, end) => {
  let start = 0;
  let duration = 2000;
  let increment = Math.ceil(end / (duration / 30));

  let counter = setInterval(() => {
    start += increment;
    if (start >= end) {
      el.textContent = end;
      clearInterval(counter);
    } else {
      el.textContent = start;
    }
  }, 30);
};

window.addEventListener("load", () => {
  counters.forEach((num) => {
    animateCounter(num, parseInt(num.dataset.num));
  });
});


// Program

// Program slider
const track = document.getElementById('sliderTrack');
const cards = document.querySelectorAll('.slide-card');
const totalSlides = cards.length;

let index = 0;
let visibleSlides = window.innerWidth > 992 ? 2 : 1; // desktop = 2, mobile = 1
let direction = 'forward';

function moveToSlide(speed) {
  track.style.transition = `transform ${speed}ms ease`;
  const offset = index * (100 / visibleSlides + 2); 
  track.style.transform = `translateX(-${offset}%)`;
}

function slide() {
  let speed = 1500;
  let delay = 4000;

  if (direction === 'forward') {
    if (index < totalSlides - visibleSlides) {
      index++;
    } else {
      direction = 'backward';
      index--;
      speed = 400;
      delay = 800;
    }
  } else {
    if (index > 0) {
      index--;
    } else {
      direction = 'forward';
      index++;
      speed = 400;
      delay = 800;
    }
  }

  moveToSlide(speed);
  setTimeout(slide, delay);
}

setTimeout(slide, 3000);

// Adjust visible slides on resize
window.addEventListener('resize', () => {
  visibleSlides = window.innerWidth > 992 ? 2 : 1;
  moveToSlide(0); // reset transform smoothly
});


// partners and newslaters

document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('.newsletter-form input').value.trim();
  
  if (!email || !email.includes('@')) {
    alert('❌ Please enter a valid email address.');
  } else {
    alert('✅ Thanks for subscribing!');
    document.querySelector('.newsletter-form').reset();
  }
});


// ===== ScrollReveal Animation Setup =====

// Global config
const sr = ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
  easing: "ease-in-out",
  // reset: true, // uncomment if you want animations to repeat on scroll
});

// Reveal from Top
sr.reveal(
  ".hero-img, .heading, .impact-heading, .section-title, .team-section, .partners-section h2",
  { origin: "top" }
);

// Reveal from Bottom
sr.reveal(
  ".hero-p, .services-container, .portfolio-box, .contact form, .about-text, .paragraph, .programs-subtext, .update-section, .team-intro, .newsletter",
  { origin: "bottom" }
);

// Reveal from Left
sr.reveal(
  ".home-content h1, .about-img, .portfolio-b, .impact-grid, .team-member, .partner-logos",
  { origin: "left" }
);

// Reveal from Right
sr.reveal(
  ".home-content p, .about-content, .btn, .portfolio-bo, .highlight",
  { origin: "right" }
);


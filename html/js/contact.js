// Navbar change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    navbar.classList.remove("transparent");
  } else {
    navbar.classList.remove("scrolled");
    navbar.classList.add("transparent");
  }

  // Show scroll-to-top button
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("show");
});

// Scroll-to-top function
document.getElementById("scrollTopBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    navbar.classList.remove("transparent");
  } else {
    navbar.classList.remove("scrolled");
    navbar.classList.add("transparent");
  }
});

// Scroll-to-top function
document.getElementById("scrollTopBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener('scroll', () =>{
    const header = document.querySelector('header');

    if (window.scrollY >0){
        header.classList.add ('scrolled')
    } else{
        header.classList.remove('scrolled')
    }
})


// counter
let nums = document.querySelectorAll(".num");
let container = document.querySelector(".container");

let test = false


window.onscroll = () => {
    if(!test){
        nums.forEach ((e) => {
            let start = 0;
            let end = e.dataset.num;


            let count = setInterval (() => {
                start++;
                e.textContent = start;
                if(start == end) {
                    clearInterval(count);
                }
            }, 2000 / end)
        })
        test = true;
    }
}


// program
  const track = document.getElementById('sliderTrack');
  const cards = document.querySelectorAll('.slide-card');
  const totalSlides = cards.length;
  const visibleSlides = 2;

  let index = 0;
  let direction = 'forward';

  function moveToSlide(speed) {
    track.style.transition = `transform ${speed}ms ease`;
    const offset = index * (100 / visibleSlides + 2); // card width + margin in percentage
    track.style.transform = `translateX(-${offset}%)`;
  }

  function slide() {
    let speed = 2000;
    let delay = 4000;

    if (direction === 'forward') {
      if (index < totalSlides - visibleSlides) {
        index++;
      } else {
        direction = 'backward';
        index--;
        speed = 300;
        delay = 300;
      }
    } else {
      if (index > 0) {
        index--;
      } else {
        direction = 'forward';
        index++;
        speed = 300;
        delay = 300;
      }
    }

    moveToSlide(speed);
    setTimeout(slide, delay);
  }

  setTimeout(slide, 4000);


//   latest


document.querySelector('.subscribe-btn').addEventListener('click', () => {
  const email = document.querySelector('.newsletter-form input').value;
  if (!email.includes('@')) {
    alert('Please enter a valid email address');
  } else {
    alert('Thanks for subscribing!');
  }
});



// scroll reveal.

ScrollReveal({ 
    //  reset: true,
    distance:'80px',
    duration:2000,
    delay:200,

});

ScrollReveal().reveal('.hero-img, .heading, .impact-heading, .section-title, .team-section, .partners-sectio', { origin:'top'});
ScrollReveal().reveal('.hero-p, .services-container, .portfolio-box, .contact form, .about-text, .paragraph, .programs-subtext, .update-section, .team-intro, .newsletter', { origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img, .portfolio-b, .impact-grid, .team-member, .partner-logos ', { origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content, .btn, .portfolio-bo, .highlight', { origin:'right'});



// responsiveness
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

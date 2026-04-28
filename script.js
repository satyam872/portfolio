// SCROLL
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// TYPING EFFECT
const text = ["Data Analyst", "Excel Expert", "SQL Developer", "Python Learner"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = text[i];

  if (!isDeleting) {
    document.getElementById("typing").textContent = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("typing").textContent = current.substring(0, j--);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// SCROLL ANIMATION
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// CONTACT BUTTON
function contactAlert() {
  alert("Thanks! I’ll connect with you soon.");
}

let index = 0;

function moveSlide(step) {
  const slides = document.getElementById("slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  index += step;

  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;

  slides.style.transform = `translateX(-${index * 105}%)`;
}
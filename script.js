// Navigation

// Hamburger
const hamburgerDiv = document.querySelector(".hamburger");

const hamburger = document.querySelector(".hamburger");

const slideOut = document.getElementById("slideOut")

hamburgerDiv.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    slideOut.classList.toggle("active");
});

// Schedule

// Homepage

// FAQ Dropdown

// Variables

const faqTrigger = document.querySelectorAll(".faq-question");

const faqSlide = document.querySelectorAll(".faq-slide-out");

const faqArrow = document.querySelectorAll(".arrow");

if (faqTrigger){
  faqTrigger.forEach(trigger => {
      trigger.addEventListener("click", () => {
          const parent = trigger.closest(".faq-combo");
          const slide = parent.querySelector(".faq-slide-out");
          const arrow = parent.querySelector(".faq-question > .arrow")

          slide.classList.toggle("active");
          arrow.classList.toggle("active");
      })
  });

};



// About

// Timeline Swipe



const track = document.querySelector(".slide-track");
const slides = document.querySelectorAll(".slide-card");

if (track){

// Starting position
let startX = 0;
// Ending position
let currentX = 0;
// State
let isDragging = false;
// Card index
let index = 0

// POINTER DOWN
track.addEventListener("pointerdown", (e) => {
    startX = e.clientX;
    currentX = startX;
    isDragging = true;

    // disable accidental animations
    track.style.transition = "none";
    track.setPointerCapture(e.pointerId);
});

// POINTER MOVE
track.addEventListener("pointermove", (e) => {
  if (!isDragging) return;

  currentX = e.clientX;
  let diff = currentX - startX;

  const atFirst = index === 0;
  const atLast = index === slides.length - 1;

  // Edge resistance
  if ((atFirst && diff > 0) || (atLast && diff < 0)) {
    diff *= 0.3;
  }

  const movePercent = (diff / window.innerWidth) * 100;

  track.style.transform = `translateX(${ -index * 100 + movePercent }%)`;
});

// POINTER UP
track.addEventListener("pointerup", () => {
  isDragging = false;
  track.style.transition = "transform 0.3s ease";

  const diff = currentX - startX;

  if (diff < -50 && index < slides.length - 1) {
    index++;
  } else if (diff > 50 && index > 0) {
    index--;
  }

  updateSlide();
});

// SNAP
function updateSlide() {
  track.style.transform = `translateX(-${index * 100}%)`;
};

};


// Schedule

const scheduleTrigger = document.querySelectorAll(".dow");

if (scheduleTrigger){

scheduleTrigger.forEach(trig => {
  trig.addEventListener("click", () => {
    const main = trig.closest(".schedule-combo");
    const slider = main.querySelector(".schedule-slide");
    const arrow = main.querySelector(".arrow-schedule");
    slider.classList.toggle("active");
    arrow.classList.toggle("active");
  });
});

};

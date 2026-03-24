// Navigation

// Hamburger
const hamburgerDiv = document.querySelector(".hamburger");

const hamburger = document.querySelector(".hamburger");

const slideOut = document.getElementById("slideOut")

hamburgerDiv.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    slideOut.classList.toggle("active");
});

// Homepage

// FAQ Dropdown

// Variables

const faqTrigger = document.querySelectorAll(".faq-question");

const faqSlide = document.querySelectorAll(".faq-slide-out");

const faqArrow = document.querySelectorAll(".arrow");


faqTrigger.forEach(trigger => {
    trigger.addEventListener("click", () => {
        const parent = trigger.closest(".faq-combo");
        const slide = parent.querySelector(".faq-slide-out");
        const arrow = parent.querySelector(".faq-question > .arrow")

        slide.classList.toggle("active");
        arrow.classList.toggle("active");
    })
});
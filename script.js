const track = document.querySelector(".slider__track");
const slides = document.querySelectorAll(".img-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let slideWidth = slides[0].offsetWidth + 20;
let index = 0;

slides.forEach((slide) => {
  let clone = slide.cloneNode(true);
  track.appendChild(clone);
});

function moveSlide() {
  track.style.transition = "transform 0.5s ease";
  track.style.transform = `translateX(${-index * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  index++;
  moveSlide();
});

prevBtn.addEventListener("click", () => {
  if (index === 0) {
    track.style.transition = "none";
    index = slides.length;
    track.style.transform = `translateX(${-index * slideWidth}px)`;
    setTimeout(() => {
      track.style.transition = "transform 0.5s ease";
      index--;
      moveSlide();
    }, 50);
  } else {
    index--;
    moveSlide();
  }
});

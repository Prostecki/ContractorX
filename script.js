const track = document.querySelector(".slider__track");
const slides = Array.from(document.querySelectorAll(".img-container"));
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let slideWidth = slides[0].offsetWidth;
let index = slides.length;

slides.forEach((slide) => {
  const cloneFirst = slide.cloneNode(true);
  const cloneLast = slide.cloneNode(true);
  track.appendChild(cloneFirst);
  track.insertBefore(cloneLast, track.firstChild);
});

const allSlides = document.querySelectorAll(".img-container");
track.style.transform = `translateX(${-index * slideWidth}px)`;

function moveSlide() {
  track.style.transition = "transform 0.5s ease";
  track.style.transform = `translateX(${-index * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  index++;
  moveSlide();

  setTimeout(() => {
    if (index >= allSlides.length - slides.length) {
      track.style.transition = "none";
      index = slides.length;
      track.style.transform = `translateX(${-index * slideWidth}px)`;
    }
  }, 500);
});

prevBtn.addEventListener("click", () => {
  index--;
  moveSlide();

  setTimeout(() => {
    if (index < slides.length) {
      track.style.transition = "none";
      index = allSlides.length - slides.length * 2;
      track.style.transform = `translateX(${-index * slideWidth}px)`;
    }
  }, 500);
});

window.addEventListener("resize", () => {
  slideWidth = slides[0].offsetWidth;
  track.style.transition = "none";
  track.style.transform = `translateX(${-index * slideWidth}px)`;
});

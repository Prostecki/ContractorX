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

// Select the header element
const header = document.querySelector(".header");

// Create an invisible "sentinel" element that will help us detect when the header scrolls out of view
const sentinel = document.createElement("div");
sentinel.style.position = "absolute";
sentinel.style.top = "0";
sentinel.style.width = "100%";
sentinel.style.height = "1px";
document.body.prepend(sentinel);

// Create an IntersectionObserver that watches the sentinel
const observer = new IntersectionObserver(
  ([entry]) => {
    // When the sentinel is not intersecting (i.e., scrolled out of view), we add the "scrolled" class
    if (!entry.isIntersecting) {
      header.classList.add("scrolled");
    } else {
      // If the sentinel is in view, remove the class
      header.classList.remove("scrolled");
    }
  },
  {
    root: null, // Observe within the viewport
    threshold: 0, // Trigger as soon as even one pixel is not visible
  }
);

// Start observing the sentinel
observer.observe(sentinel);

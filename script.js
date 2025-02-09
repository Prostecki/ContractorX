const images = document.querySelectorAll(".slider__images img");
let index = 0;

document.querySelector(".next").addEventListener("click", () => {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");
});

document.querySelector(".prev").addEventListener("click", () => {
  images[index].classList.remove("active");
  index = (index - 1 + images.length) % images.length;
  images[index].classList.add("active");
});

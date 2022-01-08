feather.replace();

const carousel = document.querySelector(".carousel_container");

// BUTTONS
const leftBtn = document.querySelector(".left_arrow");
const rightBtn = document.querySelector(".right_arrow");

let counter = 1;
const size = carousel.children[0].clientWidth;

const moveRight = () => {
  if (counter >= carousel.children.length - 1) return;
  carousel.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carousel.style.transform = `translateX(-${size * counter}px)`;
};

const moveLeft = () => {
  if (counter <= 0) return;
  carousel.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carousel.style.transform = `translateX(-${size * counter}px)`;
};

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

carousel.addEventListener("transitionend", () => {
  if (carousel.children[counter].id === "lastNode") {
    carousel.style.transition = "none";
    counter = 1;
    carousel.style.transform = `translateX(-${size * counter}px)`;
  }
  if (carousel.children[counter].id === "firstNode") {
    carousel.style.transition = "none";
    counter = carousel.children.length - (counter + 2);
    carousel.style.transform = `translateX(-${size * counter}px)`;
  }
});

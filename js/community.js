const carousel = document.getElementById("userCarousel");
let scrollSpeed = 1;


carousel.innerHTML += carousel.innerHTML;

function scroll_carousel() {
  if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
    carousel.scrollLeft = 0;
  } else {
    carousel.scrollLeft += scrollSpeed;
  }
  requestAnimationFrame(scroll_carousel);
}


requestAnimationFrame(scroll_carousel);

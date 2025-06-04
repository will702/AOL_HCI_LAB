
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
  });
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

setInterval(showSlides, 3000); // Automatically change slides every 3 seconds

function openModal(imgSrc, title, artist, likes) {
  document.getElementById('modalImage').src = imgSrc;
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalArtist').textContent = 'by ' + artist;
  document.getElementById('modalLikes').textContent = `❤️ ${likes}`;
  document.getElementById('artModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('artModal').style.display = 'none';
}


const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const indicators = document.querySelectorAll('.indicator');

let currentSlide = 0;

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateIndicators();
}

function updateIndicators() {
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  goToSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  goToSlide(currentSlide);
}

setInterval(nextSlide, 3000);

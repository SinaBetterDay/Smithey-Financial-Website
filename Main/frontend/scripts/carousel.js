document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-track img");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  const slidesPerView = 3;
  let index = 0;

  function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    const maxIndex = slides.length - slidesPerView;
    index = Math.min(index + 1, maxIndex);
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    index = Math.max(index - 1, 0);
    updateCarousel();
  });

  window.addEventListener("resize", updateCarousel);
});

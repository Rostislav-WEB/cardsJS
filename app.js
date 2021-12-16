"use strict";



function slidesPlugin(activeSlide = 0) {
  
  // все слайды
  const slides = document.querySelectorAll('.slide');

  // активный слайд
  slides[activeSlide].classList.add('active')
  
  for (const slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses();
      slide.classList.add('active');
    })
  }
  
  function clearActiveClasses() {
    slides.forEach(slide => {
      slide.classList.remove('active');
    })
  }
}

// в () указываем активный слайд
slidesPlugin(2);
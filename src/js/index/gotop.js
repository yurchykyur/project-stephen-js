// Отримуємо елемент "gotop-wrapper"
const goToTopWrapper = document.querySelector('.gotop-wrapper');

// Отримуємо кнопку "Go to top"
const goToTopBtn = document.querySelector('.gototop');

// Додаємо прослуховувач подій для визначення положення користувача на сторінці
window.addEventListener('scroll', () => {
  // Визначаємо положення користувача на сторінці
  const currentPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  // Визначаємо висоту вмісту сторінки
  const pageHeight = document.documentElement.scrollHeight;

  // Визначаємо висоту вікна браузера
  const windowHeight = window.innerHeight;

  // Якщо користувач дійшов до певної відстані від кінця сторінки, показуємо елемент "gotop-wrapper"
  if (currentPosition + windowHeight >= pageHeight - 140) {
    goToTopWrapper.classList.add('show');
  } else {
    goToTopWrapper.classList.remove('show');
  }
});
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const menuLinks = document.querySelectorAll('.mob-link');

  const toggleMenu = () => {
    const isMenuOpen = mobileMenu.classList.contains('is-open');

    if (isMenuOpen) {
      openMenuBtn.style.display = 'flex'; // Показуємо кнопку відкриття
      closeMenuBtn.style.display = 'none'; // Ховаємо кнопку закриття
    } else {
      openMenuBtn.style.display = 'none'; // Ховаємо кнопку відкриття
      closeMenuBtn.style.display = 'flex'; // Показуємо кнопку закриття
    }

    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';

    if (scrollLockMethod === 'disableBodyScroll') {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu.classList.contains('is-open')) {
        toggleMenu();
      }
    });
  });

  // Закриваємо мобільне меню на більших екранах при зміні орієнтації пристрою
  const handleResize = () => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      mobileMenu.classList.remove('is-open');
      openMenuBtn.style.display = 'none'; // Приховуємо кнопку відкриття при зміні на великі екрани
      closeMenuBtn.style.display = 'none'; // Приховуємо кнопку закриття при зміні на великі екрани
      openMenuBtn.setAttribute('aria-expanded', false);
      enableBodyScroll(document.body);
    } else {
      // При розмірі екрану менше 768px - показуємо кнопку відкриття меню
      openMenuBtn.style.display = 'flex';
    }
  };

  window.addEventListener('resize', handleResize);

  // Викликаємо обробник resize при завантаженні сторінки
  handleResize();
})();

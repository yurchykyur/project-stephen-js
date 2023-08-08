var currentURL = window.location.href;
var menuLinks = document.querySelectorAll('.header-menu-link');
var mobMenuLinks = document.querySelectorAll('.mob-menu-link');

var isActiveSet = false; // Змінна для відстеження, чи вже встановлено активне посилання

function setActiveLink(links) {
  links.forEach(function (link) {
    if (currentURL.includes(link.getAttribute('href'))) {
      link.classList.add('header-active');
      isActiveSet = true; // Встановлюємо прапорець, що активне посилання вже встановлено
    } else {
      link.classList.remove('header-active');
    }
  });
}

setActiveLink(menuLinks); // Встановлюємо активне посилання для звичайного меню
setActiveLink(mobMenuLinks); // Встановлюємо активне посилання для мобільного меню

// Якщо активне посилання не встановлено, робимо активним перше посилання
if (!isActiveSet) {
  if (menuLinks.length > 0) {
    menuLinks[0].classList.add('header-active');
  }
  if (mobMenuLinks.length > 0) {
    mobMenuLinks[0].classList.add('header-active');
  }
}

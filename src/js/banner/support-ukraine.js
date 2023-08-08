import { supportFunds } from './support-list.js';

import Swiper from 'swiper';
// Функція для генерації HTML-коду для кожного спонсора
function generateSupportMarkup(supportFunds) {
  const isRetina = window.devicePixelRatio > 1.1;

  const markup = supportFunds
    .map((fund, index) => {
      const foundIndex = String(index + 1).padStart(2, '0');
      const foundImage = isRetina ? fund.img2x : fund.img1x;
      return `
        <li class="support-fund swiper-slide">
          <span class="support-index">${foundIndex}</span>
          <a href="${fund.url}" target="_blank" class='support-item-link' crossorigin="anonymous" rel="noopener noreferrer nofollow" aria-label="${fund.title}">
          <img class="support-img" src="${foundImage}" alt="${fund.title}" loading="lazy">
          </a>
        </li>
      `;
    })
    .join('');

  return markup;
}

const container = document.querySelector('.support-funds-list');
container.insertAdjacentHTML(
  'beforeend',
  generateSupportMarkup(supportFunds)
);

const supportButton = document.querySelector('.support-button');
const supportButtonUp = document.querySelector('.support-button-up');
// const supportFound = document.querySelector('.support-funds-visible');
const swiper = new Swiper('.my-swiper', {
  direction: 'vertical',
  spaceBetween: 20,
  slidesPerView: 'auto',

  navigation: {
    nextEl: '.swiper-button-down',
    prevEl: '.swiper-button-top',
  },

  plugins: {
    scrollContainer: true,
  },
});
// Активний елемент для контролю показу/приховування кнопок
let activeSwiperEl = 5;
// Обробники подій для кнопок прокрутки
supportButton.addEventListener('click', () => {
  swiper.slideNext();

  if (
    container.children[activeSwiperEl].classList.contains('swiper-slide-active')
  ) {
    supportButton.style.display = 'none';
    supportButtonUp.style.display = 'block';
  }
});

supportButtonUp.addEventListener('click', () => {
  swiper.slidePrev();
  if (container.children[0].classList.contains('swiper-slide-active')) {
    supportButtonUp.style.display = 'none';
    supportButton.style.display = 'block';
  }
});

// Спостерігачі за видимістю елементів для показу/приховування кнопоk
const supportFundsList = document.querySelector('.support-funds-list');
const intersectionObserver = new IntersectionObserver(function (entries) {
  if (entries[0].intersectionRatio <= 0) return;

  supportButtonUp.style.display = 'block';
  supportButton.style.display = 'none';
});

const intersectionObserver1 = new IntersectionObserver(function (entries) {
  if (entries[0].intersectionRatio <= 0) return;

  supportButtonUp.style.display = 'none';
  supportButton.style.display = 'block';
});
// Спостерігачі за останнім та першим елементами списку спонсорів
intersectionObserver.observe(supportFundsList.lastElementChild);
intersectionObserver1.observe(supportFundsList.firstElementChild);
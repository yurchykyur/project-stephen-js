import { donateFunds } from './support-list.js';

import Swiper from 'swiper';

function generateDonateFundsMarkup(donateFunds) {
  const isRetina = window.devicePixelRatio > 1.1; // Check if user has a retina display

  const markup = donateFunds
    .map((fund, index) => {
      const foundIndex = String(index + 1).padStart(2, '0');
      const foundImage = isRetina ? fund.img2x : fund.img1x;
      return `
        <li class="donate-fund swiper-slide">
          <span class="donate-index">${foundIndex}</span>
          <a href="${fund.url}" target="_blank" class='donate-item-link' crossorigin="anonymous" rel="noopener noreferrer nofollow" aria-label="${fund.title}">
          <img class="donate-img" src="${foundImage}" alt="${fund.title}" loading="lazy">
          </a>
        </li>
      `;
    })
    .join('');

  return markup;
}

const container = document.querySelector('.donate-funds-list');
container.insertAdjacentHTML(
  'beforeend',
  generateDonateFundsMarkup(donateFunds)
);

// Button function--------------------------------------
const donateButton = document.querySelector('.donate-button');
const donateButtonUp = document.querySelector('.donate-button-up');
const donateFound = document.querySelector('.donate-funds-visible');

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

let activeSwiperEl = 5;

donateButton.addEventListener('click', () => {
  swiper.slideNext();

  if (
    container.children[activeSwiperEl].classList.contains('swiper-slide-active')
  ) {
    donateButton.style.display = 'none';
    donateButtonUp.style.display = 'block';
  }
});

donateButtonUp.addEventListener('click', () => {
  swiper.slidePrev();
  if (container.children[0].classList.contains('swiper-slide-active')) {
    donateButtonUp.style.display = 'none';
    donateButton.style.display = 'block';
  }
});

// Reverse button---------------------------------

const donateFundsList = document.querySelector('.donate-funds-list');
const intersectionObserver = new IntersectionObserver(function (entries) {
  // Якщо intersectionRatio дорівнює 0, ціль поза зоною видимості
  // і нам не треба нічого робити
  if (entries[0].intersectionRatio <= 0) return;

  donateButtonUp.style.display = 'block';
  donateButton.style.display = 'none';
});

const intersectionObserver1 = new IntersectionObserver(function (entries) {
  // Якщо intersectionRatio дорівнює 0, ціль поза зоною видимості
  // і нам не треба нічого робити
  if (entries[0].intersectionRatio <= 0) return;

  donateButtonUp.style.display = 'none';
  donateButton.style.display = 'block';
});
// почати нагляд
intersectionObserver.observe(donateFundsList.lastElementChild);
intersectionObserver1.observe(donateFundsList.firstElementChild);
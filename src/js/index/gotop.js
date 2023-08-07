import throttle from 'lodash.throttle';

const goToTopWrapper = document.querySelector('.gotop-wrapper');

const throttledScroll = throttle(() => {
  const currentPosition = document.documentElement.scrollTop;

  if (currentPosition >= 800) {
    goToTopWrapper.classList.add('show');
  } else {
    goToTopWrapper.classList.remove('show');
  }
}, 300);

window.addEventListener('scroll', throttledScroll);

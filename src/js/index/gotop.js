const goToTopWrapper = document.querySelector('.gotop-wrapper');

const goToTopBtn = document.querySelector('.gototop');

window.addEventListener('scroll', () => {
  const currentPosition = document.documentElement.scrollTop;

  const pageHeight = document.documentElement.scrollHeight;

  const windowHeight = window.innerHeight;

  if (currentPosition + windowHeight >= pageHeight - 140) {
    goToTopWrapper.classList.add('show');
  } else {
    goToTopWrapper.classList.remove('show');
  }
});

let mask = document.querySelector('.mask');

export function offLoader() {
  mask.classList.remove('visible');
}

 export function onLoader() {
  mask.classList.add('visible');
}

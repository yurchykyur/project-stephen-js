document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.querySelector('html');
  setTimeout(() => {
    rootElement.removeAttribute('style');
  }, 100); // 1000 мілісекунд = 1 секунда
});

export default class Loader {
  constructor(selector) {
    this.loader = document.querySelector(selector);
  }

  show() {
    this.loader.classList.remove('is-hidden');
  }

  hide() {
    this.loader.classList.add('is-hidden');
  }
}

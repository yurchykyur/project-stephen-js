import getRefs from './refs';
import { createBookCard } from './render-book';
import { fetchingByCategory } from '../book-api/service-book-api.js';
// import { renderingHomePage } from '..//index/createHomeBooks';
import LocalStorageManager from '../service-local-storage/local-storage-manager';
import { onRenderBestsellers } from '../best-sellers/best-sellers';
const LS_KEY = 'top books';

// import addBooksListeners from './addBooksListeners';
const { galleryRef, categoriesRef } = getRefs();

export default function renderingByCategory(e) {
  // console.log('Rendering by category');

  galleryRef.innerHTML = '';
  if (e.target.innerHTML === 'See more') {
    galleryRef.insertAdjacentHTML(
      'beforeend',
      `<h2 class="category-list-title">${e.target.innerHTML
        .trim()
        .split(' ')
        .slice(0, e.target.innerHTML.length - 1)
        .join(' ')} <span class="colortext">${e.target.innerHTML
        .trim()
        .split(' ')
        .pop()}</span></h2>`
    );
    galleryRef.insertAdjacentHTML(
      'beforeend',
      `<ul class="gallery-book-list"></ul>`
    );

    const galleryListRef = document.querySelector('.gallery-book-list');
    const query = e.target.dataset.category.split(' ').join('%20');
    fetchingByCategory(query).then(response => {
      response.map(book => {
        galleryListRef.insertAdjacentHTML('beforeend', createBookCard(book));
      });
      // addBooksListeners();
    });

    categoriesRef.querySelector('.active').classList.remove('active');
    document
      .querySelector(`[data-id="${e.target.dataset.category}"]`)
      .classList.add('active');

    window.scrollTo(0, 0);

    return;
  }

  if (e.target.innerHTML.trim() === 'All categories') {
    // renderingHomePage();
    console.log(document.querySelector('.caterories-content'));
    document.querySelector(
      '.caterories-content'
    ).innerHTML = ` <div class="books-list-title"></div>
    <ul class="books-list-top"></ul>
    <ul class="books-list"></ul>
    <div class="books-list-empty"></div>`;

    onRenderBestsellers();
    window.scrollTo(0, 0);
    return;
  }

  galleryRef.insertAdjacentHTML(
    'beforeend',
    `<h2 class="category-list-title">${e.target.innerHTML
      .trim()
      .split(' ')
      .slice(0, e.target.innerHTML.length - 1)
      .join(' ')} <span class="colortext">${e.target.innerHTML
      .trim()
      .split(' ')
      .pop()}</span></h2>`
  );

  galleryRef.insertAdjacentHTML(
    'beforeend',
    `<ul class="gallery-book-list"></ul>`
  );

  const galleryListRef = document.querySelector('.gallery-book-list');
  const query = e.target.innerHTML.trim().split(' ').join('%20');

  fetchingByCategory(query).then(response => {
    response.map(book =>
      galleryListRef.insertAdjacentHTML('beforeend', createBookCard(book))
    );
    // addBooksListeners();
  });

  window.scrollTo(0, 0);
}

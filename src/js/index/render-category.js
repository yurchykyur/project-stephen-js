import getRefs from './refs';
import { createBookCard } from './render-book';
import { fetchingByCategory } from '../book-api/service-book-api.js';
import LocalStorageManager from '../service-local-storage/local-storage-manager';
import { onRenderBestsellers } from '../best-sellers/best-sellers';
const LS_KEY = 'top books';

const { galleryRef, categoriesRef } = getRefs();

export default function renderingByCategory(e) {
  galleryRef.innerHTML = '';

  if (e.target.innerHTML === 'See more') {
    const categoryName = e.target.innerHTML.trim();
    const lastWordIndex = categoryName.lastIndexOf(' ');
    const truncatedCategoryName = categoryName.substring(0, lastWordIndex);

    galleryRef.insertAdjacentHTML(
      'beforeend',
      `<h2 class="category-list-title">${truncatedCategoryName} <span class="colortext">${e.target.innerHTML
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
    });

    categoriesRef.querySelector('.active').classList.remove('active');
    document
      .querySelector(`[data-id="${e.target.dataset.category}"]`)
      .classList.add('active');

    window.scrollTo(0, 0);

    return;
  }

  if (e.target.innerHTML.trim() === 'All categories') {
    location.replace('/');
    window.scrollTo(0, 0);
    return;
  }

  const categoryName = e.target.innerHTML.trim();
  const lastWordIndex = categoryName.lastIndexOf(' ');
  const truncatedCategoryName = categoryName.substring(0, lastWordIndex);

  galleryRef.insertAdjacentHTML(
    'beforeend',
    `<h2 class="category-list-title">${truncatedCategoryName} <span class="colortext">${e.target.innerHTML
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
  });

  window.scrollTo(0, 0);
}

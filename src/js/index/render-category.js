import getRefs from './refs';
import { createBookCard } from './render-book';
import { fetchingByCategory } from '../book-api/service-book-api.js';
import { renderingHomePage } from './renderHome';
// import addBooksListeners from './addBooksListeners';
const { galleryRef, categoriesRef } = getRefs();

export default function renderingByCategory(e) {
  // console.log('Rendering by category');

  galleryRef.innerHTML = '';
  // Тицяти на кнопку більше
  if (e.target.innerHTML === 'See more') {
    galleryRef.insertAdjacentHTML(
      'beforeend',
      `<h2 class="gallery-title">${e.target.dataset.category
        .trim()
        .split(' ')
        .slice(0, e.target.innerHTML.length - 1)
        .join(
          ' '
        )} <span class = "gellery-title-akcent">${e.target.dataset.category
        .trim()
        .split(' ')
        .pop()}</span></h2>`
    );
    galleryRef.insertAdjacentHTML(
      'beforeend',
      `<div class="gallery-list2"></div>`
    );

    const galleryListRef = document.querySelector('.gallery-list2');
    const query = e.target.dataset.category.split(' ').join('%20');
    fetchingByCategory(query).then(response => {
      response.map(book => {
        galleryListRef.insertAdjacentHTML('beforeend', createBookCard(book));
      });
    //   addBooksListeners();
    });

    // Активно до нової категорії

    categoriesRef.querySelector('.active').classList.remove('active');
    document
      .querySelector(`[data-id="${e.target.dataset.category}"]`)
      .classList.add('active');

    // Скролимо ап

    window.scrollTo(0, 0);

    return;
  }

  //Тицяємо на всі категорії

  if (e.target.innerHTML.trim() === 'All categories') {
    renderingHomePage();

    // Знов скрол ап

    window.scrollTo(0, 0);
    return;
  }

  // Заголовок секції книжок

  galleryRef.insertAdjacentHTML(
    'beforeend',
    `<h2 class="gallery-title">${e.target.innerHTML
      .trim()
      .split(' ')
      .slice(0, e.target.innerHTML.length - 1)
      .join(' ')} <span class = "gellery-title-akcent">${e.target.innerHTML
      .trim()
      .split(' ')
      .pop()}</span></h2>`
  );

  galleryRef.insertAdjacentHTML(
    'beforeend',
    `<div class="gallery-list2"></div>`
  );

  const galleryListRef = document.querySelector('.gallery-list2');
  const query = e.target.innerHTML.trim().split(' ').join('%20');

  fetchingByCategory(query).then(response => {
    response.map(book =>
      galleryListRef.insertAdjacentHTML('beforeend', createBookCard(book))
    );
    // addBooksListeners();
  });

  // Летимо вгору

  window.scrollTo(0, 0);
}
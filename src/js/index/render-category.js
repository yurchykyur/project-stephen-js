import getRefs from './refs';
import { createBookCard } from '../best-sellers/fetchTopBooks';
import { fetchingByCategory } from '../book-api/service-book-api.js';
import { renderingHomePage } from '../best-sellers/best-sellers';
// import addBooksListeners from '';
const { galleryRef, categoriesRef } = getRefs();

export default function renderingByCategory(e) {
  // console.log('Rendering by category');

  galleryRef.innerHTML = '';


  //  Перевіряємо, чи було клікнуто на кнопку "See more"
  
  
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
    
// код, що очищує вміст galleryRef, тобто контейнера для списку книжок.
    
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

//  Знімаємо клас "active" з поточної вибраної категорії
    categoriesRef.querySelector('.active').classList.remove('active');
  
    //  Додаємо клас "active" до нової вибраної категорії
  
    document
      .querySelector(`[data-id="${e.target.dataset.category}"]`)
      .classList.add('active');


    window.scrollTo(0, 0);

    return;
  }

//  Перевіряємо, чи було клікнуто на кнопку "All categories"
  
  if (e.target.innerHTML.trim() === 'All categories') {
    renderingHomePage();


    window.scrollTo(0, 0);
    return;
  }

  // Вставляємо заголовок категорії в контейнер
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


  //  Створюємо контейнер для вставки списку книжок
  
  
  galleryRef.insertAdjacentHTML(
    'beforeend',
    `<div class="gallery-list2"></div>`
  );

  
  //  Отримуємо список книжок за обраною категорією
  
  
  const galleryListRef = document.querySelector('.gallery-list2');
  const query = e.target.innerHTML.trim().split(' ').join('%20');

  
fetchingByCategory(query)
  .then(response => {
    if (Array.isArray(response)) {

  // Вставляємо кожну книжку в контейнер galleryListRef

      response.map(book =>
        galleryListRef.insertAdjacentHTML('beforeend', createBookCard(book))
      );
    } else {
      console.log('Отримано некоректну відповідь від сервера.');
    }
  })
  .catch(error => {
    console.log('Помилка під час виконання запиту:', error.message);
  });

  window.scrollTo(0, 0);
}
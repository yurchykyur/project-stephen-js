import serviceBookAPI from '../book-api/service-book-api';
import throttle from 'lodash.throttle';
import { openModal } from '..//index/book-card-modal';

function firstRenderHome() {
  const topBooksPromise = serviceBookAPI('topBooks').catch(error => {
    console.error('Error fetching topBooks:', error);
    return [];
  });

  const categoryListPromise = serviceBookAPI('categoryList').catch(error => {
    console.error('Error fetching categoryList:', error);
    return [];
  });

  Promise.allSettled([topBooksPromise, categoryListPromise])
    .then(results => {
      const topBooksResult = results[0];
      const categoryListResult = results[1];

      if (topBooksResult.status === 'fulfilled') {
        console.log('Top Books:', topBooksResult.value);
        // Виклик функції для рендеру секції Мирослави
        // checkAndRenderHomePage();
        // addBooksListeners();
      }

      if (categoryListResult.status === 'fulfilled') {
        console.log('Category List:', categoryListResult.value);

        // checkAndRenderHomePage();
      }
    })
    .finally(() => {
      console.log('Both requests are settled.');
      // Додатковий код, який буде виконано незалежно від результатів запитів
    });
}

document
  .querySelector('.caterories-content')
  .addEventListener('click', onClickBook);
function onClickBook(e) {
  e.preventDefault();
  console.log('onClickBook');
  if (!e.target.closest('.js-click-book')) {
    return;
  }
  openModal(e);
}

// function addBooksListeners() {
//   document
//     .querySelector('.caterories-content')
//     .addEventListener('click', onClickBook);

//   function onClickBook(e) {
//     e.preventDefault();
//     if (!e.target.closest('.js-click-book')) {
//       return;
//     }
//     openModal(e);
//   }
// }

function checkAndRenderHomePage() {
  const activeCategory = document.querySelector('.active');
  if (
    activeCategory &&
    activeCategory.textContent.trim() === 'All categories'
  ) {
    renderingHomePage();
  }
}

// window.onresize = throttle(() => {
//   checkAndRenderHomePage();
// }, 100);

firstRenderHome();

// function firstRenderHome() {
//        serviceBookAPI('topBooks').then(data => {
//         console.log('Top Books:', data);
//         // Виклик функції для рендеру секції Мирослави

//     }).catch(error => console.error(error)).finally()

//   serviceBookAPI('categoryList').then(data => {
//         console.log('Category List:', data);
//         // Виклик функції для рендеру секції Ростислава

//     }).catch(error => console.error(error)).finally()

// }

// firstRenderHome()

// import serviceBookAPI from '../book-api/service-book-api';

// function firstRenderHome() {
//   const topBooksPromise = serviceBookAPI('topBooks').catch(error => {
//     console.error('Error fetching topBooks:', error);
//     return [];
//   });

//   const categoryListPromise = serviceBookAPI('categoryList').catch(error => {
//     console.error('Error fetching categoryList:', error);
//     return [];
//   });

//   Promise.allSettled([topBooksPromise, categoryListPromise])
//     .then(results => {
//       const topBooksResult = results[0];
//       const categoryListResult = results[1];

//       if (topBooksResult.status === 'fulfilled') {
//         console.log('Top Books:', topBooksResult.value);
//         // Виклик функції для рендеру секції Мирослави
//       }

//       if (categoryListResult.status === 'fulfilled') {
//         console.log('Category List:', categoryListResult.value);
//         // Виклик функції для рендеру секції Ростислава
//       }
//     })
//     .finally(() => {
//       console.log('Both requests are settled.');
//       // Додатковий код, який буде виконано незалежно від результатів запитів
//     });
// }
// function checkAndRenderHomePage() {
//   const activeCategory = document.querySelector('.active');
//   if (activeCategory && activeCategory.textContent.trim() === 'All categories') {
//     renderingHomePage();
//   }
// }

// window.onresize = throttle(() => {
//   checkAndRenderHomePage();
// }, 100);
// firstRenderHome();

// import throttle from 'lodash.throttle';
// import { renderingHomePage } from '..//index/createHomeBooks';
// import serviceBookAPI from '..//book-api/service-book-api';

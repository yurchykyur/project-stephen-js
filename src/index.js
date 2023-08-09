import './js/index/loader';
import './js/index/gotop';
import './js/index/modal';
import './js/burger-menu/burger-menu';
import './js/first-render/first-render-home';
import './js/header/anti-flicker.js';
import './js/header/header.js';
import './js/best-sellers/best-sellers';
import './js/best-sellers/fetchTopBooks';
import './js/index/categories';
import './js/banner/support-ukraine';

// import serviceBookAPI from './js/book-api/service-book-api';
// import renderCategories from './js/index/categories';

// const topBooksPromise = serviceBookAPI('topBooks').catch(error => {
//   console.error('Error fetching topBooks:', error);
//   return [];
// });

// const categoryListPromise = serviceBookAPI('categoryList').catch(error => {
//   console.error('Error fetching categoryList:', error);
//   return [];
// });

// Promise.allSettled([topBooksPromise, categoryListPromise])
//   .then(results => {
//     const topBooksResult = results[0];
//     const categoryListResult = results[1];

//     if (topBooksResult.status === 'fulfilled') {
//       console.log('Top Books:', topBooksResult.value);
//       // Виклик функції для рендеру секції Мирослави
//     }

//     if (categoryListResult.status === 'fulfilled') {
//       renderCategories(categoryListResult.value);

//       console.log('Category List:', categoryListResult.value);
//       // Виклик функції для рендеру секції Ростислава
//     }
//   })
//   .finally(() => {
//     console.log('Both requests are settled.');
//     // Додатковий код, який буде виконано незалежно від результатів запитів
//   });

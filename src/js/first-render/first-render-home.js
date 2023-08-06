// import serviceBookAPI from '../book-api/service-book-api'

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

import serviceBookAPI from '../book-api/service-book-api';

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
      }

      if (categoryListResult.status === 'fulfilled') {
        console.log('Category List:', categoryListResult.value);
        // Виклик функції для рендеру секції Ростислава
      }
    })
    .finally(() => {
      console.log('Both requests are settled.');
      // Додатковий код, який буде виконано незалежно від результатів запитів
    });
}

firstRenderHome();
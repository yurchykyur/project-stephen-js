import throttle from 'lodash.throttle';
import { renderingHomePage } from '../best-sellers/best-sellers';
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
        checkAndRenderHomePage();
      }

      if (categoryListResult.status === 'fulfilled') {
        console.log('Category List:', categoryListResult.value);
        
        checkAndRenderHomePage();
      }
    })
    .finally(() => {
      console.log('Both requests are settled.');
      // Додатковий код, який буде виконано незалежно від результатів запитів
    });
}

function checkAndRenderHomePage() {
  const activeCategory = document.querySelector('.active');
  if (activeCategory && activeCategory.textContent.trim() === 'All categories') {
    renderingHomePage();
  }
}

window.onresize = throttle(() => {
  checkAndRenderHomePage();
}, 100);



firstRenderHome();

import './js/components/gotop';
import './js/components/modal';
import './js/header/burger-menu';
import './js/header/anti-flicker.js';
import './js/header/header.js';
import './js/banner/support-ukraine';

import serviceBookAPI from './js/book-api/service-book-api';
import renderCategories from './js/index/categories';
import onRenderBestsellers from './js/index/best-sellers'
import {openModal} from './js/index/book-card-modal'

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
        onRenderBestsellers( topBooksResult.value)
    }

    if (categoryListResult.status === 'fulfilled') {
      renderCategories(categoryListResult.value);      
    }
  })
  .finally(() => {
    });

document
  .querySelector('.caterories-content')
  .addEventListener('click', onClickBook);
function onClickBook(e) {
  e.preventDefault();
  if (!e.target.closest('.js-click-book')) {
    return;
  }
  openModal(e);
}
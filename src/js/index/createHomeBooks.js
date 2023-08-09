import getRefs from '../index/refs';
 import { fetchingTopBooks } from '../book-api/service-book-api';
 import { createHomeBookCard } from '../index/render-book';
 import renderingByCategory from '../index/render-category';
//  import addBooksListeners from '';
 const { galleryRef } = getRefs();

export function renderingHomePage() {
  galleryRef.innerHTML = '';
  if (document.documentElement.clientWidth < 768) {
    galleryRef.insertAdjacentHTML(
      'beforeend',
      '<h2 class="gallery-title">Best Sellers <span class="gellery-title-akcent">Books</span></h2>'
    );
    fetchingTopBooks().then(response => {
      for (let elem of response) {
        galleryRef.insertAdjacentHTML(
          'beforeend',
          `<h3 class="gallery-category">${elem.books[0].list_name}</h3>`
        );
        galleryRef.insertAdjacentHTML(
          'beforeend',
          createHomeBookCard(elem.books[0])
        );
        galleryRef.insertAdjacentHTML(
          'beforeend',
          `<button class="gallery-see-more-btn" data-category="${elem.books[0].list_name}">See more</button>`
        );
      }
      const btnRef = document.querySelectorAll('.gallery-see-more-btn');
      for (let i = 0; i < btnRef.length; i++) {
        btnRef[i].addEventListener('click', renderingByCategory);
      }
      // addBooksListeners();
    });
  } else if (document.documentElement.clientWidth < 1440) {
    galleryRef.insertAdjacentHTML(
      'beforeend',
      '<h2 class="gallery-title">Best Sellers <span class="gellery-title-akcent">Books</span></h2>'
    );
    fetchingTopBooks().then(response => {
      for (let elem of response) {
        galleryRef.insertAdjacentHTML(
          'beforeend',
          `<h3 class="gallery-category">${elem.books[0].list_name}</h3>
          <div class="gallery-list"></div>`
        );
        const nodes = document.querySelectorAll('.gallery-list');
        const galleryListRef = nodes[nodes.length - 1];
        for (let i = 0; i < 3; i++) {
          galleryListRef.insertAdjacentHTML(
            'beforeend',
            createHomeBookCard(elem.books[i])
          );
        }
        galleryRef.insertAdjacentHTML(
          'beforeend',
          `<button class="gallery-see-more-btn" data-category="${elem.books[0].list_name}">See more</button>`
        );
      }
      const btnRef = document.querySelectorAll('.gallery-see-more-btn');
      for (let i = 0; i < btnRef.length; i++) {
        btnRef[i].addEventListener('click', renderingByCategory);
      }
      // addBooksListeners();
    });
  } else {
    galleryRef.insertAdjacentHTML(
      'beforeend',
      '<h2 class="gallery-title">Best Sellers <span class="gellery-title-akcent">Books</span></h2>'
    );
    fetchingTopBooks().then(response => {
      for (let elem of response) {
        galleryRef.insertAdjacentHTML(
          'beforeend',
          `<h3 class="gallery-category">${elem.books[0].list_name}</h3>
          <div class="gallery-list"></div>`
        );
        var nodes = document.querySelectorAll('.gallery-list');
        const galleryListRef = nodes[nodes.length - 1];
        for (let i = 0; i < 5; i++) {
          galleryListRef.insertAdjacentHTML(
            'beforeend',
            createHomeBookCard(elem.books[i])
          );
        }
        galleryRef.insertAdjacentHTML(
          'beforeend',
          `<button class="gallery-see-more-btn" data-category="${elem.books[0].list_name}">See more</button>`
        );
      }
      const btnRef = document.querySelectorAll('.gallery-see-more-btn');
      for (let i = 0; i < btnRef.length; i++) {
        btnRef[i].addEventListener('click', renderingByCategory);
      }
      // addBooksListeners();
    });
  }

  // scrolling to top
  window.scrollTo(0, 0);
}
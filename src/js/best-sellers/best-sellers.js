import getRefs from '../index/refs';
 import { fetchingTopBooks } from '../book-api/service-book-api';
 import { createHomeBookCard } from '../best-sellers/fetchTopBooks';
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
      '<h2 class="gallery-title">Best Sellers<span class="gellery-title-akcent">Books</span></h2>'
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



// import { fetchTopBooks } from './fetchTopBooks';
// import { openModal } from '../index/book-card-modal';

// const ulBooksListTop = document.querySelector('.books-list-top');
// const ulBooksList = document.querySelector('.books-list');
// const divBooksList = document.querySelector('.books-list-title');
// const titleBooksList = document.querySelector('.books-list-title');

// let limit = 1;

// const title = document.querySelector('title');
// if (title.text == 'Bookshelf') {
//     onRenderBestsellers();
// }   

// export function onRenderBestsellers() {
//     fetchTopBooks().then(dataBestsellers).catch();
// }


// function dataBestsellers(data) {
//     resizeLimit();

//     function resizeLimit() {
//         const vw = Math.max(
//             document.documentElement.clientWidth || 0,
//             window.innerWidth || 0
//         );
//         if (vw < 768) {
//             limit = 1;
//         } else if (vw < 1440) {
//             limit = 3;
//         } else {
//             limit = 5;
//         }
//     }
//     ulBooksList.innerHTML = '';
//     const dataBestsellers = data
//         .map(elem => {
//             let element1 = `<li><h2 class="books-list-title-li">${elem.list_name}</h2>
//     <ul class="category-top-books">`;
//             let elementArray = [];
//             for (let i = 0; i < limit; i += 1) {
//                 let element = `<li class='js-click-book' data-bookid="${elem.books[i]._id}">   
//                 <a class="books-list-link">
//         <div class="thumb">
//           <img class="books-list-img" data-id="${elem.books[i]._id}" src="${elem.books[i].book_image}" alt="${elem.books[i].title}">
//           <div class="actions-card">
//           </div>
//         </div>
//           <div class="content">
//             <h3 class="books-list-name">${elem.books[i].title}</h3>
//             <h4 class="books-list-text">${elem.books[i].author}</h4>  
//           </div>
//         </a>
//       </li>`;
//                 elementArray.push(element);
//             }
//             let element3 = `</ul>
//       <div class="top-btn-wrapper">
//         <button data-filter="${elem.list_name}" class="list-name best-sellers-btn">see more</button>
//         </div>
//         </li>`;
//             const element2 = elementArray.join(' ');
//             return element1 + element2 + element3;
//         })
//         .join(' ');

//     ulBooksListTop.innerHTML = dataBestsellers;

//     const dataMarkupTitle = `<h2>Best Sellers <span class="colortext">Books</span></h2>`;
//     divBooksList.innerHTML = dataMarkupTitle;
//     onCategorriesBtn();

// }


// function onCategorriesBtn() {
//     // console.log('onCategorriesBtn');
//     const categorriesBtn = document.querySelectorAll('.best-sellers-btn');
//     categorriesBtn.forEach(element =>
//         element.addEventListener('click', onFiltred));
// }



// let mask = document.querySelector('.mask');
// function onLoader() {
// //   mask.classList.add('visible');
// }

// function onFiltred(event) {
//     event.preventDefault();

//     if (event.target.tagName !== 'LI' && event.target.tagName !== 'BUTTON')
//         return;

//     let cateroryName = event.target.dataset['filter'];
//     let cateroryNamePart = cateroryName.split(' ').slice(0, -1).join(' ');
//     let lastWord = cateroryName.split(' ').pop();

//     const dataMarkupTitle = `<h2>${cateroryNamePart} <span>${lastWord}</span></h2>`;
//     titleBooksList.innerHTML = dataMarkupTitle;

//     removeActiveClass();

//     event.target.classList.add('active');
//     function removeActiveClass() {
//         const listNames = document.querySelectorAll('.categories-list-name');
//         listNames.forEach(elem => {
//             if (elem.textContent === cateroryName) {
//                 elem.classList.add('active');
//             } else {
//                 elem.classList.remove('active');
//             }
//         });
//     }

//     if (cateroryName === 'Best Sellers Books') {
//         onRenderBestsellers();
//         return;
//     }
//     onLoader();
//     console.log(cateroryName); 
//     console.log(dataMarkup);
//     fetchBooks(cateroryName).then(dataMarkup).catch();
// }

// function dataMarkup(booksData) {
//     ulBooksListTop.innerHTML = '';
//     if (booksData.length === 0) {
//         console.log('Немає інфо');

//         const dataMarkup = `
//     <img src="../images/empty-page.png" alt="Empty list image">
//     `;
//         ulBooksList.innerHTML = '';
//         listEmpty.innerHTML = dataMarkup;
//         return;
//     }

//     const dataMarkup = booksData
//         .map(bookData => {
//             return `
//       <li>
//         <a class="books-list-link">
//         <div class="thumb">
//           <img class="books-list-img" data-id="${bookData._id}" src="${bookData.book_image}" alt="${bookData.title}">
//           <div class="actions-card">
//           </div>

//           </div>
//           <div class="content">
//             <h3 class="books-list-name">${bookData.title}</h3>
//             <p class="books-list-text">${bookData.author}</p>  
//           </div>
//         </a>
//       </li>`;
//         })
//         .join(' ');
    
//     ulBooksList.innerHTML = dataMarkup;
//     offLoader();
// }

// function fetchBooks(cateroryName) {
//   return fetch(
//     `https://books-backend.p.goit.global/books/category?category=${cateroryName}`
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function offLoader() {
//   console.log('mask');
// //   mask.classList.remove('visible');
// }


// document.querySelector('.books-list-top').addEventListener('click', onClickBook)
// function onClickBook(e) {
//   e.preventDefault();
//     if (!e.target.closest('.js-click-book')) {
//         return
//     }

//     openModal(e)
// }
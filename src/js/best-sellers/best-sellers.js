import { fetchTopBooks } from './fetchTopBooks';
import { openModal } from '../index/book-card-modal';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import LocalStorageManager from '../service-local-storage/local-storage-manager.js';

const LS_KEY = 'top books';

const ulBooksListTop = document.querySelector('.books-list-top');
const ulBooksList = document.querySelector('.books-list');
const divBooksList = document.querySelector('.books-list-title');
const titleBooksList = document.querySelector('.books-list-title');

let limit = 1;
let DATA = [];

const title = document.querySelector('title');
if (title.text == 'Bookshelf') {
  onRenderBestsellers();
}

export function onRenderBestsellers() {
  console.log('eeeeeee');
  fetchTopBooks()
    .then(data => dataBestsellers(data, true))
    .catch();
}

const screenController = {
  a: true,
  b: true,
  c: true,
};

function onScreenController(width) {
  let needRender = false;
  if (width < 768 && screenController.a) {
    limit = 1;
    screenController.a = false;
    screenController.b = true;
    screenController.c = true;
    console.log(
      'width < 768 && scrollController.a',
      width < 768 && screenController.a
    );
    needRender = true;
  }
  if (width >= 768 && width < 1440 && screenController.b) {
    limit = 3;
    screenController.a = true;
    screenController.b = false;
    screenController.c = true;
    console.log(
      'width > 768 && width < 1440 && scrollController.b',
      width > 768 && width < 1440 && screenController.b
    );
    needRender = true;
  }
  if (width >= 1440 && screenController.c) {
    limit = 5;
    screenController.a = true;
    screenController.b = true;
    screenController.c = false;
    console.log(
      'width > 1440 && scrollController.c',
      width > 1440 && screenController.c
    );
    needRender = true;
  }
  return needRender;
}

window.addEventListener('resize', () => {
  const needRender = onScreenController(window.innerWidth);
  console.log('needRender', needRender);
  if (needRender) {
    const data = [...DATA];
    dataBestsellers(data);
  }
});

function dataBestsellers(data, isFirstRender = false) {
  LocalStorageManager.saveData(LS_KEY, data);
  console.log('dataBestsellers');
  if (isFirstRender) {
    DATA = [...data];
    onScreenController(window.innerWidth);
  }
  console.log(data);

  ulBooksList.innerHTML = '';
  const dataBestsellers = data
    .map(elem => {
      let element1 = `<li><h2 class="books-list-title-li">${elem.list_name}</h2>
    <ul class="category-top-books" data-filter="${elem.list_name}">`;
      let elementArray = [];
      for (let i = 0; i < limit; i += 1) {
        let element = `<li class='js-click-book' data-bookid="${elem.books[i]._id}">   
                   <a class="books-list-link">
        <div class="thumb">
          <img class="books-list-img" data-id="${elem.books[i]._id}" src="${elem.books[i].book_image}" alt="${elem.books[i].title}">
          <div class="actions-card">
        <p class="discription">quick view</p>
          </div>
        </div>
          <div class="content">
            <h3 class="books-list-name">${elem.books[i].title}</h3>
            <h4 class="books-list-text">${elem.books[i].author}</h4>  
          </div>
        </a>
      </li>`;
        elementArray.push(element);
      }

      let element3 = '';
      if (limit < elem.books.length) {
        element3 = `<div class="top-btn-wrapper">
        <button data-filter="${elem.list_name}" class="list-name best-sellers-btn">see more</button>
        </div>`;
      }

      const element4 = '</ul>';
      const element5 = '</li>';
      const element2 = elementArray.join(' ');
      return element1 + element2 + element4 + element3 + element5;
    })
    .join(' ');
  console.log(ulBooksListTop);

  ulBooksListTop.innerHTML = dataBestsellers;
  const dataMarkupTitle = `<h2>Best Sellers <span class="colortext">Books</span></h2>`;
  divBooksList.innerHTML = dataMarkupTitle;
  onCategorriesBtn();
}

function onCategorriesBtn() {
  const categorriesBtn = document.querySelectorAll('.best-sellers-btn');
  categorriesBtn.forEach(element =>
    element.addEventListener('click', onFiltred)
  );
}

let mask = document.querySelector('.mask');
function onLoader() {
  //   mask.classList.add('visible');
}

function onFiltred(event) {
  event.preventDefault();

  let cateroryName = event.target.dataset['filter'];
  let cateroryNamePart = cateroryName.split(' ').slice(0, -1).join(' ');
  let lastWord = cateroryName.split(' ').pop();

  if (cateroryName === 'Best Sellers Books') {
    onRenderBestsellers();
    return;
  }
  onLoader();
  console.log(cateroryName);

  const getDataLS = LocalStorageManager.getData(LS_KEY);
  creatMarkup(getDataLS, cateroryName);
}

function dataMarkup(booksData, dataAttr) {
  if (booksData.length === 0) {
    console.log('Немає інфо');

    const dataMarkup = `
    <img src="../images/empty-page.png" alt="Empty list image">
    `;
    ulBooksList.innerHTML = '';
    listEmpty.innerHTML = dataMarkup;
    return;
  }

  const dataMarkup = booksData
    .map(bookData => {
      return `
      <li class='js-click-book'>
        <a class="books-list-link">
        <div class="thumb">
          <img class="books-list-img" data-id="${bookData._id}" src="${bookData.book_image}" alt="${bookData.title}">
          <div class="actions-card">
        <p class="discription">quick view</p>
          </div>

          </div>
          <div class="content">
            <h3 class="books-list-name">${bookData.title}</h3>
            <p class="books-list-text">${bookData.author}</p>  
          </div>
        </a>
      </li>`;
    })
    .join('');

  document.querySelector(`[data-filter="${dataAttr}"]`).innerHTML = dataMarkup;
  console.log(
    "document.querySelector('.category-top-books",
    document.querySelector(`[data-filter="${dataAttr}"]`)
  );
}

function creatMarkup(booksData, dataAttr) {
  const categorBooks = booksData.filter(elem => elem.list_name === dataAttr);
  const { books } = categorBooks[0];
  const booksLiChildren = document.querySelector(`[data-filter="${dataAttr}"]`)
    .children.length;

  let start = 0;
  let counterEl = 0;

  if (booksLiChildren + limit >= books.length) {
    start = booksLiChildren;
    counterEl = books.length - booksLiChildren;

    document.querySelector(`button[data-filter="${dataAttr}"]`).style.display =
      'none';
    Notify.info(`We're sorry, but you've reached the end of ${dataAttr}.`);
  }

  if (booksLiChildren + limit < books.length) {
    start = booksLiChildren;
    counterEl = limit;
  }

  let stringBooksMarkup = '';
  for (let i = 0; i < counterEl; i += 1) {
    stringBooksMarkup += `<li class="js-click-book" data-bookid="${
      books[start + i]._id
    }">
        <a class="books-list-link">
        <div class="thumb">
          <img class="books-list-img" data-id="${books[start + i]._id}" src="${
      books[start + i].book_image
    }" alt="${books[start + i].title}">
          <div class="actions-card">
        <p class="discription">quick view</p>
          </div>
          </div>
          <div class="content">
            <h3 class="books-list-name">${books[start + i].title}</h3>
            <p class="books-list-text">${books[start + i].author}</p>
          </div>
        </a>
      </li>`;
  }

  document
    .querySelector(`[data-filter="${dataAttr}"]`)
    .insertAdjacentHTML('beforeend', stringBooksMarkup);
  console.log(stringBooksMarkup);
}

function fetchBooks(cateroryName) {
  return fetch(
    `https://books-backend.p.goit.global/books/category?category=${cateroryName}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

// document.querySelector('.books-list-top').addEventListener('click', onClickBook)
// function onClickBook(e) {
//   e.preventDefault();
//     if (!e.target.closest('.js-click-book')) {
//         return
//     }
//   openModal(e)
// }

import { fetchTopBooks } from '../best-sellers/fetchTopBooks';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import LocalStorageManager from '../service-local-storage/local-storage-manager.js';
import serviceBookAPI from '../book-api/service-book-api';

const LS_KEY = 'top books';

const ulBooksListTop = document.querySelector('.books-list-top');
const ulBooksList = document.querySelector('.books-list');
const divBooksList = document.querySelector('.books-list-wrapper');

let limit = 1;
let DATA = [];

// const title = document.querySelector('title');
// if (title.text == 'Bookshelf') {
//   onRenderBestsellers();
// }

export default function onRenderBestsellers(data) {
dataBestsellers(data, true)
  // fetchTopBooks()
  //   .then(data => dataBestsellers(data, true))
  //   .catch();
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
    needRender = true;
  }
  if (width >= 768 && width < 1440 && screenController.b) {
    limit = 3;
    screenController.a = true;
    screenController.b = false;
    screenController.c = true;
    needRender = true;
  }
  if (width >= 1440 && screenController.c) {
    limit = 5;
    screenController.a = true;
    screenController.b = true;
    screenController.c = false;
    needRender = true;
  }
  return needRender;
}

window.addEventListener('resize', () => {
  const needRender = onScreenController(window.innerWidth);

  if (needRender) {
    const data = [...DATA];
    dataBestsellers(data);
  }
});

function dataBestsellers(data, isFirstRender = false) {
  LocalStorageManager.saveData(LS_KEY, data);

  if (isFirstRender) {
    DATA = [...data];
    onScreenController(window.innerWidth);
  }


  ulBooksList.innerHTML = '';
  const dataBestsellers = data
    .map(elem => {
      let element1 = `<li><h2 class="gallery-title">${elem.list_name}</h2>
    <ul class="gallery-book-list" data-filter="${elem.list_name}">`;
      let elementArray = [];
      for (let i = 0; i < limit; i += 1) {
        let element = `<li class='gallery-book-item js-click-book' data-bookid="${elem.books[i]._id}">
                   <a class="gallery-book-link">

        <div class="thumb">
          <img class="gallery-book-img" data-id="${elem.books[i]._id}" src="${elem.books[i].book_image}" alt="${elem.books[i].title}">
          <div class="actions-card">
        <p class="action-text">quick view</p>
          </div>
        </div>
          <div class="content">
            <h3 class="gallery-book-name">${elem.books[i].title}</h3>
            <h4 class="gallery-book-text">${elem.books[i].author}</h4>
          </div>
        </a>
      </li>`;
        elementArray.push(element);
      }

      let element3 = '';
      // if (limit < elem.books.length) {
        element3 = `<div class="top-btn-wrapper">
        <button data-filter="${elem.list_name}" class="list-name best-sellers-btn">see more</button>
        </div>`;
      // }

      const element4 = '</ul>';
      const element5 = '</li>';
      const element2 = elementArray.join(' ');
      return element1 + element2 + element4 + element3 + element5;
    })
    .join(' ');

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

async function onFiltred(event) {
  event.preventDefault();

  let cateroryName = event.target.dataset['filter'];
  let cateroryNamePart = cateroryName.split(' ').slice(0, -1).join(' ');
  let lastWord = cateroryName.split(' ').pop();

  if (cateroryName === 'Best Sellers Books') {
    onRenderBestsellers();
    return;
  }

  // const getDataLS = LocalStorageManager.getData(LS_KEY);
const booksByCategory = await serviceBookAPI('category', {
  category: cateroryName,
});

  creatMarkup(booksByCategory, cateroryName);
}

function creatMarkup(books, dataAttr) {
      document.querySelector(`button[data-filter="${dataAttr}"]`).style.display =
      'none';
    Notify.info(`We're sorry, but you've reached the end of ${dataAttr}.`);
  
  let stringBooksMarkup = '';
  for (let i = 0; i < books.length; i += 1) {
    stringBooksMarkup += `<li class="gallery-book-item js-click-book" data-bookid="${
      books[i]._id
    }">
        <a class="gallery-book-link">
        <div class="thumb">
          <img class="gallery-book-img" data-id="${books[i]._id}" src="${
      books[i].book_image
    }" alt="${books[i].title}">
          <div class="actions-card">
        <p class="action-text">quick view</p>
          </div>
          </div>
          <div class="content">
            <h3 class="gallery-book-name">${books[i].title}</h3>
            <h4 class="gallery-book-text">${books[i].author}</h4>
          </div>
        </a>
      </li>`;
  }

  document
    .querySelector(`[data-filter="${dataAttr}"]`)
    .innerHTML =  stringBooksMarkup;
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


import { fetchTopBooks } from './fetchTopBooks';
// import { onFiltred } from './categories/categories';
import { offLoader, onLoader } from '../loader.js';

const ulBooksListTop = document.querySelector('.books-list-top');
const ulBooksList = document.querySelector('.books-list');
const divBooksList = document.querySelector('.books-list-title');
let limit = 1;

const title = document.querySelector('title');
if (title.text == 'Bookshelf') {
    onRenderFiltred();
    navList.addEventListener('click', onFiltred);
}

export function onFiltred(event) {
    event.preventDefault();

    // if (event.target.tagName !== 'LI' && event.target.tagName !== 'BUTTON')
    //     return;

    // let cateroryName = event.target.dataset['filter'];
    // let cateroryNamePart = cateroryName.split(' ').slice(0, -1).join(' ');
    // let lastWord = cateroryName.split(' ').pop();

    // const dataMarkupTitle = `<h2>${cateroryNamePart} <span>${lastWord}</span></h2>`;
    // titleBooksList.innerHTML = dataMarkupTitle;

    // removeActiveClass();
    // event.target.classList.add('active');

    // function removeActiveClass() {
    //     const listNames = document.querySelectorAll('.categories-list-name');
    //     listNames.forEach(elem => {
    //         if (elem.textContent === cateroryName) {
    //             elem.classList.add('active');
    //         } else {
    //             elem.classList.remove('active');
    //         }
    //     });
    // }

    if (cateroryName === 'Best Sellers Books') {
        onRenderBestsellers();
        return;
    }
    onLoader();
    fetchBooks(cateroryName).then(dataMarkup).catch();
}

// if (title.text == 'Bookshelf') {
//     onRenderBestsellers();
//     window.addEventListener(
//         'resize',
//         debounce(() => {
//             if (ulBooksList.textContent == '') {
//                 onRenderBestsellers();
//             } else return;
//         }, 250)
//     );
// }

export function onRenderBestsellers() {
    onLoader();
    fetchTopBooks().then(dataBestsellers).catch();
}

function dataBestsellers(data) {
    resizeLimit();

    function resizeLimit() {
        const vw = Math.max(
            document.documentElement.clientWidth || 0,
            window.innerWidth || 0
        );
        if (vw < 768) {
            limit = 1;
        } else if (vw < 1440) {
            limit = 3;
        } else {
            limit = 5;
        }
    }
    ulBooksList.innerHTML = '';
    const dataBestsellers = data
        .map(elem => {
            let element1 = `<li><h2 class="books-list-title">${elem.list_name}</h2>
    <ul class="category-top-books">`;
            let elementArray = [];
            for (let i = 0; i < limit; i += 1) {
                let element = `<li><a class="books-list-link" href="">
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
            let element3 = `</ul>
      <div class="top-btn-wrapper">
        <button data-filter="${elem.list_name}" class="list-name best-sellers-btn">see more</button>
        </div>
        </li>`;
            const element2 = elementArray.join(' ');
            return element1 + element2 + element3;
        })
        .join(' ');

    ulBooksListTop.innerHTML = dataBestsellers;

    const dataMarkupTitle = `<h2>Best Sellers <span>Books</span></h2>`;
    divBooksList.innerHTML = dataMarkupTitle;

    onCategorriesBtn();
    offLoader();
}

function onCategorriesBtn() {
    const categorriesBtn = document.querySelectorAll('.best-sellers-btn');
    categorriesBtn.forEach(element =>
        element.addEventListener('click', onFiltred)
    );
}
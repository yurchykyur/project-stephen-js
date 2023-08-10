import * as basicLightbox from 'basiclightbox';
import sprite from '/src/images/icons.svg';
import serviceBookAPI from '../book-api/service-book-api';

// import 'basicLightbox/dist/basicLightbox.min.css'

const SHOPPING_LIST_LS = 'shopping list';

const bodyEl = document.querySelector('body');
const URL = 'https://books.backend.p.goit.global/books/';
let idBook = '';

async function getBookInfo(bookId) {
  // const response = await fetch(`${URL}${bookId}`);
  // const responseData = await response.json();
  const responseData = await serviceBookAPI('book', { id: bookId });
  // console.log('responseData', responseData)
  const books = {
    id: responseData._id,
    img: responseData.book_image,
    bookName: responseData.list_name,
    author: responseData.author,
    description: responseData.description,
    shops: responseData.buy_links,
    title: responseData.title,
  };
  return books;
}

const shops = {
  Amazon: `<svg class="amazon" width="62" height="19"><use href="${sprite}#amazon"></use></svg>`,
  'Apple Books': `<svg class="apple-book" width="33" height="32"><use href="${sprite}#applebook"></use></svg>`,
  Bookshop: `<svg class="bookshop" width="38" height="36"><use href="${sprite}#bookshop"></use></svg>`,
};

function getImages(name) {
  if (name in shops) {
    const img = shops[name];
    return img;
  } else return '';
}

async function createMarkup(bookId) {
  // console.log("textmarkup");
  const books = await getBookInfo(bookId);
  const description =
    books.description.trim() !== '' ? books.description : 'No description';
  console.log(description);
  const shopName = books.shops
    .filter((_, index) => [0, 1, 4].includes(index))
    .map(({ name, url }) => {
      const img = getImages(name);
      return `<li class="item book-item"><a href="${url}" target="_blank" class="link link-img">${img}</a></li>`;
    })
    .join('');

  // console.log(shopName);
  const instance = basicLightbox.create(
    `
    <div class="book-card-container js-modal">
      <button type="button" class="close-btn">
        <svg class="close-img" width="24" height="24"><use href="${sprite}#close-btn"></use></svg>
      </button>
      <div class="book-info-container">
        <div class="book-cover">
          <img src="${books.img}" alt="book cover image" width="192" height="280">
        </div>
        <div class="book-info-modal">
          <h2 class="book-title">${books.title}</h2>
          <p class="book-author">${books.author}</p>
          <p class="book-description">${description}</p>
          <ul class="list shop-list">${shopName}</ul>
        </div>
      </div>
      <button type="button" class="btn-modal" id="add">Add to shopping list</button>
      <button type="button" class="btn-modal" id="remove">Remove from the shopping list</button>
      <p class="text-remove hidden">Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>
    </div>`,
    {
      onShow: () => {
        console.log('idBook', idBook);

        document.addEventListener('keydown', evt => closeModal(evt, instance));
        bodyEl.style.overflow = 'hidden';
      },
      onClose: () => {
        document.removeEventListener('keydown', evt =>
          closeModal(evt, instance)
        );
        bodyEl.style.overflow = 'auto';
      },
    }
  );
  instance.show();
  instance.element().querySelector('.close-btn').onclick = instance.close;

  const addBtn = instance.element().querySelector('#add');
  const removeBtn = instance.element().querySelector('#remove');
  const textRemove = instance.element().querySelector('.text-remove');

  const savedBooks = getSavedBooks();
  const bookInList = savedBooks.find(item => item.id === bookId);

  if (bookInList) {
    addBtn.classList.add('hidden');
    removeBtn.classList.remove('hidden');
    textRemove.classList.remove('hidden');
  } else {
    addBtn.classList.remove('hidden');
    removeBtn.classList.add('hidden');
    textRemove.classList.add('hidden');
  }

  addBtn.addEventListener('click', () => {
    addElement(idBook, books);
    addBtn.classList.add('hidden');
    removeBtn.classList.remove('hidden');
    textRemove.classList.remove('hidden');
  });

  removeBtn.addEventListener('click', () => {
    removeElement(idBook);
    addBtn.classList.remove('hidden');
    removeBtn.classList.add('hidden');
    textRemove.classList.add('hidden');
  });

  // return bookCard;
}

function closeModal(evt, instance) {
  if (evt.key === 'Escape') {
    instance.close();
    bodyEl.style.overflow = 'auto';
  }
}

//import to gallery
export function openModal(evt) {
  // console.log(evt.target.closest('.js-click-book').dataset.bookid);
  const clickedBook = evt.target.closest('.js-click-book');
  if (!clickedBook) return;
  const bookId = clickedBook.dataset.bookid;
  idBook = bookId;
  createMarkup(bookId);
}

function addElement(key, value) {
  let existingItems = JSON.parse(localStorage.getItem(SHOPPING_LIST_LS)) || [];
  existingItems.push({ id: key, book: value });
  localStorage.setItem(SHOPPING_LIST_LS, JSON.stringify(existingItems));
}

function removeElement(key) {
  let existingItems = JSON.parse(localStorage.getItem(SHOPPING_LIST_LS)) || [];
  existingItems = existingItems.filter(item => item.id !== key);
  localStorage.setItem(SHOPPING_LIST_LS, JSON.stringify(existingItems));
}

function getSavedBooks() {
  return JSON.parse(localStorage.getItem(SHOPPING_LIST_LS)) || [];
}

import createPagination from './pagination';
import shoppingMarkap from './shopping-markap-card';
import LocalStorageManager from '../service-local-storage/local-storage-manager';

const shRefs = {
  list: document.querySelector('.shopping-list-list'),
  emptyPage: document.querySelector('.empty-sh-page'),
  SHOPPING_LIST_LS: 'shopping list',
};

shRefs.list.addEventListener('click', onDelete);

export default function renderCards(arr = []) {
  shRefs.list.innerHTML = '';
  if (!arr.length) {
    emptyPage();
  } else {
    const decipherArr = arrDecipher(arr);
    shRefs.emptyPage.classList.add('visually-hidden');
    shRefs.list.insertAdjacentHTML('beforeend', shoppingMarkap(decipherArr));
  }
}

function arrDecipher(arr) {
  return arr.map(obj => ({
    _id: obj.book.id,
    book_image: obj.book.img,
    title: obj.book.title,
    list_name: obj.book.bookName,
    description: obj.book.description,
    author: obj.book.author,
    buy_links: obj.book.shops,
  }));
}

function onDelete(eve) {
  const btn = eve.target.closest('.trash-btn');
  if (!btn) {
    return;
  }
  try {
    const bookArr = LocalStorageManager.getData(shRefs.SHOPPING_LIST_LS);
    localStorage.removeItem(shRefs.SHOPPING_LIST_LS);

    const newBookArr = bookArr.filter(book => book.id !== btn.id); //replaced _id with id for encryption

    LocalStorageManager.saveData(shRefs.SHOPPING_LIST_LS, newBookArr);

    if (!newBookArr.length) {
      createPagination(newBookArr, 1, false, true);
      return;
    }
    createPagination(newBookArr, 1, false, true);
  } catch (error) {
    console.log('ERROR!', error);
  }
}

function emptyPage() {
  if (shRefs.emptyPage.classList.contains('visually-hidden')) {
    shRefs.emptyPage.classList.remove('visually-hidden');
  }
}

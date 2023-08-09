import sprite from '/src/images/icons.svg';
import createPagination from '../pagination/pagination';

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
    const bookArr = JSON.parse(localStorage.getItem(shRefs.SHOPPING_LIST_LS));
    localStorage.removeItem(shRefs.SHOPPING_LIST_LS);

    const newBookArr = bookArr.filter(book => book.id !== btn.id); //replaced _id with id for encryption

    localStorage.setItem(shRefs.SHOPPING_LIST_LS, JSON.stringify(newBookArr));

    if (!newBookArr.length) {
      renderCards(newBookArr);
      return;
    }
    // renderCards(newBookArr);
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

function shoppingMarkap(arr) {
  shRefs.emptyPage.classList.add('visually-hidden');
  return arr
    .map(
      ({
        _id,
        book_image,
        title,
        list_name,
        description,
        author,
        buy_links,
      }) => {
        let bookCover = `<svg class="book-logo">
        <use href="${sprite}#book"></use>
      </svg>`;
        if (book_image) {
          bookCover = `<img class="shopping-list-img"
                    src="${book_image}" alt="${title}" 
                    loading="lazy"/>`;
        }
        const amazonLinks = buy_links.find(obj => obj.name === 'Amazon').url;
        const applebookLinks = buy_links.find(
          obj => obj.name === 'Apple Books'
        ).url;
        const bookshopLinks = buy_links.find(
          obj => obj.name === 'Bookshop'
        ).url;
        return `<li class="shopping-list-item">
            <div class="sh-wrapper">
                ${bookCover}
            </div>
            <div class="shopping-list-info">
              <div class="sh-markap-wrapper">
                <button type="button" id ="${_id}"class="trash-btn">
                    <svg class="trash-logo">
                    <use href="${sprite}#trash"></use>
                    </svg>
                  </button>
                <h2 class="shopping-book-title">${title}</h2>
                <p class="shopping-book-polygraphy">${list_name}</p>
                <div class="sh-desc-wrapper">
                  <p class="shopping-book-desc">
                  ${description}
                  </p>
                </div>
              </div>
                
              <div class="sh-buy-wrapper" >
                <p class="shopping-book-author">${author}</p>
                  <ul class="links-to-buy">
                    <li class="item-to-buy">
                      <a href="${amazonLinks}" target="_blank" rel="noreferrer noopener nofollow">
                        <svg class="shop-logo-amazon">
                          <use href="${sprite}#amazon"></use>
                        </svg>
                      </a>
                    </li>
                    <li class="item-to-buy">
                      <a href="${applebookLinks}" target="_blank" rel="noreferrer noopener nofollow">
                        <svg class="shop-logo-applebook">
                          <use href="${sprite}#applebook"></use>
                        </svg>
                      </a>
                    </li>
                    <li class="item-to-buy">
                      <a href="${bookshopLinks}" target="_blank" rel="noreferrer noopener nofollow">
                        <svg class="shop-logo-bookshop">
                          <use href="${sprite}#bookshop"></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
          </li>`;
      }
    )
    .join('');
}

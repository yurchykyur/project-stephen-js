import sprite from '/src/images/icons.svg';
import amazon from '/src/images/modal/amazon.svg';
import applebook from '/src/images/modal/applebook.svg';
import bookshop from '/src/images/modal/bookshop.svg';
// delete below
import img13 from '/src/js/shopping-list/Rectangle 13.jpg';
import img14 from '/src/js/shopping-list/Rectangle 14.jpg';
import img15 from '/src/js/shopping-list/Rectangle 15.jpg';
import img16 from '/src/js/shopping-list/Rectangle 16.jpg';
import img17 from '/src/js/shopping-list/Rectangle 17.jpg';
import img18 from '/src/js/shopping-list/Rectangle 18.jpg';
import img19 from '/src/js/shopping-list/Rectangle 19.jpg';
const arr = [
  {
    id: '13',
    cover: img13,
    alt: 'book 13',
    title: 'I will find you',
    polygraphy: 'Hardcover fiction',
    description:
      'David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.',
    author: 'Harlan Coben',
  },
  {
    id: '14',
    cover: img14,
    alt: 'book 13',
    title: 'Wonder',
    polygraphy: 'Hardcover nonfiction',
    description:
      'August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ',
    author: 'R.J. Palacio',
  },
  {
    id: '15',
    cover: img15,
    alt: 'book 13',
    title: 'DAISY JONES & THE SIX',
    polygraphy: 'Hardcover nonfiction',
    description:
      'August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ',
    author: 'R.J. Palacio',
  },
  {
    id: '16',
    cover: img16,
    alt: 'book 13',
    title: 'Hello Beautiful',
    polygraphy: 'Hardcover nonfiction',
    description:
      'August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ',
    author: 'R.J. Palacio',
  },
  {
    id: '17',
    cover: img17,
    alt: 'book 13',
    title: 'SAVED',
    polygraphy: 'Hardcover nonfiction',
    description:
      'August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ',
    author: 'R.J. Palacio',
  },
  {
    id: '18',
    cover: img18,
    alt: 'book 13',
    title: 'STORM WATCH',
    polygraphy: 'Hardcover nonfiction',
    description:
      'August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ',
    author: 'R.J. Palacio',
  },
  {
    id: '19',
    cover: img19,
    alt: 'book 13',
    title: 'TOMORROW, AND TOMORROW, AND TOMORROW',
    polygraphy: 'Hardcover nonfiction',
    description:
      'August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ',
    author: 'R.J. Palacio',
  },
];

const obj = {
  _id: '643282b1e85766588626a0dc',
  amazon_product_url: 'https://www.amazon.com/dp/1984826395?tag=NYTBSREV-20',
  author: 'Alison Roman',
  book_image:
    'https://storage.googleapis.com/du-prd/books/images/9781984826398.jpg',
  title: 'SWEET ENOUGH',
};

// localStorage.setItem('shopping list', JSON.stringify(booksArr));

//delete up to heare

const shRefs = {
  list: document.querySelector('.shopping-list-list'),
  emptyPage: document.querySelector('.empty-sh-page'),
  SHOPPING_LIST_LS: 'shopping list',
};

shRefs.list.addEventListener('click', onDelete);

//renderCards(booksArr); // TO TEST,  delete

export default function renderCards(arr = []) {
  shRefs.list.innerHTML = '';
  if (!arr.length) {
    emptyPage();
  } else {
    shRefs.list.insertAdjacentHTML('beforeend', shoppingMarkap(arr));
  }
}

function onDelete(eve) {
  eve.preventDefault();
  const btn = eve.target.closest('.trash-btn');

  try {
    const bookArr = JSON.parse(localStorage.getItem(shRefs.SHOPPING_LIST_LS));
    localStorage.removeItem(shRefs.SHOPPING_LIST_LS);

    const newBookArr = bookArr.filter(book => book.id !== btn.id);
    localStorage.setItem(shRefs.SHOPPING_LIST_LS, JSON.stringify(newBookArr));

    if (!newBookArr.length) {
      renderCards(newBookArr);
      return;
    }
    //createPagination(newData, 1, false, true);
    renderCards(newBookArr); //to delete
  } catch (error) {
    console.log('ERROR!', error);

  }
}

function emptyPage() {
  if (shRefs.emptyPage.classList.contains('visually-hidden')) {
    shRefs.emptyPage.classList.remove('visually-hidden');
    //shRefs.list.removeEventListener('click', someFoo);to use this need some function
  }
}

function shoppingMarkap(arr) {
  shRefs.emptyPage.classList.add('visually-hidden');
  return arr
    .map(({ id, cover, alt, title, polygraphy, description, author }) => {
      let bookCover = `<svg class="book-logo">
        <use href="${sprite}#book"></use>
      </svg>`;
      if (cover) {
        bookCover = `<img class="shopping-list-img"
                    src="${cover}" alt="${alt}" 
                    loading="lazy"/>`;
      }
      return `<li class="shopping-list-item">
            <div class="sh-wrapper">
                ${bookCover}
            </div>
            <div class="shopping-list-info">
                <button type="button" id = "${id}"class="trash-btn">
                    <svg class="trash-logo">
                    <use href="${sprite}#trash"></use>
                    </svg>
                </button>
              <h2 class="shopping-book-title">${title}</h2>
              <p class="shopping-book-polygraphy">${polygraphy}</p>
              <div class="sh-desc-wrapper">
               <p class="shopping-book-desc">
               ${description}
              </p>
            </div>
              <div class="sh-buy-wrapper" >
                <p class="shopping-book-author">${author}</p>
                  <ul class="links-to-buy">
                    <li class="item-to-buy">
                      <svg class="shop-logo">
                        <use href="${amazon}#image0_54_2037"></use>
                      </svg>
                    </li>
                    <li class="item-to-buy">
                      <svg class="shop-logo">
                        <use href="${applebook}#image0_54_2038"></use>
                      </svg>
                    </li>
                    <li class="item-to-buy">
                      <svg class="shop-logo">
                        <use href="${bookshop}#image0_54_2039"></use>
                      </svg>
                    </li>
                  </ul>
                </div>
            </div>
          </li>`;
    })
    .join('');
}

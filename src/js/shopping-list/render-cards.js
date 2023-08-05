import sprite from '/src/images/icons.svg';
const booksArr = [
  {
    cover: '',
    alt: 'book 13',
    title: 'I will find you',
    polygraphy: 'Hardcover fiction',
    description:
      'David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.',
    author: 'Harlan Coben',
  },
  {
    cover: '',
    alt: 'book 13',
    title: 'Wonder',
    polygraphy: 'Hardcover nonfiction',
    description:
      'August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ',
    author: 'R.J. Palacio',
  },
];

const shRefs = {
  list: document.querySelector('.shopping-list-list'),
  emptyPage: document.querySelector('.empty-sh-page'),
};

export default function renderCards(arr = []) {
  shRefs.list.innerHTML = '';
  if (!arr.length) {
    emptyPage();
  } else {
    shRefs.list.insertAdjacentHTML('beforeend', shoppingMarkap(booksArr));
  }
}

function emptyPage() {
  shRefs.emptyPage.hidden = false;
}

function shoppingMarkap(arr) {
  //const markap = arr
  return arr
    .map(({ cover, alt, title, polygraphy, description, author }) => {
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
                <button type="button" class="trash-btn">
                    <svg class="trash-logo">
                    <use href="${sprite}#trash"></use>
                    </svg>
                </button>
              <h2 class="shopping-book-title">${title}</h2>
              <p class="shopping-book-polygraphy">${polygraphy}</p>
              <p class="shopping-book-desc">
               ${description}
              </p>
              <div>
                <p class="shopping-book-author">${author}</p>
                <div class="links-to-buy"></div>
              </div>
            </div>
          </li>`;
    })
    .join('');
}

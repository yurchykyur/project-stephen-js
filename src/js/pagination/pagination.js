import sprite from '/src/images/icons.svg';

let DATA = [
  {
    title: 'oject 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.',
  },
  {
    title: 'oject 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.',
  },
  {
    title: 'oject 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.',
  },
  {
    title: 'oject 4',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.',
  },
  {
    title: 'oject 5',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.',
  },
  {
    title: 'oject 6',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.',
  },
  {
    title: 'oject 7',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.',
  },
  {
    title: 'oject 8',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.',
  },
  {
    title: 'oject 9',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.',
  },
  {
    title: 'oject 10',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.',
  },
  {
    title: 'oject 11',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.',
  },
  {
    title: 'oject 12',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.',
  },
  {
    title: 'oject 13',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.',
  },
  {
    title: 'oject 14',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.',
  },
  {
    title: 'oject 15',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.',
  },
  {
    title: 'oject 16',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.',
  },
  {
    title: 'oject 17',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.',
  },
  {
    title: 'oject 18',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.',
  },
  {
    title: 'oject 19',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.',
  },
  {
    title: 'oject 20',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.',
  },
  {
    title: 'oject 21',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.',
  },
  {
    title: 'oject 22',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.',
  },
];

let CARD_PER_PAGE = 3;
console.log(DATA);
const refs = {
  paginationContainer: document.querySelector('.pagination-container'),
};

let arrayNumbersOfPages = [];

// numbersOfPages(DATA)

function numbersOfPages(data) {
  arrayNumbersOfPages = [];
  for (let i = 0; i < Math.ceil(data.length / CARD_PER_PAGE); i += 1) {
    arrayNumbersOfPages.push(i + 1);
  }
}

console.log(arrayNumbersOfPages);

refs.paginationContainer.addEventListener('click', onClickPagination);

function createMarcupContent(data) {
  return data
    .map(({ title, text }) => {
      return `<div class="book">
        <h3>${title}</h3>
        <p>${text}</p>
      </div>`;
    })
    .join('');
}

function onClickPagination(e) {
  e.preventDefault();
  // if (e.currentTarget === e.target || e.target.nodeName === 'UL' ) {
  //     return
  // }
  // console.log('e.currentTarget', e.currentTarget.dataset.pagination)
  //  console.log('e.target', e.target.dataset.pagination)

  // console.log('e.target', e.target.closest('.js-pagination-button').dataset.pagination)
  const clickOnPagePagination = e.target.closest('.js-pagination-pages');
  const clickOnButtonPagination = e.target.closest('.js-pagination-button');

  if (clickOnPagePagination) {
    const clickPage = clickOnPagePagination.dataset.pagination;
    console.log(typeof clickPage);
    console.log(clickPage);

    if (clickPage === '...') {
      console.log('case "..."');
    } else {
      moveToPage(clickPage);
    }
  }

  if (clickOnButtonPagination) {
    const clickPage = clickOnButtonPagination.dataset.pagination;
    console.log(typeof clickPage);
    console.log(clickPage);
    switch (clickPage) {
      case 'start':
        moveToStart();
        break;
      case 'backward':
        moveToBackward();
        break;
      case 'forward':
        moveToForward();
        break;
      case 'end':
        moveToEnd();
        break;
      default:
        return;
    }
  }
}

function moveToStart() {
  console.log('moveToStart()');
  createPagination(DATA, 1);
  //  функція створення розмітки секції з вибраними книгами
  const activePage = findActivePage();
  deleteClassActivePage(activePage);
  addActivePage(1);

  const string = createMarcupContent(prepareDataForBooks(1));
  refs.content.innerHTML = string;
}

function moveToBackward() {
  console.log('moveToBackward()');
  const activePage = findActivePage();
  if (activePage === 1) {
    return;
  }
  const startPagePagination = Number(
    document.querySelector('.js-pagination-pages').dataset.pagination
  );

  if (activePage <= 3) {
    const initialPage = 1;

    deleteClassActivePage(activePage);
    console.log(initialPage, 'initialPage');
    createPagination(DATA, initialPage);
    addActivePage(activePage - 1);

    const string = createMarcupContent(prepareDataForBooks(activePage - 1));
    refs.content.innerHTML = string;
  } else {
    const initialPage = startPagePagination - 1;

    deleteClassActivePage(activePage);
    console.log(initialPage, 'initialPage');
    createPagination(DATA, initialPage);
    addActivePage(activePage - 1);

    const string = createMarcupContent(prepareDataForBooks(activePage - 1));
    refs.content.innerHTML = string;
  }
}

function moveToForward() {
  console.log('moveToforward()');
  const activePage = findActivePage();

  if (activePage === arrayNumbersOfPages.length) {
    return;
  }

  const startPgePagination = Number(
    document.querySelector('.js-pagination-pages').dataset.pagination
  );

  const initialPage = startPgePagination + 1;

  deleteClassActivePage(activePage);
  console.log(initialPage, 'initialPage');
  createPagination(DATA, initialPage);
  addActivePage(activePage + 1);

  const string = createMarcupContent(prepareDataForBooks(activePage + 1));
  refs.content.innerHTML = string;
}

function moveToEnd() {
  console.log('moveToEnd()');
  createPagination(DATA, arrayNumbersOfPages.length);
  //  функція створення розмітки секції з вибраними книгами
  const activePage = findActivePage();
  deleteClassActivePage(activePage);
  addActivePage(arrayNumbersOfPages.length);

  const string = createMarcupContent(
    prepareDataForBooks(arrayNumbersOfPages.length)
  );
  refs.content.innerHTML = string;
}

function moveToPage(page) {
  console.log('moveToPage()');
  const activePage = findActivePage();

  console.log(activePage);
  deleteClassActivePage(activePage);
  addActivePage(Number(page));
  const string = createMarcupContent(prepareDataForBooks(Number(page)));
  refs.content.innerHTML = string;
}

console.log(window.innerWidth);

function findActivePage() {
  let activePage = 1;
  refs.allPaginationPages.forEach(elem => {
    if (elem.classList.contains('js-active-pagination')) {
      activePage = elem.dataset.pagination;
    }
  });

  return Number(activePage);
}

function addActivePage(page = 1) {
  console.log('addActivePage', refs.allPaginationPages);
  refs.allPaginationPages.forEach(elem => {
    const number = Number(elem.dataset.pagination);

    if (number === page) {
      elem.classList.add('js-active-pagination');
    }
  });
}

function deleteClassActivePage(page = 1) {
  refs.allPaginationPages.forEach(elem => {
    const number = Number(elem.dataset.pagination);

    if (number === page) {
      elem.classList.remove('js-active-pagination');
    }
  });
}

createPagination(DATA, 1, true);

export default function createPagination(
  data,
  initialPage = 1,
  isFirstRender = false,
  isDeleted = false
) {
  if (data === 'undefined' || data.length === 0) {
    return;
  }

  if (isFirstRender) {
    DATA = [...data];
    CARD_PER_PAGE = window.innerWidth < 768 ? 4 : 3;
    numbersOfPages(DATA);
    // вставити функцію від Олега
    const string = createMarcupContent(prepareDataForBooks(1));
    document.querySelector('.js-content-container').innerHTML = string;
  }

  if (data.length <= CARD_PER_PAGE) {
    return;
  }

  if (isDeleted) {
    const prevState = [...DATA];
    const prevStatePages = Math.ceil(prevState.length / CARD_PER_PAGE);

    DATA = [...data];

    const activePage = findActivePage();

    if (arrayNumbersOfPages.length === prevStatePages) {
      const string = createMarcupContent(
        prepareDataForBooks(Number(activePage))
      );
      refs.content.innerHTML = string;
    } else {
      onDeletedItem(data, prevState, activePage);
    }

    return;
  }

  const maxVisiblePages = window.innerWidth > 768 ? 3 : 2;
  console.log(maxVisiblePages);

  let isThreePoint = true;

  if (initialPage + maxVisiblePages - 1 >= arrayNumbersOfPages.length) {
    isThreePoint = false;
  }

  refs.paginationContainer.innerHTML = createMarcupPagination(
    initialPage,
    maxVisiblePages,
    isThreePoint
  );
  createRefsPagination();

  if (isFirstRender) {
    addActivePage(1);
  }
}

function createRefsPagination() {
  refs.content = document.querySelector('.js-content-container');
  refs.pagination = document.querySelector('.js-pagination-list');
  refs.allPaginationPages = document.querySelectorAll('.js-pagination-pages');
}

// =============================================
// функція обробки при видаллені елемента

function onDeletedItem(data, prevState, activePage) {
  if (activePage === arrayNumbersOfPages.length) {
    moveToEnd();
    return;
  }

  if (activePage === 1) {
    moveToStart();
    return;
  }

  const prevStatePages = Math.ceil(prevState.length / CARD_PER_PAGE);
  if (arrayNumbersOfPages.length === prevStatePages) {
    const startPagePagination = Number(
      document.querySelector('.js-pagination-pages').dataset.pagination
    );
    const initialPage = startPagePagination;
    const activePage = findActivePage();
    addActivePage(Number(page));
    const string = createMarcupContent(prepareDataForBooks(Number(page)));
    refs.content.innerHTML = string;
  }
}

// ============================================

// =====================================================================================

// підготовка даних для створення даних для рендеру  секції шоппінг ліст
function prepareDataForBooks(page) {
  const arrayOfIndexes = [];
  const startIndex = CARD_PER_PAGE * (page - 1);

  for (let i = 0; i < CARD_PER_PAGE; i += 1) {
    if (startIndex + i < DATA.length) {
      arrayOfIndexes.push(startIndex + i);
    }
  }

  console.log('arrayOfIndexes', arrayOfIndexes);
  const newDataForRenderList = [];
  arrayOfIndexes.forEach(elem => newDataForRenderList.push(DATA[elem]));

  console.log('newDataForRenderList', newDataForRenderList);

  return newDataForRenderList;
}

// =====================================================================================

function createMarcupPagination(
  initialPage,
  maxVisiblePages,
  isThreePoint = true
) {
  let murkupPages = '';
  if (isThreePoint) {
    murkupPages =
      createMarcupPagesPagination(initialPage, maxVisiblePages) +
      `<li class="js-pagination-pages" data-pagination="...">...</li>`;
  } else {
    murkupPages = createMarcupPagesPagination(initialPage, maxVisiblePages);
  }

  return `<div class="pagination-container">
      <div class="left-arrows-wrapper">
        <button class="js-pagination-button start" type="button" data-pagination="start">
          <svg class="pagination-icon-start" width="24" height="24">
            <use href="${sprite}#icon-arrow-ff"></use>
          </svg>
        </button>
        <button class="js-pagination-button backward" type="button" data-pagination="backward">
          <svg class="pagination-icon-backward" width="24" height="24">
            <use href="${sprite}#icon-arrow"></use>
          </svg>
        </button>
      </div>

      <ul class="js-pagination">
        ${murkupPages}
      </ul>

      <div class="right-arrows-wrapper">
        <button class="js-pagination-button forward" type="button" data-pagination="forward">
          <svg class="pagination-icon-forward" width="24" height="24">
            <use href="${sprite}#icon-arrow"></use>
          </svg>
        </button>
        <button class="js-pagination-button end" type="button" data-pagination="end">
          <svg class="pagination-icon-end" width="24" height="24">
            <use href="${sprite}#icon-arrow-ff"></use>
          </svg>
        </button>
      </div>
    </div>`;
}

function createMarcupPagesPagination(initialPage = 1, maxVisiblePages = 2) {
  let markupString = '';
  let newInitialPage = initialPage;
  let pages = arrayNumbersOfPages.length;

  if (initialPage + maxVisiblePages - 1 >= pages) {
    newInitialPage = pages - maxVisiblePages + 1;
  }

  if (maxVisiblePages > pages) {
    newInitialPage = 1;
  }

  for (let i = newInitialPage; i < initialPage + maxVisiblePages; i += 1) {
    if (i > pages) {
      console.log('return');
      break;
    }
    markupString += `<li class="js-pagination-pages" data-pagination="${i}">${i}</li>`;
  }

  return markupString;
}

// console.log(createMarcupPagination())

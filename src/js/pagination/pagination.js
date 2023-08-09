import sprite from '/src/images/icons.svg';
import renderCards from '/src/js/shopping-list/render-cards';

let DATA = [];

let CARD_PER_PAGE = 0;

const scrollController = {
  a: true,
  b: true
}

const refs = {
  paginationContainer: document.querySelector('.pagination-container'),
};

refs.paginationContainer.addEventListener('click', onClickPagination);

let arrayNumbersOfPages = [];

let maxVisiblePages = 0
  // window.innerWidth >= 768 ? 3 : 2



function numbersOfPages(data) {
  arrayNumbersOfPages = [];

  for (let i = 0; i < Math.ceil(data.length / CARD_PER_PAGE); i += 1) {
    arrayNumbersOfPages.push(i + 1);
  }
}

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
    // CARD_PER_PAGE = window.innerWidth < 768 ? 4 : 3;
    
    onScrollController(window.innerWidth)
    numbersOfPages(DATA);
    renderCards(prepareDataForBooks(1));
    
  }

  if (isDeleted) {
    onDeletedItem(data);

    return;
  }

  if (data.length <= CARD_PER_PAGE) {
    return;
  }

  // const maxVisiblePages = window.innerWidth > 768 ? 3 : 2;

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


function onClickPagination(e) {
  e.preventDefault();

  const clickOnPagePagination = e.target.closest('.js-pagination-pages');
  const clickOnButtonPagination = e.target.closest('.js-pagination-button');

  if (clickOnPagePagination) {
    const clickPage = clickOnPagePagination.dataset.pagination;

    if (clickPage === '...') {
      console.log('case "..."');
    } else {
      moveToPage(clickPage);
    }
  }

  if (clickOnButtonPagination) {
    const clickPage = clickOnButtonPagination.dataset.pagination;

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
  createPagination(DATA, 1);

  const activePage = findActivePage();

  deleteClassActivePage(activePage);
  addActivePage(1);
  renderCards(prepareDataForBooks(1));
}

function moveToBackward() {
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
    createPagination(DATA, initialPage);
    addActivePage(activePage - 1);
    renderCards(prepareDataForBooks(activePage - 1));
  } else {
    const initialPage = startPagePagination - 1;

    deleteClassActivePage(activePage);
    createPagination(DATA, initialPage);
    addActivePage(activePage - 1);
    renderCards(prepareDataForBooks(activePage - 1));
  }
}

function moveToForward() {
  const activePage = findActivePage();

  if (activePage === arrayNumbersOfPages.length) {
    return;
  }

  const startPgePagination = Number(
    document.querySelector('.js-pagination-pages').dataset.pagination
  );

  const initialPage = startPgePagination + 1;

  deleteClassActivePage(activePage);
  createPagination(DATA, initialPage);
  addActivePage(activePage + 1);
  renderCards(prepareDataForBooks(activePage + 1));
}

function moveToEnd() {
  createPagination(DATA, arrayNumbersOfPages.length);

  const activePage = findActivePage();
  deleteClassActivePage(activePage);
  addActivePage(arrayNumbersOfPages.length);
  renderCards(prepareDataForBooks(arrayNumbersOfPages.length));
}

function moveToPage(page) {
  const activePage = findActivePage();

  deleteClassActivePage(activePage);
  addActivePage(Number(page));
  renderCards(prepareDataForBooks(Number(page)));
}

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

function createRefsPagination() {
  refs.pagination = document.querySelector('.js-pagination-list');
  refs.allPaginationPages = document.querySelectorAll('.js-pagination-pages');
}

function onDeletedItem(data) {
  DATA = [...data];
  numbersOfPages(DATA);
  let activePage = 1
  if (numbersOfPages(DATA) > 1) {
       activePage = findActivePage();
  }

  if (DATA.length <= CARD_PER_PAGE) {
    refs.paginationContainer.innerHTML = '';

    renderCards(prepareDataForBooks(1));

    return;
  }

  if (activePage > arrayNumbersOfPages.length) {
    createPagination(DATA, arrayNumbersOfPages.length);
    addActivePage(arrayNumbersOfPages.length);
    renderCards(prepareDataForBooks(arrayNumbersOfPages.length));

    return;
  }

  if (activePage < arrayNumbersOfPages.length && activePage === 1) {
    createPagination(DATA, 1);
    addActivePage(1);
    renderCards(prepareDataForBooks(1));

    return;
  }

  if (prepareDataForBooks(activePage).length <= CARD_PER_PAGE) {
    const startPagePagination = Number(
      document.querySelector('.js-pagination-pages').dataset.pagination
    );

    createPagination(DATA, startPagePagination);
    addActivePage(activePage);
    renderCards(prepareDataForBooks(activePage));
  }
}

function prepareDataForBooks(page) {
  const arrayOfIndexes = [];
  const startIndex = CARD_PER_PAGE * (page - 1);

  for (let i = 0; i < CARD_PER_PAGE; i += 1) {
    if (startIndex + i < DATA.length) {
      arrayOfIndexes.push(startIndex + i);
    }
  }

  const newDataForRenderList = [];
  arrayOfIndexes.forEach(elem => newDataForRenderList.push(DATA[elem]));

  return newDataForRenderList;
}

function createMarcupPagination(
  initialPage,
  maxVisiblePages,
  isThreePoint = true
) {
  let murkupPages = '';

  if (isThreePoint) {
    murkupPages =
      createMarcupPagesPagination(initialPage, maxVisiblePages) +
      `<div class="js-three-point" data-pagination="...">...</div>`;
  } else {
    murkupPages = createMarcupPagesPagination(initialPage, maxVisiblePages);
  }

  return `<div class="left-arrows-wrapper">
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
      </div>`;
}

function createMarcupPagesPagination(initialPage = 1, maxVisiblePages = 2) {
  let markupString = '';
  let newInitialPage = initialPage;
  const pages = arrayNumbersOfPages.length;

  if (initialPage + maxVisiblePages - 1 >= pages) {
    newInitialPage = pages - maxVisiblePages + 1;
  }

  if (maxVisiblePages > pages) {
    newInitialPage = 1;
  }

  for (let i = newInitialPage; i < initialPage + maxVisiblePages; i += 1) {
    if (i > pages) {
      console.log('break');
      break;
    }
    markupString += `<li class="js-pagination-pages" data-pagination="${i}">${i}</li>`;
  }

  return markupString;
}


function onScrollController(width) {
  let needRender = false

  if (width < 768 && scrollController.a) {
    CARD_PER_PAGE = 4

    maxVisiblePages = 2
    scrollController.a = false
    scrollController.b = true
    needRender = true
  }
  
  if (width > 768 && scrollController.b) {
    CARD_PER_PAGE = 3
    maxVisiblePages = 3
    scrollController.a = true
    scrollController.b = false
    needRender = true
  }
 return needRender
}

window.addEventListener("resize", () => {
  const needRender = onScrollController(window.innerWidth)
  if (needRender) {
    createPagination(
      DATA,
      1,
      false,
      true
    )
  }
})

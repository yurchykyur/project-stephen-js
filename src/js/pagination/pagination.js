

const DATA = [{ title: "oject 1", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.' },
{ title: "oject 2", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.'},
    { title: "oject 3", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.' },
    { title: "oject 4", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.' },
    { title: "oject 5", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.' },
    { title: "oject 6", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.' },
    { title: "oject 7", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.' },
    { title: "oject 8", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.' },
    { title: "oject 9", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.' },
    { title: "oject 10", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.' },
    { title: "oject 11", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.' },
    { title: "oject 12", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.' },
    { title: "oject 13", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.' },
    { title: "oject 14", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.' },
    { title: "oject 15", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.' },
    { title: "oject 16", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.' },
    { title: "oject 17", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.' },
    { title: "oject 18", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.' },
    { title: "oject 19", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.' },
    { title: "oject 20", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.' },
    { title: "oject 21", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.' },
    { title: "oject 22", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime.' },

]

console.log(DATA)
const refs = {
  paginationContainer: document.querySelector('.pagination-container'),
}



const arrayNumbersOfPages = []

numbersOfPages(DATA)

function numbersOfPages(data) {
  for (let i = 0; i < Math.ceil(data.length/3); i += 1){
    arrayNumbersOfPages.push((i+1))
  }
}

console.log(arrayNumbersOfPages)

refs.paginationContainer.addEventListener('click', onClickPagination)

function createMarcupContent(data) {
    const {title, text} = data
    return (`<div class="book">
        <h3>${title}</h3>
        <p>${text}</p>
      </div>`)
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
        console.log(typeof clickPage)
        console.log(clickPage)
        switch (clickPage) {
            case '...':
            console.log('case "..."')
            break;
        
        default:
           moveToPage(clickPage)
            return;
        }
    } 

    if (clickOnButtonPagination) {
        const clickPage = clickOnButtonPagination.dataset.pagination;
        console.log(typeof clickPage)
         console.log( clickPage)
       switch (clickPage) {
        case 'start':
            moveToStart()
            break;
        case 'backward':
            moveToBackward()
            break;
        case 'forward':
            moveToForward()
            break;
        case 'end':
            moveToEnd()
            break;
        default:
        return;
        }
    } 
}



function moveToStart() {
  console.log('moveToStart()')  
  createPagination(DATA, 1)
  //  функція створення розмітки секції з вибраними книгами
  const activePage = findActivePage()
deleteClassActivePage(activePage)
addActivePage(1)
      
}

function moveToBackward() {
  console.log('moveToBackward()') 
  const activePage = findActivePage()
  if (activePage === 1) {
  return
  }
  const startPagePagination = Number(document.querySelector('.js-pagination-pages').dataset.pagination)
  const initialPage = (startPagePagination - 1) 
  deleteClassActivePage(activePage)
  console.log(initialPage, 'initialPage')
  createPagination(DATA, initialPage )
  addActivePage(activePage - 1)
  
  if (activePage <= 3) {
  const initialPage = 1 
  deleteClassActivePage(activePage)
  console.log(initialPage, 'initialPage')
  createPagination(DATA, initialPage )
  addActivePage(activePage - 1)
  } else {
    const initialPage = (startPagePagination - 1) 
  deleteClassActivePage(activePage)
  console.log(initialPage, 'initialPage')
  createPagination(DATA, initialPage )
  addActivePage(activePage - 1)
}

}
       
function moveToForward() {
  console.log('moveToforward()') 
 const activePage = findActivePage()
  if (activePage === arrayNumbersOfPages.length) {
  return
  }
  const startPgePagination = Number(document.querySelector('.js-pagination-pages').dataset.pagination)
  const initialPage = (startPgePagination + 1)
  deleteClassActivePage(activePage)
  console.log(initialPage, 'initialPage')
  createPagination(DATA, initialPage )
  addActivePage(activePage + 1)

}
       
function moveToEnd() {
  console.log('moveToEnd()') 
  createPagination(DATA, arrayNumbersOfPages.length)
  //  функція створення розмітки секції з вибраними книгами
     const activePage = findActivePage()
  deleteClassActivePage(activePage)
  addActivePage(arrayNumbersOfPages.length)

}
       
function moveToPage(page) {
  console.log('moveToPage()')
  const activePage = findActivePage()
  console.log(activePage)
  deleteClassActivePage(activePage)
  addActivePage(Number(page))

}
    
console.log(window.innerWidth )

function findActivePage() {
  let activePage = 1
  refs.allPaginationPages.forEach(elem => {
   if (elem.classList.contains('active')) {
      activePage = elem.dataset.pagination
    }
   })
  return Number(activePage)
}

 function addActivePage(page = 1) {
  console.log('addActivePage', refs.allPaginationPages)
  refs.allPaginationPages.forEach(elem => {
    const number = Number(elem.dataset.pagination)

    if (number === page) {
      elem.classList.add('active')
    }
   })
}

function deleteClassActivePage(page = 1) {
  refs.allPaginationPages.forEach(elem => {
    const number = Number(elem.dataset.pagination)

    if (number === page) {
      elem.classList.remove('active')
    }
   })
}



createPagination(DATA, 1, true)

export default function createPagination(data, initialPage = 1, isFirstRender = false) {

  if (data.length <= 3) {
  return
  }

  // не забути розкоментувати

  // numbersOfPages(data)

// не забути розкоментувати

  const maxVisiblePages = window.innerWidth > 768 ? 3 : 2
  console.log(maxVisiblePages)


  let isThreePoint = true
    
  if ((initialPage + maxVisiblePages-1) >= arrayNumbersOfPages.length) {
     isThreePoint = false
  }
  
 refs.paginationContainer.innerHTML=  createMarcupPagination(initialPage, maxVisiblePages, isThreePoint) 
  createRefsPagination()
 
  if (isFirstRender) {

    addActivePage(1)

  }
}


function createRefsPagination() {
  refs.content=document.querySelector('.js-content-container')
  refs.pagination=document.querySelector('.js-pagination-list')
  refs.allPaginationPages=document.querySelectorAll('.js-pagination-pages')
        
}


function prepareDataForBooks(page, data) {
  
}

function createMarcupPagination(initialPage, maxVisiblePages, isThreePoint = true) {
  let murkupPages = '';
  if (isThreePoint) {
    murkupPages = createMarcupPagesPagination(initialPage, maxVisiblePages) + `<li class="js-pagination-pages" data-pagination="...">...</li>`
  }
  else {
    murkupPages = createMarcupPagesPagination(initialPage, maxVisiblePages)
  }
    return (`<button
        class="js-pagination-button"
        type="button"
        data-pagination="start"
      >
        On start
      </button>
      <button
        class="js-pagination-button"
        type="button"
        data-pagination="backward"
      >
        move backward
      </button>
      <ul class="js-pagination">
        ${murkupPages}
      </ul>
      <button
        class="js-pagination-button"
        type="button"
        data-pagination="forward"
      >
        move forward
      </button>
      <button class="js-pagination-button" type="button" data-pagination="end">
        to the end
        <div class="test"></div>
      </button>`)
}

function createMarcupPagesPagination(initialPage=1, maxVisiblePages=2) {
  let markupString = '';
  let newInitialPage = initialPage
  let pages = arrayNumbersOfPages.length;

  if (initialPage + maxVisiblePages - 1 >= pages ) {
    newInitialPage = pages - maxVisiblePages + 1;
    
  }

  if (maxVisiblePages > pages) {
    newInitialPage = 1;
}

  for (let i = newInitialPage; i < initialPage+maxVisiblePages; i +=1){
    if (i > pages) {
      console.log('return')
     break
    }
 markupString += `<li class="js-pagination-pages" data-pagination="${i}">${i}</li>`


  }

  return markupString
}
 

// console.log(createMarcupPagination())
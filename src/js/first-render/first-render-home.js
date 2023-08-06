import serviceBookAPI from '../book-api/service-book-api'

function firstRenderHome() {
       serviceBookAPI('topBooks').then(data => {
        console.log('Top Books:', data);
        // Виклик функції для рендеру секції Мирослави

    }).catch(error => console.error(error)).finally()
    serviceBookAPI('categoryList').then(data => {
        console.log('Category List:', data);
        // Виклик функції для рендеру секції Ростислава

    }).catch(error => console.error(error)).finally()


}

firstRenderHome()
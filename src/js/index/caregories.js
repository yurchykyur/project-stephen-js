// API з книгами:	https://books-backend.p.goit.global/api-docs/
// Перелік категорій книг	https://books-backend.p.goit.global/books/category-list
// Популярні книги, що належать до усіх категорій	https://books-backend.p.goit.global/books/top-books
// Книги окремої категорії	https://books-backend.p.goit.global/books/category?category=selectedCategory
// Детальна інформація про книгу	https://books-backend.p.goit.global/books/ bookId																						

import axios from 'axios';
// Імпортується функція, яка відповідає за рендеринг книжок за обраною категорією
import renderCategory from './render-category'; 

// Отримується посилання на елемент, який буде містити список категорій книг на сторінці.
const category_list = document.querySelector('.nav-cate-lis');

async function getCategoryList() {
  const { data } = await axios.get(
    'https://books-backend.p.goit.global/books/category-list'
  );
  return data;
}
// Функція викликається для рендерингу списку категорій
const renderCategories = async () => {
  try {
    const category = await getCategoryList();
    category_list.innerHTML = await markupCategoriesList(category);
    const listCategory = document.querySelectorAll('.nav-category-item');
    listCategory.forEach(itemCategory => {
      itemCategory.addEventListener('click', event => {
        const ActiveCategory = document.querySelector(
          '.nav-category-item.active'
        );
        if (ActiveCategory) {
          ActiveCategory.classList.remove('active');
        }
        event.target.classList.add('active');
      });
    });
  } catch (error) {
    console.log('Oops! Something went wrong');
  }
};
//  ініціює рендеринг списку категорій при завантаженні сторінки
renderCategories();
category_list.addEventListener('click', checkCategory);

function checkCategory(e) {
  if (e.target.dataset.id) {
    renderCategory(e);
  }
}
// створює розмітку для списку категорій
function markupCategoriesList(categories) {
  return `<li class="nav-category-item active" data-id="all-categories">
        All categories</li>
        ${categories
          .map(
            category => `<li class="nav-category-item" data-id="${category.list_name}">
        ${category.list_name}
        </li>`
          )
          .join('')}`;
}
  
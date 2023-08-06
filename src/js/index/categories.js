// API з книгами:	https://books-backend.p.goit.global/api-docs/
// Перелік категорій книг	https://books-backend.p.goit.global/books/category-list
// Популярні книги, що належать до усіх категорій	https://books-backend.p.goit.global/books/top-books
// Книги окремої категорії	https://books-backend.p.goit.global/books/category?category=selectedCategory
// Детальна інформація про книгу	https://books-backend.p.goit.global/books/ bookId																						




import axios from 'axios';
import renderingByCategory from './render-category';

const category_list = document.querySelector('.nav-categories-list');

// Отримати список категорій книг з API
async function getCategoryList() {
  try {
    const { data } = await axios.get('https://books-backend.p.goit.global/books/category-list');
    return data;
  } catch (error) {
    console.log('Помилка при отриманні списку категорій:', error);
    return [];
  }
}

// Рендерити список категорій
const renderCategories = async () => {
  try {
    const categories = await getCategoryList();
    category_list.innerHTML = await markupCategoriesList(categories);
    addCategoryClickListeners();
  } catch (error) {
    console.log('Помилка при рендерингу категорій:', error);
  }
};

// Додати обробники подій для кожної категорії
function addCategoryClickListeners() {
  const listCategory = document.querySelectorAll('.nav-category-item');
  listCategory.forEach(itemCategory => {
    itemCategory.addEventListener('click', async event => {
      const ActiveCategory = document.querySelector('.nav-category-item.active');
      if (ActiveCategory) {
        ActiveCategory.classList.remove('active');
      }
      event.target.classList.add('active');
      
      // Викликати функцію рендерингу книг за вибраною категорією
      await renderingByCategory(event);
    });
  });
}

// Функція для рендерингу HTML-коду списку категорій
function markupCategoriesList(categories) {
  return `<li class="nav-category-item active" data-id="all-categories">All categories</li>
        ${categories
          .map(
            category => `<li class="nav-category-item" data-id="${category.list_name}">
        ${category.list_name}
        </li>`
          )
          .join('')}`;
}

// Викликати функцію для рендерингу категорій при завантаженні сторінки
renderCategories();
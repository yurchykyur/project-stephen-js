
import axios from 'axios';
import renderingByCategory from './render-category';

const category_list = document.querySelector('.nav-categories-list');

// async function getCategoryList() {
//   try {
//     const { data } = await axios.get('https://books-backend.p.goit.global/books/category-list');
//     return data;
//   } catch (error) {
//     console.log('Помилка при отриманні списку категорій:', error);
//     return [];
//   }
// }
export default function renderCategories(categories) {
  try {
    // const categories = await getCategoryList();
    category_list.innerHTML =  markupCategoriesList(categories);
    addCategoryClickListeners();
  } catch (error) {
    console.log('Помилка при рендерингу категорій:', error);
  }
};

function addCategoryClickListeners() {
  const listCategory = document.querySelectorAll('.nav-category-item');
  listCategory.forEach(itemCategory => {
    itemCategory.addEventListener('click', async event => {
      const ActiveCategory = document.querySelector('.nav-category-item.active');
      if (ActiveCategory) {
        ActiveCategory.classList.remove('active');
      }
      event.target.classList.add('active');

      await renderingByCategory(event);
    });
  });
}

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

// renderCategories();



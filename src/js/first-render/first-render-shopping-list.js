import createPagination from '../pagination/pagination';
import getDataLocalStorage from '../service-local-storage/get-data-local-storage';
import renderCards from '../shopping-list/render-cards';

function firstRenderShoppingList() {
  // функція запиту в локал сторедж та отриманні даних
  //const data = getDataLocalStorage(key);

  // Виклик функції створення розмітки відображення  книг
  renderCards();

  // виклик створення розмітки пагінації
  // createPagination(data, 1, true)
}

firstRenderShoppingList();

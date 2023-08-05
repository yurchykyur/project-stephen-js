import createPagination from '../pagination/pagination';
import getDataLocalStorage from '../service-local-storage/get-data-local-storage';

export default function firstRenderShoppingList() {
  // функція запиту в локал сторедж та отриманні даних
  const data = getDataLocalStorage(key);

  // виклик створення розмітки пагінації та розмітки
  // createPagination(data, 1, true)
}

import axios from 'axios';
import Loader from '../index/loader';
const loader = new Loader('.loader')

export async function fetchingByCategory(query) {
  try {
 loader.show();
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${query}`
    );
    loader.hide();
    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}

//  отримує дані про популярні книжки, які належать до усіх категорій  і повертає отримані дані про популярні книжки.

export async function fetchingTopBooks() {
  try {
 loader.show();
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/top-books`
    );
loader.hide();
    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}

//  Ця функція отримує список усіх доступних категорій книжок. Вона формує запит до сервера і повертає отриманий список категорій

export async function fetchingCategories() {
  try {
loader.show();
    const response = await axios.get(
      'https://books-backend.p.goit.global/books/category-list'
    );
  loader.hide();
    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}


// Ця функція отримує детальну інформацію про окрему книжку за її ідентифікатором.
export async function fetchingByBook(id) {
  try {
 loader.show();
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/${id}`
    );
loader.hide();
    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}
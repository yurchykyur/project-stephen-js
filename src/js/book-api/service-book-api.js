import axios from 'axios';
export default async function serviceBookAPI(endpoint, params = {}) {
  const BASE_URL = 'https://books-backend.p.goit.global/books/';

  const config = {
    topBooks: 'top-books',
    categoryList: 'category-list',
    category: `category/?category=${params.category}`,
    book: `${params.id}`,
  };

  const url = `${BASE_URL}${config[endpoint]}`;

  const response = await axios.get(url);
  return response.data;
}

// call examples

// const topBooks = await serviceBookAPI('topBooks');
// console.log('Top Books:', topBooks);

// const categoryList = await serviceBookAPI('categoryList');
// console.log('Category List:', categoryList);

// let bookCategory = categoryList[0].list_name;
// const booksByCategory = await serviceBookAPI('category', {
//   category: bookCategory,
// });
// console.log('Books by Category:', booksByCategory);

// let bookId = booksByCategory[0]._id;
// const bookById = await serviceBookAPI('book', { id: bookId });
// console.log('Book by ID:', bookById);

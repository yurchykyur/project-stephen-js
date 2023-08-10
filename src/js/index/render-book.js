// створення HTML-розмітки карточок книжок

export function createBookCard(book) {
  return `<li class="js-click-book" data-bookid="${book._id}">
  <a class="books-list-link">
  <div class="thumb">
    <img class="books-list-img" data-id="${book._id}" src="${book.book_image}" alt="${book.title}">
    <div class="actions-card">
  <p class="discription">quick view</p>
    </div>
    </div>
    <div class="content">
      <h3 class="books-list-name">${book.title}</h3>
      <p class="books-list-text">${book.author}</p>
    </div>
  </a>
</li>`;

  return `  <div class="gallery-book-link js-click-book" data-bookid="${book._id}">
              <div class="gallery-book-card">
                <div class="gallery-book-cover" style="background-image: url('${book.book_image}')">
                </div>
                <p class="gallery-book-name">${book.title}</p>
                <p class="gallery-author">${book.author}</p>
              </div>
            </div>`;
}

// export function createHomeBookCard(book) {
//   return `  <div class="gallery-book-home-link js-click-book" data-bookid="${book._id}">
//               <div class="gallery-book-card">
//                 <div class="gallery-book-cover" style="background-image: url('${book.book_image}')">
//                 </div>
//                 <p class="gallery-book-name">${book.title}</p>
//                 <p class="gallery-author">${book.author}</p>
//               </div>
//             </div>`;
// }

export function createBookCard(book) {
  return `<li class="gallery-book-item js-click-book" data-bookid="${book._id}">
  <a class="gallery-book-link">
    <div class="thumb">
      <img class="gallery-book-img" data-id="${book._id}" src="${book.book_image}"
 alt="${book.title}">
        <div class="actions-card">
          <p class="action-text">quick view</p>
        </div>
    </div>
    <div class="content">
      <h3 class="gallery-book-name">${book.title}</h3>
    <p class="gallery-book-text">${book.author}</p>
    </div>
  </a>
</li>`;
}

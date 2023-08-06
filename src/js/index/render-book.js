// Different markup for home page and for category filtered Page due to CSS issues.
export function createBookCard(book) {
  return `  <div class="gallery-book-link" data-id="${book._id}">
              <div class="gallery-book-card">
                <div class="gallery-book-cover" style="background-image: url('${book.book_image}')">
                </div>
                <p class="gallery-book-name">${book.title}</p>
                <p class="gallery-author">${book.author}</p>
              </div>
            </div>`;
}

export function createHomeBookCard(book) {
  return `  <div class="gallery-book-home-link" data-id="${book._id}">
              <div class="gallery-book-card">
                <div class="gallery-book-cover" style="background-image: url('${book.book_image}')">
                </div>
                <p class="gallery-book-name">${book.title}</p>
                <p class="gallery-author">${book.author}</p>
              </div>
            </div>`;
}

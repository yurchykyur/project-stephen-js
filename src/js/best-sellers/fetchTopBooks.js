export async function fetchTopBooks(book) {
    const response = await fetch(`https://books-backend.p.goit.global/books/top-books`);
    return await response.json();
}
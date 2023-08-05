import * as basicLightbox from "basiclightbox";

const bodyEl = document.querySelector("body");
const URL = "https://books.backend.p.goit.global/books/";
let idBook = "";

const shops = {
  Amazon: `<img src="#" alt="amazon logo" width="62" height="19" />`,
  "Apple Books": `<img src="#" alt="apple books logo" width="33" height="32" />`,
  "Book Shop": `<img src="#" alt="book shop logo" width="38" height="36" />`,
};

async function getBookInfo(bookId) {
  const response = await fetch(`${URL}${bookId}`);
  const responseData = await response.json();
  const books = {
    id: responseData._id,
    img: responseData.book_image,
    bookName: responseData.list_name,
    author: responseData.author,
    description: responseData.description,
    shops: responseData.buy_links,
    title: responseData.title,
  };
  return books;
}

function getImages(name) {
  if (name in shops) {
    const img = shops[name];
    return img;
  } else return "";
}

async function createMarkup(bookId) {
  const books = await getBookInfo(bookId);
  const shopName = books.shops
    .map(({ name, url }) => {
      const img = getImages(name);
      return `<li class="item book-item"><a href="${url}" target="_blank" class="link link-img">${img}</a></li>`;
    })
    .join("");
  let bookCard = `
    <div class="book-card-container js-modal">
        <button type="button" class="close-btn">
            <svg class="close-img" width="28" height="28"><use href="#"></use></svg>
        </button>
        <div class="book-info-container">
            <div class="book-cover">
                <img src="${books.img}" alt="book cover image" width="192" height="280" />
            </div>
            <div class="book-info">
                <h2 class="book-title">${books.bookName}</h2>
                <p class="book-author">${books.author}</p>
                <p class="book-description">${books.description}</p>
                <ul class="list shop-list">${shopName}</ul>
            </div>
        </div>
        <button type="button" class="btn-modal hidden" id="add">Add to shopping list</button>
        <button type="button" class="btn-modal hidden" id="remove">Remove from the shopping list</button>
        <p class="text-remove hidden">Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>
    </div>`;
  return bookCard;
}

function closeModal(instance) {
  function eventHandler(evt) {
    if (evt.key === "Escape") {
      instance.close();
      bodyEl.style.overflow = "auto";
    }
  }
  document.addEventListener("keydown", (evt) => {
    if (evt.key !== "Escape") {
      return;
    }
    document.addEventListener("keydown", eventHandler);
    instance.close();
  });
}

//import to gallery
export async function openModal(evt) {
  if (
    !(
      (evt.target.parentElement.nodeName === "LI" &&
        evt.target.parentElement.dataset.bookId) ||
      (evt.target.nodeName === "LI" && evt.target.dataset.bookId)
    )
  ) {
    return;
  }

  idBook =
    evt.target.nodeName === "LI"
      ? evt.target.dataset.bookId
      : evt.target.parentElement.dataset.bookId;

  const instance = basicLightbox.create(await createMarkup(idBook), {
    onShow: () => {
      document.addEventListener("keydown", closeModal(instance));
      bodyEl.style.overflow = "hidden";
    },
    onClose: () => {
      document.removeEventListener("keydown", closeModal(instance));
      bodyEl.style.overflow = "auto";
    },
  });

  instance.element().querySelector(".close-btn").onClick = instance.close;
  instance.show();

  const addBtn = document.querySelector("#add");
  const removeBtn = document.querySelector("#remove");
  const textRemove = document.querySelector(".text-remove");
  const books = await getBookInfo(idBook);

  if (localStorage.getItem(books.id) !== null) {
    addBtn.classList.add("hidden");
    removeBtn.classList.remove("hidden");
  } else {
    addBtn.classList.remove("hidden");
    removeBtn.classList.add("hidden");
    textRemove.classList.add("hidden");
  }
  addBtn.addEventListener("click", () => {
    addElement(idBook, books);
    addBtn.classList.add("hidden");
    removeBtn.classList.remove("hidden");
    textRemove.classList.remove("hidden");
  });

  removeBtn.addEventListener("click", () => {
    localStorage.removeItem(idBook);
    addBtn.classList.remove("hidden");
    removeBtn.classList.add("hidden");
    textRemove.classList.add("hidden");
  });
}

function addElement(key, value) {
  let addElToStorage = JSON.stringify(value);
  localStorage.setItem(key, addElToStorage);
}

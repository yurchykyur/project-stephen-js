import createPagination from '../pagination/pagination';
import getDataLocalStorage from '../service-local-storage/get-data-local-storage';

import img13 from '/src/js/shopping-list/Rectangle 13.jpg';
import img14 from '/src/js/shopping-list/Rectangle 14.jpg';
import img15 from '/src/js/shopping-list/Rectangle 15.jpg';
import img16 from '/src/js/shopping-list/Rectangle 16.jpg';
import img17 from '/src/js/shopping-list/Rectangle 17.jpg';
import img18 from '/src/js/shopping-list/Rectangle 18.jpg';
import img19 from '/src/js/shopping-list/Rectangle 19.jpg';

const SHOPPING_LIST_LS = 'shopping list';

export default function firstRenderShoppingList() {
  // функція запиту в локал сторедж та отриманні даних
  // const data = getDataLocalStorage(SHOPPING_LIST_LS);

  const data = [
    {
      cover: img13,
      alt: 'book 13',
      title: 'I will find you',
      polygraphy: 'Hardcover fiction',
      description:
        'David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.',
      author: 'Harlan Coben',
    },
    {
      cover: img14,
      alt: 'book 13',
      title: 'Wonder',
      polygraphy: 'Hardcover nonfiction',
      description:
        'August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ',
      author: 'R.J. Palacio',
    },
    {
      cover: img15,
      alt: 'book 13',
      title: 'DAISY JONES & THE SIX',
      polygraphy: 'Hardcover nonfiction',
      description:
        'August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ',
      author: 'R.J. Palacio',
    },
    {
      cover: img16,
      alt: 'book 13',
      title: 'Hello Beautiful',
      polygraphy: 'Hardcover nonfiction',
      description:
        'August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ',
      author: 'R.J. Palacio',
    },
    {
      cover: img17,
      alt: 'book 13',
      title: 'SAVED',
      polygraphy: 'Hardcover nonfiction',
      description:
        'August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ',
      author: 'R.J. Palacio',
    },
    {
      cover: img18,
      alt: 'book 13',
      title: 'STORM WATCH',
      polygraphy: 'Hardcover nonfiction',
      description:
        'August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ',
      author: 'R.J. Palacio',
    },
    {
      cover: img19,
      alt: 'book 13',
      title: 'TOMORROW, AND TOMORROW, AND TOMORROW',
      polygraphy: 'Hardcover nonfiction',
      description:
        'August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ',
      author: 'R.J. Palacio',
    },
    {
      cover: img13,
      alt: 'book 13',
      title: 'I will find you',
      polygraphy: 'Hardcover fiction',
      description:
        'David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.',
      author: 'Harlan Coben',
    },
    {
      cover: img14,
      alt: 'book 13',
      title: 'Wonder',
      polygraphy: 'Hardcover nonfiction',
      description:
        'August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ',
      author: 'R.J. Palacio',
    },
    {
      cover: img16,
      alt: 'book 13',
      title: 'Hello Beautiful',
      polygraphy: 'Hardcover nonfiction',
      description:
        'August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ',
      author: 'R.J. Palacio',
    },
  ];
  // виклик створення розмітки пагінації та розмітки
  createPagination(data, 1, true);
}

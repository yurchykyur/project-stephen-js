import createPagination from '../pagination/pagination';
import getDataLocalStorage from '../service-local-storage/get-data-local-storage';

const SHOPPING_LIST_LS = 'shopping list';

export default function firstRenderShoppingList() {
  // функція запиту в локал сторедж та отриманні даних
  // const data = getDataLocalStorage(SHOPPING_LIST_LS);

  const data = [
    {
      cover: '',
      alt: 'book 13',
      title: 'I will find you',
      polygraphy: 'Hardcover fiction',
      description:
        'David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.',
      author: 'Harlan Coben',
    },
    {
      cover: '',
      alt: 'book 13',
      title: 'Wonder',
      polygraphy: 'Hardcover nonfiction',
      description:
        'August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ',
      author: 'R.J. Palacio',
    },
    {
      cover: '',
      alt: 'book 13',
      title: 'DAISY JONES & THE SIX',
      polygraphy: 'Hardcover nonfiction',
      description:
        'August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ',
      author: 'R.J. Palacio',
    },
    {
      cover: '',
      alt: 'book 13',
      title: 'Hello Beautiful',
      polygraphy: 'Hardcover nonfiction',
      description:
        'August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ',
      author: 'R.J. Palacio',
    },
    {
      cover: '',
      alt: 'book 13',
      title: 'SAVED',
      polygraphy: 'Hardcover nonfiction',
      description:
        'August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ',
      author: 'R.J. Palacio',
    },
    {
      cover: '',
      alt: 'book 13',
      title: 'STORM WATCH',
      polygraphy: 'Hardcover nonfiction',
      description:
        'August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ',
      author: 'R.J. Palacio',
    },
    {
      cover: '',
      alt: 'book 13',
      title: 'TOMORROW, AND TOMORROW, AND TOMORROW',
      polygraphy: 'Hardcover nonfiction',
      description:
        'August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ',
      author: 'R.J. Palacio',
    },
  ];

  // const data = [
  //   {
  //     _id: '643282b1e85766588626a0a0',
  //     description:
  //       'Nine years after being cast out, a young woman returns to reclaim her place in her family and comes into her own as a bootlegger.',
  //     publisher: 'Scribner',
  //     created_date: '2023-04-05 22:05:23',
  //     title: 'HANG THE MOON',
  //   },
  //   {
  //     id: '643282b2e85766588626a11e',
  //     description:
  //       'A man imprisoned for murdering his 3-year-old son becomes convinced his son is still alive and plans an escape.',
  //     publisher: 'Grand Central',
  //     created_date: '2023-04-05 22:05:23',
  //     title: 'I WILL FIND YOU',
  //   },
  //   {
  //     id: '643282b2e85766588626a156',
  //     description:
  //       'Three women navigate their roles in a well-to-do family living in Brooklyn Heights.',
  //     publisher: 'Pamela Dorman',
  //     created_date: '2023-04-05 22:05:23',
  //     title: 'PINEAPPLE STREET',
  //   },
  //   {
  //     id: '643282b1e85766588626a07c',
  //     description:
  //       'A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.',
  //     publisher: 'Doubleday',
  //     created_date: '2023-04-05 22:05:23',
  //     title: 'LESSONS IN CHEMISTRY',
  //   },
  // {
  //   id: '643282b1e85766588626a0c2',
  //   description:
  //     'In a homage to Louisa May Alcott’s “Little Women,” a young man’s dark past resurfaces as he gets to know the family of his college sweetheart.',
  //   publisher: 'Dial',
  //   created_date: '2023-04-05 22:05:23',
  //   title: 'HELLO BEAUTIFUL',
  // },
  // {
  //   _id: '643282b1e85766588626a0a0',
  //   description:
  //     'Nine years after being cast out, a young woman returns to reclaim her place in her family and comes into her own as a bootlegger.',
  //   publisher: 'Scribner',
  //   created_date: '2023-04-05 22:05:23',
  //   title: 'HANG THE MOON',
  // },
  // {
  //   id: '643282b1e85766588626a07c',
  //   description:
  //     'A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.',
  //   publisher: 'Doubleday',
  //   created_date: '2023-04-05 22:05:23',
  //   title: 'LESSONS IN CHEMISTRY',
  // },
  // {
  //   id: '643282b1e85766588626a0c2',
  //   description:
  //     'In a homage to Louisa May Alcott’s “Little Women,” a young man’s dark past resurfaces as he gets to know the family of his college sweetheart.',
  //   publisher: 'Dial',
  //   created_date: '2023-04-05 22:05:23',
  //   title: 'HELLO BEAUTIFUL',
  // },
  // {
  //   _id: '643282b1e85766588626a0a0',
  //   description:
  //     'Nine years after being cast out, a young woman returns to reclaim her place in her family and comes into her own as a bootlegger.',
  //   publisher: 'Scribner',
  //   created_date: '2023-04-05 22:05:23',
  //   title: 'HANG THE MOON',
  // },
  // {
  //   id: '643282b2e85766588626a11e',
  //   description:
  //     'A man imprisoned for murdering his 3-year-old son becomes convinced his son is still alive and plans an escape.',
  //   publisher: 'Grand Central',
  //   created_date: '2023-04-05 22:05:23',
  //   title: 'I WILL FIND YOU',
  // },
  // {
  //   id: '643282b2e85766588626a156',
  //   description:
  //     'Three women navigate their roles in a well-to-do family living in Brooklyn Heights.',
  //   publisher: 'Pamela Dorman',
  //   created_date: '2023-04-05 22:05:23',
  //   title: 'PINEAPPLE STREET',
  // },
  // {
  //   id: '643282b1e85766588626a07c',
  //   description:
  //     'A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.',
  //   publisher: 'Doubleday',
  //   created_date: '2023-04-05 22:05:23',
  //   title: 'LESSONS IN CHEMISTRY',
  // },
  // {
  //   id: '643282b1e85766588626a0c2',
  //   description:
  //     'In a homage to Louisa May Alcott’s “Little Women,” a young man’s dark past resurfaces as he gets to know the family of his college sweetheart.',
  //   publisher: 'Dial',
  //   created_date: '2023-04-05 22:05:23',
  //   title: 'HELLO BEAUTIFUL',
  // },
  // {
  //   _id: '643282b1e85766588626a0a0',
  //   description:
  //     'Nine years after being cast out, a young woman returns to reclaim her place in her family and comes into her own as a bootlegger.',
  //   publisher: 'Scribner',
  //   created_date: '2023-04-05 22:05:23',
  //   title: 'HANG THE MOON',
  // },
  // {
  //   id: '643282b1e85766588626a07c',
  //   description:
  //     'A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.',
  //   publisher: 'Doubleday',
  //   created_date: '2023-04-05 22:05:23',
  //   title: 'LESSONS IN CHEMISTRY',
  // },
  // {
  //   id: '643282b1e85766588626a0c2',
  //   description:
  //     'In a homage to Louisa May Alcott’s “Little Women,” a young man’s dark past resurfaces as he gets to know the family of his college sweetheart.',
  //   publisher: 'Dial',
  //   created_date: '2023-04-05 22:05:23',
  //   title: 'HELLO BEAUTIFUL',
  // },
  // {
  //   _id: '643282b1e85766588626a0a0',
  //   description:
  //     'Nine years after being cast out, a young woman returns to reclaim her place in her family and comes into her own as a bootlegger.',
  //   publisher: 'Scribner',
  //   created_date: '2023-04-05 22:05:23',
  //   title: 'HANG THE MOON',
  // },
  // {
  //   id: '643282b2e85766588626a11e',
  //   description:
  //     'A man imprisoned for murdering his 3-year-old son becomes convinced his son is still alive and plans an escape.',
  //   publisher: 'Grand Central',
  //   created_date: '2023-04-05 22:05:23',
  //   title: 'I WILL FIND YOU',
  // },
  // {
  //   id: '643282b2e85766588626a156',
  //   description:
  //     'Three women navigate their roles in a well-to-do family living in Brooklyn Heights.',
  //   publisher: 'Pamela Dorman',
  //   created_date: '2023-04-05 22:05:23',
  //   title: 'PINEAPPLE STREET',
  // },
  // {
  //   id: '643282b1e85766588626a07c',
  //   description:
  //     'A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.',
  //   publisher: 'Doubleday',
  //   created_date: '2023-04-05 22:05:23',
  //   title: 'LESSONS IN CHEMISTRY',
  // },
  // {
  //   id: '643282b1e85766588626a0c2',
  //   description:
  //     'In a homage to Louisa May Alcott’s “Little Women,” a young man’s dark past resurfaces as he gets to know the family of his college sweetheart.',
  //   publisher: 'Dial',
  //   created_date: '2023-04-05 22:05:23',
  //   title: 'HELLO BEAUTIFUL',
  // },
  // {
  //   _id: '643282b1e85766588626a0a0',
  //   description:
  //     'Nine years after being cast out, a young woman returns to reclaim her place in her family and comes into her own as a bootlegger.',
  //   publisher: 'Scribner',
  //   created_date: '2023-04-05 22:05:23',
  //   title: 'HANG THE MOON',
  // },
  // {
  //   id: '643282b1e85766588626a07c',
  //   description:
  //     'A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.',
  //   publisher: 'Doubleday',
  //   created_date: '2023-04-05 22:05:23',
  //   title: 'LESSONS IN CHEMISTRY',
  // },
  // {
  //   id: '643282b1e85766588626a0c2',
  //   description:
  //     'In a homage to Louisa May Alcott’s “Little Women,” a young man’s dark past resurfaces as he gets to know the family of his college sweetheart.',
  //   publisher: 'Dial',
  //   created_date: '2023-04-05 22:05:23',
  //   title: 'HELLO BEAUTIFUL',
  // },
  // ];
  // виклик створення розмітки пагінації та розмітки
  createPagination(data, 1, true);
}

import BooksCollectionProps from '../components/Books/BooksCollection/types';
import HeaderProps from '../components/common/Header/types';

import image1 from './../public/books_1.png';
import image2 from './../public/books_2.png';
import image3 from './../public/books_3.png';

export const booksContent: BooksCollectionProps[] = [
  {
    imgSrc: image1,
    imgAlt: 'Image 1',
    title: "The world's most valuable children's books",
    descriptionSide: 'left',
    description:
      "Children's books can be valuable if they are the right edition in the right condition. Discover 10 books that command high prices.",
  },
  {
    imgSrc: image2,
    imgAlt: 'Image 2',
    title: 'Investigate these classic mysteries',
    descriptionSide: 'right',
    description:
      "The British Library's Crime Classics series reprints detective novels and stories that were first published during the golden age of crime writing.",
  },
  {
    imgSrc: image3,
    imgAlt: 'Image 3',
    title: 'New Book Releases',
    descriptionSide: 'left',
    description:
      "From Prince Harry's memoir to Michael Connelly's latest novel, explore our recommended new books and discover literature that has everyone talking.",
  },
];

export const booksTextBlock: HeaderProps['textBlock'] = {
  title: 'Chapter Corner',
  description:
    'ChapterCorner is a vibrant and user-friendly online book library and shop designed for book enthusiasts of all ages. With a vast collection of books across all genres, we offer a one-stop solution for all your literary needs.',
  position: 'left',
};

export const animeTextBlock: HeaderProps['textBlock'] = {
  title: 'Animania',
  description:
    'Animania is a vast and immersive anime library that offers a wide range of anime content for fans of all ages and interests. From classic series to the latest releases, Animania has something for everyone.',
  position: 'left',
};

export const filmsTextBlock: HeaderProps['textBlock'] = {
  title: 'Film-go',
  description:
    'From Hollywood blockbusters to indie gems, FilmHub is your one-stop destination for all things cinema. With a user-friendly interface and endless options, you can easily discover, watch, and discuss your favorite films and TV shows',
  position: 'right',
};

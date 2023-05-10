import React from 'react';
import HeadMeta from '../components/common/HeadMeta';
import Navbar from '../components/common/Navbar';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import BooksCollection from '../components/Books/BooksCollection';

import imageAnime from './../public/anime_1.png';
import imageFilms from './../public/films_1.png';
import { animeTextBlock, filmsTextBlock, booksTextBlock, booksContent } from './constants';

const HomePage = () => {
  const content = booksContent[0];

  return (
    <div css={{ backgroundColor: 'black' }}>
      <HeadMeta title="MacroFrontEnd" description="main page of Macrofrontend Team" />
      <Navbar />
      <Header background={imageAnime} textBlock={animeTextBlock} height={600} withoutButton />
      <Header background={imageFilms} textBlock={filmsTextBlock} height={600} withoutButton />
      <Header
        textBlock={booksTextBlock}
        height={600}
        contentBlock={
          <BooksCollection
            title={content.title}
            description={content.description}
            descriptionSide={content.descriptionSide}
            imgSrc={content.imgSrc}
            imgAlt={content.imgAlt}
          />
        }
        withoutButton
      />
      <Footer />
    </div>
  );
};

export default HomePage;

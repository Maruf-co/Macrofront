import React from 'react';

import HeadMeta from '../components/common/HeadMeta';
import Navbar from '../components/common/Navbar';
import Header from '../components/common/Header';
import BooksSearch from '../components/Books/BooksSearch';
import Footer from '../components/common/Footer';
import BooksCollection from '../components/Books/BooksCollection';

import { booksContent, booksTextBlock } from './constants';

const BooksPage = () => {
  const renderedContent = booksContent.map((item, id) => {
    return (
      <BooksCollection
        key={id}
        title={item.title}
        description={item.description}
        descriptionSide={item.descriptionSide}
        imgSrc={item.imgSrc}
        imgAlt={item.imgAlt}
      />
    );
  });

  return (
    <>
      <HeadMeta title="MacroFrontEnd books" description="Books page of Macrofrontend Team" />
      <Navbar />
      <Header textBlock={booksTextBlock} contentBlock={renderedContent} height={1720} />
      <BooksSearch />
      <Footer />
    </>
  );
};

export default BooksPage;

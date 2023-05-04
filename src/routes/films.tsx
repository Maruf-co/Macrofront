import React from 'react';
import HeadMeta from '../components/common/HeadMeta';
import Navbar from '../components/common/Navbar';
import Header from '../components/common/Header';
import TopMovies from '../components/Movie/TopMovies';
import MovieSearch from '../components/Movie/MovieSearch';
import Footer from '../components/common/Footer';

import image from './../public/films_1.png';
import { filmsTextBlock } from './constants';

const FilmsPage = () => {
  return (
    <>
      <HeadMeta title="MacroFrontEnd films" description="Films page of Macrofrontend Team" />
      <Navbar />
      <Header background={image} textBlock={filmsTextBlock} />
      <TopMovies />
      <MovieSearch />
      <Footer />
    </>
  );
};

export default FilmsPage;

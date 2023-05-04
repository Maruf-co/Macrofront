import React from 'react';
import Navbar from '../components/common/Navbar';
import Banner from '../components/Anime/Banner';
import SearchBlock from '../components/Anime/SearchBlock';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import HeadMeta from '../components/common/HeadMeta';

import image from './../public/anime_1.png';
import { animeTextBlock } from './constants';

const AnimePage = () => {
  return (
    <>
      <HeadMeta title="MacroFrontEnd anime" description="Anime page of Macrofrontend Team" />
      <Navbar />
      <Header background={image} textBlock={animeTextBlock} />
      <Banner />
      <SearchBlock />
      <Footer />
    </>
  );
};

export default AnimePage;

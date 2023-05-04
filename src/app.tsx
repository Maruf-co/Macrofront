import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AnimePage from './routes/anime';
import FilmsPage from './routes/films';
import BooksPage from './routes/books';
import HomePage from './routes/home';

const App = () => {
  return (
    <Routes>
      <Route path="/macrofrontend/" element={<HomePage />} />
      <Route path="/macrofrontend/anime" element={<AnimePage />} />
      <Route path="/macrofrontend/films" element={<FilmsPage />} />
      <Route path="/macrofrontend/books" element={<BooksPage />} />
    </Routes>
  );
};

export default App;

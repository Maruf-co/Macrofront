import React, { useState } from 'react';
import axios from 'axios';

import { booksData } from '../../../mocks/books';
import SelectMenu from '../../common/SelectMenu/selectMenu';
import Input from '../../common/Input';
import Books from '../Books';
import { Option } from '../../common/SelectMenu/types';

import { ContainerStyled, SearchStyle, TextStyle } from './BooksSearch.styles';

import { SearchProps } from './types';
import { options, maxBooksSize } from './texts';

const getBooksList = async (searchProps: SearchProps) => {
  console.log(searchProps);

  const response = await axios.get(
    `https://openlibrary.org/search.json?q=${searchProps.query}${
      'any' != searchProps.sortBy ? `&sort=${searchProps.sortBy}` : ''
    }&limit=${maxBooksSize}`
  );

  const booksResults = response.data.docs
    .filter(
      (book: any) =>
        book.key &&
        book.cover_i &&
        book.title &&
        book.author_name &&
        book.first_publish_year &&
        book.publisher &&
        book.isbn
    )
    .slice(0, maxBooksSize);

  return booksResults;
};

const BooksSearch: React.FC = () => {
  // ! DEV only
  const [apiResponse, setApiResponse] = useState(booksData);

  const [searchProps, setSearchProps] = useState<SearchProps>({
    query: 'popular books',
    sortBy: 'any',
  });

  const handleChange = (value: string, field: string) => {
    setSearchProps({ ...searchProps, [field]: value });
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ! DEV only, uncomment after
    // const res = await getBooksList(searchProps);
    // setApiResponse(res);
  };

  return (
    <ContainerStyled>
      <form onSubmit={handleSearch} id="search-form">
        <div css={SearchStyle}>
          <div>
            <div css={TextStyle}>Search</div>
            <Input
              type="text"
              placeholder={'Enter keyword, title, author'}
              onChange={(e: string) => handleChange(e, 'query')}
            />
          </div>
          <div>
            <div css={TextStyle}>Sort by</div>
            <SelectMenu
              options={options}
              onChange={(e: Option) => handleChange(e.value, 'sortBy')}
            />
          </div>
        </div>
      </form>
      <Books books={apiResponse} />
    </ContainerStyled>
  );
};

export default BooksSearch;

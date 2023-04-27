/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useState } from "react";
import axios from "axios";
import { ContainerStyled, SearchStyle, TextStyle } from "./Moive.styles";
import SelectMenu from "../SelectMenu/selectMenu";
import Input from "../Input";
import Movies from "./Movies";
import { MovieData, SortsOption } from "./types";
import { Option } from "../SelectMenu/types";

const options: Option[] = [
  { value: "any", label: "Any" },
  { value: "title", label: "Title" },
  { value: "new", label: "New" },
  { value: "old", label: "Old" },
];
const MaxMoviesSize: number = 20;

const MovieSearch: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [sortOption, setSortOption] = useState<SortsOption>("any");

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios({
        "method": "GET",
        "url": "https://imdb8.p.rapidapi.com/title/v2/find",
        "headers": {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
          "x-rapidapi-key": "4bd2e28445mshe1aa9f3783e369dp158a81jsn6f3dc6aa2808",
          "useQueryString": true
        },
        "params": {
          "q": inputValue,
          "s": sortOption
        }
      });
      const movieResults = response.data.results
        .filter(
          (movie: any) =>
            movie.image &&
            movie.title &&
            movie.year &&
            movie.plot
        )
        .slice(0, MaxMoviesSize)
        .map((movie: any) => ({
          title: movie.title,
          overview: movie.plot,
          release_date: movie.year,
          poster_path: movie.image.url,
        }));
      setMovies(movieResults);
    } catch (error) {
      console.error("My error: " + error);
    }
  };

  const handleInputChange = (event: string): void => {
    const newValue: string = event.toString().toLowerCase();
    setInputValue(newValue);
  };

  const handleSortChange = (event: Option): void => {
    const selectedOption: SortsOption = event.value as SortsOption;
    setSortOption(selectedOption);
  };

  return (
    <ContainerStyled>
      <form onSubmit={handleSearch} id="search-form">
        <div css={SearchStyle}>
          <div>
            <div css={TextStyle}>Search</div>
            <Input
              type="text"
              placeholder={"Enter keyword, title, or release year"}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div css={TextStyle}>Sort by</div>
            <SelectMenu
              options={options}
              onChange={handleSortChange}
            />
          </div>
        </div>
      </form>
      <Movies movies={movies} />
    </ContainerStyled>
  );
};

export default MovieSearch;

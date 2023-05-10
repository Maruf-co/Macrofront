export const apiResponse = {
  '@meta': {
    operation: 'AdvancedTitleSearch',
    requestId: 'e4b80bb2-8e33-436c-9438-84dcc91a6bd7',
    serviceTimeMs: 25.241825,
  },
  '@type': 'imdb.api.search.advanced.response',
  paginationKey: '1',
  results: [
    {
      id: '/title/tt0944947/',
      image: {
        height: 1500,
        id: '/title/tt0944947/images/rm4204167425',
        url: 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg',
        width: 1102,
      },
      title: 'Game of Thrones',
      titleType: 'tvSeries',
      year: 2011,
    },
    {
      id: '/title/tt13380510/',
      image: {
        height: 1200,
        id: '/title/tt13380510/images/rm3337093633',
        url: 'https://m.media-amazon.com/images/M/MV5BNTg1MjEyNWYtNzJkZi00ZTM5LThlNWMtMmNiNmE3N2QxNTllXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg',
        width: 782,
      },
      title: 'Game of Thrones',
      titleType: 'video',
      year: 2003,
    },
    {
      id: '/title/tt6857128/',
      image: {
        height: 750,
        id: '/title/tt6857128/images/rm3530220545',
        url: 'https://m.media-amazon.com/images/M/MV5BODg5NDJhMjYtMTYyYi00NzAwLTliNmYtNGZhMjQ4ZjNkMjgyXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_.jpg',
        width: 1334,
      },
      title: 'Unaired Game of Thrones Prequel Pilot',
      titleType: 'tvMovie',
      year: 2019,
    },
    {
      id: '/title/tt21073266/',
      proOnly: true,
      title: 'Untitled Jon Snow/Game of Thrones Spinoff',
      titleType: 'tvSeries',
    },
    {
      id: '/title/tt3391176/',
      image: {
        height: 898,
        id: '/title/tt3391176/images/rm3384681216',
        url: 'https://m.media-amazon.com/images/M/MV5BODg0YTM4NzEtZDQyNi00M2MzLWE3MDQtNjcxNTkxNWM0NzNhXkEyXkFqcGdeQXVyMjM5NzU3OTM@._V1_.jpg',
        width: 640,
      },
      title: 'Game of Thrones: A Telltale Games Series',
      titleType: 'videoGame',
      year: 2014,
    },
    {
      id: '/title/tt10090796/',
      image: {
        height: 1200,
        id: '/title/tt10090796/images/rm357065984',
        url: 'https://m.media-amazon.com/images/M/MV5BZDdlMzQzNDQtNTAxMS00NTMyLTgxYTAtYzQ0OGI1YzZhY2Y3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
        width: 810,
      },
      title: 'Game of Thrones: The Last Watch',
      titleType: 'tvMovie',
      year: 2019,
    },
    {
      id: '/title/tt7937220/',
      image: {
        height: 840,
        id: '/title/tt7937220/images/rm3655100416',
        url: 'https://m.media-amazon.com/images/M/MV5BMGYzNDJiOTgtN2Y1OC00NmM2LTk3MTMtZmFhNmJlMzQzNGNhXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_.jpg',
        width: 600,
      },
      title: 'Game of Thrones Conquest & Rebellion: An Animated History of the Seven Kingdoms',
      titleType: 'video',
      year: 2017,
    },
    {
      id: '/title/tt6411748/',
      image: {
        height: 1330,
        id: '/title/tt6411748/images/rm263377153',
        url: 'https://m.media-amazon.com/images/M/MV5BMzc3M2U2NzAtMmY1MS00NWYwLWFmMzctYzE2NWEyODYxNTk4XkEyXkFqcGdeQXVyMzIzNzE4Njk@._V1_.jpg',
        width: 1021,
      },
      title: 'Purge of Kingdoms',
      titleType: 'movie',
      year: 2019,
    },
    {
      id: '/title/tt2653342/',
      image: {
        height: 375,
        id: '/title/tt2653342/images/rm1801310720',
        url: 'https://m.media-amazon.com/images/M/MV5BMTU1MzU2MDE4MV5BMl5BanBnXkFtZTgwNTc3NzA2MDE@._V1_.jpg',
        width: 500,
      },
      title: 'Game of Thrones: Season 2 - Character Profiles',
      titleType: 'video',
      year: 2013,
    },
  ],
  totalMatches: 1642,
};

export const filmsData = apiResponse.results.map((movie: any) => ({
  key: movie.id,
  id: movie.id.substring(7, movie.id.length - 1),
  title: movie.title,
  type: movie.titleType,
  year: movie.year,
  image_url: movie.image ? movie.image.url : 'no image',
}));

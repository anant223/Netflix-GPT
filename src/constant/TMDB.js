
const TMDBMedia = [
  {
    id: 1,
    title: "Trending ›",
    api: `https://api.themoviedb.org/3/trending/all/day?language=en-US`,
  },
  {
    id: 2,
    title: "Popular TV Shows ›",
    api: "https://api.themoviedb.org/3/tv/popular?language=en-US",
  },
  {
    id: 3,
    title: "Now Playing ›",
    api: "https://api.themoviedb.org/3/movie/now_playing",
  },
  {
    id: 4,
    title: "Top Rated ›",
    api: "https://api.themoviedb.org/3/movie/top_rated?language=en-US",
  },
];


const TMDBMediaMovies = [
  {
    id: 1,
    title: "Trending Movies ›",
    api: `https://api.themoviedb.org/3/trending/movie/day?language=en-US`,
  },
  {
    id: 2,
    title: "Popular Movies ›",
    api: "https://api.themoviedb.org/3/movie/popular?language=en-US",
  },
  {
    id: 3,
    title: "Now Playing Movies ›",
    api: "https://api.themoviedb.org/3/movie/now_playing",
  },
  {
    id: 4,
    title: "Top Rated Movies ›",
    api: "https://api.themoviedb.org/3/movie/top_rated?language=en-US",
  },
];

const TMDBMediaTVShows = [
  {
    id: 1,
    title: "Trending TV Shows ›",
    api: `https://api.themoviedb.org/3/trending/tv/day?language=en-US`,
  },
  {
    id: 2,
    title: "Popular TV Shows ›",
    api: "https://api.themoviedb.org/3/tv/popular?language=en-US",
  },
  {
    id: 4,
    title: "Top Rated TV Shows ›",
    api: "https://api.themoviedb.org/3/tv/top_rated?language=en-US",
  },
];

const generMovie = "https://api.themoviedb.org/3/genre/movie/list"
const generTV = "https://api.themoviedb.org/3/genre/tv/list";


export {TMDBMedia, generMovie, generTV, TMDBMediaMovies, TMDBMediaTVShows}
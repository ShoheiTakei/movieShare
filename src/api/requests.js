const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const requests = {
  feachTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=ja`,
  feachNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
  feactTopRated: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&languager=ja`,
  feactActionMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=28`,
  feactComedyMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=35`,
  feactHorrorMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=27`,
  feactRomanceMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  feactDocumentMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=99`,
};

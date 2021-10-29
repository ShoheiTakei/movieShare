const API_KEY = '3f02854aabb8d05cb35327537b09e802';

export const requests = {
  feachTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-us`,
  feachNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
  feactTopRated: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&languager=en-us`,
  feactActionMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=28`,
  feactComedyMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=35`,
  feactHorrorMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=27`,
  feactRomanceMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  feactDocumentMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=99`,
};

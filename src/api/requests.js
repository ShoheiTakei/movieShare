const API_KEY = '3f02854aabb8d05cb35327537b09e802';

export const requests = {
  feachTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=JP`,
  feachNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213&languager=JP`,
  feactTopRated: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&languager=JP`,
  feactActionMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=28&languager=JP`,
  feactComedyMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=35&languager=JP`,
  feactHorrorMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=27&languager=JP`,
  feactRomanceMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10749&languager=JP`,
  feactDocumentMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=99&languager=JP`,
};

const API_KEY = '3f02854aabb8d05cb35327537b09e802';

export const requests = {
  feachTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=ja-JP`,
  feachNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213&language=ja-JP`,
  feactTopRated: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=ja-JP`,
  feactActionMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=28&language=ja-JP`,
  feactComedyMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=35&language=ja-JP`,
  feactHorrorMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=27&language=ja-JP`,
  feactRomanceMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10749&language=ja-JP`,
  feactDocumentMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=99&language=ja-JP`,
};

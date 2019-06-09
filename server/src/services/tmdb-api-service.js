const TmdbApiService = (function() {
  const fetch = require("node-fetch");
  
  return {
    getNowPlayingMovies: async function(page) {
      let fResponse = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=${page}`
      );
      return await fResponse.json();
    }
  };
})();

module.exports = TmdbApiService;

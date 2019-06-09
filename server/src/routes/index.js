const { voteForMovie, getNowPlayingMovies } = require("./movie-routes");
const tmdbService = require("../services/tmdb-api-service");

// routes and routes with dependency injection
const routes = [voteForMovie, getNowPlayingMovies({ service: tmdbService })];

module.exports = routes;

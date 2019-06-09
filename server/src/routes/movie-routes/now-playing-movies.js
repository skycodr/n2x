const getNowPlayingMovies = function({ service }) {
  return {
    method: "get",
    path: "/movies/:page",
    handler: async function(req, res) {
      let { page } = req.params;
      if (!Number.isSafeInteger(page)) page = 1;
      let fData = null;
      if (service) fData = await service.getNowPlayingMovies(page);

      res.send(fData);
    }
  };
};

module.exports = getNowPlayingMovies;

const ExpressApiServer = function({ port, handler: hConnection }) {
  const express = require("express");
  const Router = require("./simple-router");

  const expressApp = express();

  const server = expressApp.listen(port, hConnection);
  const address = server.address();

  const host = address.address === "::" ? "localhost" : address.address;

  const router = Router({ expressApp });

  return {
    getRouter: function() {
      return router;
    },
    addRoute: function(data) {
      router.add(data);
    },
    addRoutes: function(data) {
      router.addRoutes(data);
    },
    host,
    port
  };
};

module.exports = ExpressApiServer;

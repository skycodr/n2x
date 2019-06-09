const Application = function() {
  const ExpressApiServer = require("./api-server/express-api-server"); // Import the api server
  const routes = require("./routes"); // Import routes

  const server = ExpressApiServer({
    port: process.env.PORT || 8080,
    handler: function() {
      console.log(`Server up on http://${server.host}:${server.port}`);
    }
  });

  server.addRoutes(routes); // Add Routes
};

module.exports = Application;

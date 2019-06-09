const Router = function({ expressApp }) {
  return {
    add: function({ method, path, handler }) {
  
      if (!(method && path && handler))
        throw new Error("Require method, path, and handler properties");

      switch (method.toLowerCase()) {
        case "post":
          expressApp.post(path, handler);
          break;
        case "delete":
          expressApp.delete(path, handler);
          break;
        case "put":
          expressApp.put(path, handler);
          break;
        case "get":
        default:
          expressApp.get(path, handler);
      }
    },

    addRoutes: function(routes) {
      if (!(routes instanceof Array)) throw new Error("Expected [] of routes");

      routes.forEach(route => {
        this.add(route);
      });
    }
  };
};

module.exports = Router;

const form = require("./authRoutes");
module.exports = function (app) {
  app.post("/login", form.login);
  app.post("/signup", form.signup);
};

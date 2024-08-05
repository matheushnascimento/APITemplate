const { Router } = require("express");

const routes = Router();

const usersRoutes = require("../routes/users.routes.js");

routes.use("/users", usersRoutes);

module.exports = routes;

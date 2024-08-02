const { Router } = require("express");

const routes = Router();

const sampleRoutes = require("../routes/sample.routes.js");

routes.use("/sample", sampleRoutes);

module.exports = routes;

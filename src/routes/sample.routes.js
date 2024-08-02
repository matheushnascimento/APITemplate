const { Router } = require("express");

const sampleRouter = Router();

const SampleController = require("../controllers/SampleController");

const sampleController = new SampleController();

sampleRouter.get("/", sampleController.sampleMethod);

module.exports = sampleRouter;

const { Router } = require("express");

const usersRouter = Router();

const UsersController = require("../controllers/UsersController");

const usersController = new UsersController();

usersRouter.get("/:id", usersController.fetch);
usersRouter.post("/", usersController.create);
usersRouter.put("/:id", usersController.update);
usersRouter.delete("/:id", usersController.delete);
module.exports = usersRouter;

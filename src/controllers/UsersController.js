const CreateUsersService = require("../services/users/CreateUserService");
const UsersRepository = require("../repositories/UsersRepository");

class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body;
    const usersRepository = new UsersRepository();
    const createUsersService = new CreateUsersService(usersRepository);
    await createUsersService.execute({ name, email, password });
    res.status(200).json();
  }
}

module.exports = UsersController;

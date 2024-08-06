const bcrypt = require("bcrypt");
const CreateUsersService = require("../services/users/CreateUserService");
const UpdateUsersService = require("../services/users/UpdateUserService");
const DeleteUsersService = require("../services/users/DeleteUsersService");
const FetchUsersService = require("../services/users/FetchUsersService.js");

const UsersRepository = require("../repositories/UsersRepository");

class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body;
    const usersRepository = new UsersRepository();
    const createUsersService = new CreateUsersService(usersRepository);
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(password, salt);

    await createUsersService.execute({
      name,
      email,
      password: hashedPassword,
    });

    res.status(200).json();
  }

  async update(req, res) {
    const { name, email, password } = req.body;
    const { id } = req.params;
    const usersRepository = new UsersRepository();
    const updateUsersService = new UpdateUsersService(usersRepository);
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = {
      id,
      name,
      email,
      password: hashedPassword,
    };

    await updateUsersService.execute(user);
    return res.status(200).json();
  }

  async delete(req, res) {
    const { id } = req.params;
    const usersRepository = new UsersRepository();
    const deleteUsersService = new DeleteUsersService(usersRepository);
    await deleteUsersService.execute(id);

    return res.status(200).json();
  }

  async fetch(req, res) {
    const { id } = req.params;
    const usersRepository = new UsersRepository();
    const fetchUsersService = new FetchUsersService(usersRepository);

    const user = await fetchUsersService.execute(id);
    delete user.password;

    res.status(200).json(user);
  }
}

module.exports = UsersController;

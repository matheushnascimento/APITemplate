const bcrypt = require("bcrypt");
const AppError = require("../../utils/AppError");

class CreateUsersService {
  constructor(repository) {
    this.repository = repository;
  }

  async execute({ name, email, password }) {
    try {
      const userExists = await this.repository.findByEmail(email);

      if (userExists) {
        throw new AppError("E-mail, já está em uso", 201);
      }

      const salt = bcrypt.genSaltSync();
      const hashedPassword = bcrypt.hashSync(password, salt);

      this.repository.createUser({ name, email, password: hashedPassword });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CreateUsersService;

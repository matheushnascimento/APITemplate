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

      this.repository.createUser({ name, email, password });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = CreateUsersService;

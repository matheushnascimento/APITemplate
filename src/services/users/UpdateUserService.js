const AppError = require("../../utils/AppError");

class CreateUsersService {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(user) {
    try {
      const updatedUser = await this.repository.findById(user.id);

      if (!updatedUser) {
        throw new AppError("Usuário não encontrado", 404);
      }

      await this.repository.updateUser(user);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = CreateUsersService;

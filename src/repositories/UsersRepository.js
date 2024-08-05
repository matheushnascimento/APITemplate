const knex = require("../database/index");

class UsersRepository {
  async findByEmail(email) {
    const result = await knex("users").where({ email }).first();
    return result;
  }

  async createUser({ name, email, password }) {
    await knex("users").insert({ name, email, password });
  }
}

module.exports = UsersRepository;

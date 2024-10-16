const knex = require("../database/index");

class UsersRepository {
  async findById(id) {
    return await knex("users").where({ id }).first();
  }
  async findByEmail(email) {
    const result = await knex("users").where({ email }).first();
    return result;
  }

  async createUser({ name, email, password }) {
    await knex("users").insert({ name, email, password });
  }

  async updateUser(user) {
    const { id, name, email, password } = user;
    knex("users").update({ name, email, password }).where({ id });
  }

  async deleteUser(id) {
    await knex("users").where({ id }).delete();
  }
}

module.exports = UsersRepository;

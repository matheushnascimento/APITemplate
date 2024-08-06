class DeleteUsersService {
  constructor(repository) {
    this.repository = repository;
  }

  execute(id) {
    return this.repository.deleteUser(id);
  }
}

module.exports = DeleteUsersService;

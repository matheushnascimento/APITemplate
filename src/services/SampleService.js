class SampleService {
  constructor(repository) {
    this.repository = repository;
  }

  async execute() {
    const result = await this.repository.find();

    console.log(result);
  }
}

module.exports = SampleService;

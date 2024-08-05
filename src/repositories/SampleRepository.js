const knex = require("../database/index");

class SampleRepository {
  find() {
    console.log("finding");

    return knex("sampleTable");
  }
}

module.exports = SampleRepository;

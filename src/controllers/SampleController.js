const SampleService = require("../services/SampleService");
const SampleRepository = require("../repositories/SampleRepository");
class SampleController {
  sampleMethod(req, res) {
    const sampleRepository = new SampleRepository();
    const sampleService = new SampleService(sampleRepository);

    sampleService.execute();

    console.log("sample method");
    res.status(200).json({ message: "sample method" });
  }
}

module.exports = SampleController;

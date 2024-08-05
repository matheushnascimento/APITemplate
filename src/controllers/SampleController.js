const AppError = require("../utils/AppError");

class SampleController {
  sampleMethod(req, res) {
    if (!req.body) {
      throw new AppError("Test AppError", 400);
    }

    console.log("sample method");
    res.status(200).json({ message: "sample method" });
  }
}

module.exports = SampleController;

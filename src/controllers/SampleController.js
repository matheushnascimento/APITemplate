class SampleController {
  sampleMethod(req, res) {
    console.log("sample method");
    res.status(200).json({ message: "sample method" });
  }
}

module.exports = SampleController;

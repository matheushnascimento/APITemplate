require("express-async-errors");
const express = require("express");
const routes = require("./routes");
const AppError = require("./utils/AppError");

const app = express();

app.use(routes);

const port = 3333;

app.use((req, res, next, error) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

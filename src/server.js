require("express-async-errors");

const express = require("express");
const routes = require("./routes");
const AppError = require("./utils/AppError");

const app = express();

const port = 3333;

app.use(express.json());
app.use(routes);

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
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

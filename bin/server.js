const mongoose = require("mongoose");
const app = require("../app.js");

const { DB_HOST, PORT = 3000 } =
  process.env; /* переменные глобального окружения */

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(PORT))
  .then(console.log("Database connection successful"))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
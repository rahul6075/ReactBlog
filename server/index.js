const express = require("express");
const dotenv = require("dotenv");
const mongoDB = require("./config/db");
const morgan = require("morgan");
const userRoute = require("./routes/Users");
const postRoute = require("./routes/Posts");

dotenv.config();
const app = express();
mongoDB();
app.use(express.json());
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

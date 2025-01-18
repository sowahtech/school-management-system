require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT;

// ROUTERS IMPORT
const schoolRouter = require("./routers/school.routes.js");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

mongoose
  .connect(uri)
  .then((db) => {
    console.log("MongoDb is connected successfully.");
  })
  .catch((e) => {
    console.log("MongoDb error", e);
  });
app.use("/api/school", schoolRouter);
app.listen(PORT, () => {
  console.log("Server is running on PORT=>", PORT);
});

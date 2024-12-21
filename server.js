require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.get("/test", (req, res) => {
  res.send({ id: 1, message: "app working fine" });
});

mongoose
  .connect("mongodb://localhost:27017/schoolManagement2024")
  .then((db) => {
    console.log("MongoDb is connected successfully.");
  })
  .catch((e) => {
    console.log("MongoDb error", e);
  });

app.listen(PORT, () => {
  console.log("Server is running on PORT=>", PORT);
});

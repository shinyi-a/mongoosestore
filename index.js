// const express = require("express");
// const app = express();
const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT || 8000;
require("dotenv").config();

const MONGO_PWD = process.env.MONGO_PWD;
const MONGO_DATABASE = process.env.MONGO_DATABASE;
const MONGO_USER = process.env.MONGO_USER;
const MONGO_BASE_URL = process.env.MONGO_BASE_URL;
const MONGO_URL = `mongodb+srv://${MONGO_USER}:${MONGO_PWD}@${MONGO_BASE_URL}/${MONGO_DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(MONGO_URL).then(() => {
  console.log("database connected");
  app.listen(PORT, () => {
    console.log("listening on", PORT);
  });
});

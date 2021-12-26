const express = require("express");
const app = express();
const mongoose = require("mongoose");
const apps = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("listening on ", PORT);
});

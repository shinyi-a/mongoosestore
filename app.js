const express = require("express");
const viewcontroller = require("./controllers/viewcontroller");

const app = express();
app.use(express.json());
app.use(viewcontroller);

module.exports = app;

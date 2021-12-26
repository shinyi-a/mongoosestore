const express = require("express");
const app = express();

const viewcontroller = require("./controllers/viewcontroller");

app.use(express.json());
app.use(viewcontroller);

module.exports = apps;

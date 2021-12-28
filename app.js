const express = require("express");
const app = express();

const viewcontroller = require("./controllers/viewcontroller");
const apicontroller = require("./controllers/apicontroller");

app.use(express.json());
app.use("/product", viewcontroller);
app.use("/api", apicontroller);

module.exports = app;

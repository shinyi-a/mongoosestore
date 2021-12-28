const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const methodOverride = require("method-override");

router.use(express.static("public", { maxAge: 20000 }));
router.use(express.urlencoded({ extended: true }));
router.use(methodOverride("_method"));

//page to view all products
router.get("/", async (req, res) => {
  const product = await Product.find();
  res.render("index.ejs", { product: product });
});

//page to create new products
router.get("/new", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render("new.ejs", { index: req.params.id, product: product });
});

router.post("/new", async (req, res) => {
  console.log("test");
});

//page to show one product
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("show.ejs"), { product: product };
});

//page to edit products
router.put("/:id", (req, res) => {
  console.log("edit product");
});

//page to delete products
router.delete("/:id", (req, res) => {
  console.log("delete");
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/seed", async (req, res) => {
  const newProducts = [
    {
      name: "Beans",
      description:
        "A small pile of beans. Buy more beans for a big pile of beans.",
      img: "https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2",
      price: 5,
      qty: 99,
    },
    {
      name: "Bones",
      description: "It's just a bag of bones.",
      img: "http://bluelips.com/prod_images_large/bones1.jpg",
      price: 25,
      qty: 0,
    },
    {
      name: "Bins",
      description: "A stack of colorful bins for your beans and bones.",
      img: "http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg",
      price: 7000,
      qty: 1,
    },
  ];

  try {
    const seedItems = await Product.create(newProducts);
    res.send(seedItems);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;

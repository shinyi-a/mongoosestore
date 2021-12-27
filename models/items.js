const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  img: String,
  price: {
    type: Number,
    min: 0,
  },
  qty: {
    type: Number,
    min: 0,
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;

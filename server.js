const express = require("express");

const app = express();

// mongodb+srv://ido:<password>@cluster0.bpvpxkj.mongodb.net/?retryWrites=true&w=majority

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:VYcgjZKhltEVwKLA@cluster0.bpvpxkj.mongodb.net/test?retryWrites=true&w=majority"
);

const Product = mongoose.model("Product", {
  title: String,
  id: Number,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: { rate: Number, count: Number },
}); //product model

// GET /products - all products
app.get("/products", async function (req, res) {
  const products = await Product.find();
  res.json(products);
});

// GET /products/:id - return single product by id
app.get("/products/:id", async function (req, res) {
  const product = await Product.findOne({ id: parseInt(req.params.id) });
  res.json(product);
});

app.listen(4000, function () {
  console.log("server run on port 4000");
});

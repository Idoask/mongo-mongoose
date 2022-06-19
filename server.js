const express = require("express");

const app = express();

const products = require("./products.json");

// GET /products - all products
app.get("/products", function (req, res) {
  res.json(products);
});

// GET /products/:id - return single product by id
app.get("/products/:id", function (req, res) {
  const product = products.find((p => p.id === parseInt(req.params.id)));
  res.json(product)
});

app.listen(4000, function () {
  console.log("server run on port 4000");
});

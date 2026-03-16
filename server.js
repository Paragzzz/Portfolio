require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const Product = require("./models/Product");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Mongo Connected"));

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const storage = multer.diskStorage({});
const upload = multer({ storage });
app.delete("/api/products/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.put("/api/products/:id", upload.single("image"), async (req, res) => {
  try {

    let updateData = {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      description: req.body.description
    };

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      updateData.image = result.secure_url;
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json(product);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// ⭐ ADD PRODUCT API
app.post("/api/products", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);

    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      image: result.secure_url
    });

    await product.save();
    res.json(product);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ⭐ GET PRODUCTS
app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.listen(process.env.PORT, () =>
  console.log("Server running")
);
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Models
const Product = mongoose.model("Product", new mongoose.Schema({
    name: String,
    description: String,
    price: Number
}));

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => res.render("index"));
app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.render("products", { products });
});
app.get("/pricing", async (req, res) => {
    const products = await Product.find();
    res.render("pricing", { products });
});
app.get("/about", (req, res) => res.render("about"));
app.get("/contact", (req, res) => res.render("contact"));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

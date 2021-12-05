require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
const mongoose = require("mongoose");



connectDB();


const app = express();
const cors = require("cors")

app.use(cors());
app.use(express.json());


//data schema
const itemSchema = {
    name: String,
    imageUrl: String,
    description: String,
    price: String,
    countInStock: String,
};


//data model
const Item = mongoose.model("Products", itemSchema);


//read route
app.get("/items", (req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error: " + err));
});

//create route
app.post("/newitem", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
    price: req.body.price,
    countInStock: req.body.countInStock,
  });

  newItem
    .save()
    .then((item) => console.log(item))
    .catch((err) => res.status(400).json("Error " + err));
});

//delete route
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  Item.findByIdAndDelete({ _id: id }, (req, res, err) => {
    if (!err) {
      console.log("Item deleted");
    } else {
      console.log(err);
    }
  });
});

//update route
app.put("/put/:id", (req, res) => {
  const updatedItem = {
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
    price: req.body.price,
    countInStock: req.body.countInStock,
  };

  Item.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: updatedItem },
    (req, res, err) => {
      if (!err) {
        console.log("Item updated");
      } else {
        console.log(err);
      }
    }
  );
});

// app.use("/", require("./routes/noteRoute"))

app.get("/items", (req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error" + err))
})
// app.get("/", (req, res) => {
//   res.json({ message: "API running..." });
// });

app.use("/api/products", productRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

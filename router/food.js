const express = require("express");
const Router = express.Router();
const Food = require("../database/Food");

// Create

// Read All
Router.get("/", (req, res) => {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(Food, null, 2));
});

// Read Single

// Update

// Delete

module.exports = Router;

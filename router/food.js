const express = require("express");
const Router = express.Router();
const Food = require("../database/Food");

// Create

// Read All
Router.get("/", (req, res) => {
  const header = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "X-Requested-With,content-type",
    "Access-Control-Allow-Credentials": true,
    "Content-Type": "application/json",
  };
  res.header(header);
  res.send(JSON.stringify(Food, null, 2));
});

// Read Single

// Update

// Delete

module.exports = Router;

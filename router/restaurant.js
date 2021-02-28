const express = require("express");
const Router = express.Router();
const Restaurant = require("../database/Restaurant");
/* Fetch Restaurant */
Router.get("/", (req, res) => {
  res.header("Content-Type", "application/json");
  res.json(Restaurant);
});

module.exports = Router;

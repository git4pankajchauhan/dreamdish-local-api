const express = require("express");
const Router = express.Router();
const Restaurant = require("../database/Restaurant");
/* Fetch Restaurant */
Router.get("/", (req, res) => {
  const header = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "X-Requested-With,content-type",
    "Access-Control-Allow-Credentials": true,
    "Content-Type": "application/json",
  };
  res.header(header);
  res.send(JSON.stringify(Restaurant, null, 2));
});

module.exports = Router;

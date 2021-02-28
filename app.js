const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const restaurant = require("./router/restaurant");
const food = require("./router/food");

/* Restaurant Router */
app.use("/restaurant", restaurant);

/* Food Router */
app.use("/food", food);

/* creating server */
app.listen(PORT, err => {
  console.log(`Server is running on port:${PORT}`);
});

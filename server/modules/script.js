const express = require("express");
const mongoose = require("mongoose");
require("../data/data");

const app = express();

mongoose.connection.once("open", () => {
  console.log("Mongodb is connected");
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongodb is disconnected");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

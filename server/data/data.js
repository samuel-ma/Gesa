const mongoose = require("mongoose");

const mongodb_url = process.env.MONGODB_URL; //Replace this with your mongodb url

module.exports = mongoose.connect(mongodb_url);

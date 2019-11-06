const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  picture: { type: String}
});

module.exports = mongoose.model("Post", postSchema); // defining the schema model

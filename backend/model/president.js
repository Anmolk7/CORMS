const mongoose= require("mongoose");
const presidentSchema = mongoose.Schema({
    username: { type: String, required: true },
    organization: { type: String, required: true }
  });
  module.exports = mongoose.model("President", presidentSchema); // defining the schema model
  
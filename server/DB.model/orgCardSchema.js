const mongoose = require("mongoose");
const orgCardSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  picture: { type: String, required: true }
});

module.exports = mongoose.model("OrgCard", orgCardSchema); // defining the schema model

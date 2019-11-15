const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  picture: { type: String},
  creator:{type:mongoose.Schema.Types.ObjectId,ref:"User", required:true}
  
});

module.exports = mongoose.model("Post", postSchema); // defining the schema model

const mongoose = require("mongoose");
const rosterSchema = mongoose.Schema({
  username: { type: String, required: true },
  organization: {type:String, required: true}  
  
});

module.exports = mongoose.model("Roster", rosterSchema); // defining the schema model

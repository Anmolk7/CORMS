const mongoose = require("mongoose");
const currMemSchema = mongoose.Schema({
    username: { type: String, required: true },
    organization: { type: String, required: true }
});

module.exports = mongoose.model("CurrMem", currMemSchema); // defining the schema model

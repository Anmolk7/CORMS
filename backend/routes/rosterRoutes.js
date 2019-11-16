const express = require("express");
const router = express.Router();
const Roster = require("../model/roster");
const checkAuth = require("../middleware/check-auth")

router.post("", checkAuth, (req, res, next) => {
    const roster = new Roster( { username: req.body.username, organization: req.body.organization });
    roster.save();
    console.log(roster);
    res.status(201).json({message:'Request sent to join from user!'});
});
router.get("", (req, res, next) => {
    // '/api/ indicates this is a rest API.
    //res.send("Hello from Express.js"); //returns the response
    Roster.find().then(documents => {
      console.log("documents :" + JSON.stringify(documents));
      res.status(200).json({
        message: "roster fectched successfully!",
        rosters: documents
      });
    });
  });

  module.exports = router;
const express = require("express");
const router = express.Router();
const CurrMem = require("../model/currMem");
const checkAuth = require("../middleware/check-auth")

router.post("", checkAuth, (req, res, next) => {
    const currMem = new CurrMem( { username: req.body.username, organization: req.body.organization });
    currMem.save();
    console.log(currMem);
    res.status(201).json({message:'Current member added!'});
});
router.get("", (req, res, next) => {
    // '/api/ indicates this is a rest API.
    //res.send("Hello from Express.js"); //returns the response
    CurrMem.find().then(documents => {
      console.log("documents :" + JSON.stringify(documents));
      res.status(200).json({
        message: "roster fectched successfully!",
        currMems: documents
      });
    });
  });
  router.delete("/:username", (req, res, nex) => {
    CurrMem.deleteOne({username:req.params.username }).then(result => {
      if(result.n>0){
        res.status(200).json({ message: "Update successful" });
      }
      else{
        res.status(401).json({ message: "Not Authorized!" });
      }
    })
  
  });

  module.exports = router;
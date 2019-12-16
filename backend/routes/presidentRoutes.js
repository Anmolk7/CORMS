const express = require("express");
const router = express.Router();
const President = require("../model/president");
const checkAuth = require("../middleware/check-auth")

router.post("", (req, res, next) => {
    const president = new President( { username: req.body.username, organization: req.body.organization });
    president.save();
    console.log(president);
    res.status(201).json({message:'Make President!'});
});
router.get("", (req, res, next) => {
    // '/api/ indicates this is a rest API.
    //res.send("Hello from Express.js"); //returns the response
    President.find().then(documents => {
      console.log("documents :" + JSON.stringify(documents));
      res.status(200).json({
        message: "presidents fectched successfully!",
        presidents: documents
      });
    });
  });

  router.delete("/:organization", (req, res, nex) => {
    President.deleteMany({organization:req.params.organization }).then(result => {
      if(result.n>0){
        res.status(200).json({ message: "Update successful" });
      }
      else{
        res.status(401).json({ message: "Not Authorized!" });
      }
    })
  
  });
  router.patch("/:id", (req, res, next) => {
    const president = new President({
      id: req.body.id,
      username: req.body.username,
      organization:req.body.organization
    });
    console.log("president"+president);
    President.updateOne({organization:president.organization}).then(result => {
      if(result.nModified>0){
        res.status(200).json({ message: "Update successful" });
      }
      else{
        res.status(401).json({ message: "Failed to update" });
      }
   
    });
  })

  module.exports = router;
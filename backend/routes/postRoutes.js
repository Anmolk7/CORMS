const express = require("express");
const router = express.Router();
const Post = require("../model/post");
const checkAuth= require("../middleware/check-auth")

router.post("", checkAuth, (req, res, next) => {
  const post = new Post({
    name: req.body.name,
    description: req.body.description,
    picture: req.body.picture,
    creator:req.userData.userId
  });

  post.save(); // saving document to collection of MongoDB.

  console.log(post);
  res.status(201).json({
    message: "Posts Added Successfully"
  }); //201 new resource was created
});

router.get("", (req, res, next) => {
  // '/api/ indicates this is a rest API.
  //res.send("Hello from Express.js"); //returns the response
  Post.find().then(documents => {
    console.log("documents :" + JSON.stringify(documents));
    res.status(200).json({
      message: "posts fectched successfully!",
      posts: documents
    });
  });
});
router.delete("/:id", checkAuth, (req, res, nex) => {
  Post.deleteOne({ _id: req.params.id ,creator:req.userData.userId }).then(result => {
    if(result.n>0){
      res.status(200).json({ message: "Update successful" });
    }
    else{
      res.status(401).json({ message: "Not Authorized!" });
    }
  })

});

router.put("/:id",checkAuth, (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    picture: req.body.picture,
    creator:req.userData.userId
  });
  Post.updateOne({ _id: req.params.id, creator:req.userData.userId }, post).then(result => {
    if(result.nModified>0){
      res.status(200).json({ message: "Update successful" });
    }
    else{
      res.status(401).json({ message: "Not Authorized!" });
    }
 
  });
})
module.exports = router;

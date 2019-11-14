const express = require("express");
const router = express.Router();
const Post = require("../model/post");
const checkAuth= require("../middleware/check-auth")

router.post("", checkAuth, (req, res, next) => {
  const post = new Post({
    name: req.body.name,
    description: req.body.description,
    picture: req.body.picture
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
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    console.log(req.params.id);
    res.status(200).json({ message: "delete successfull" });
  })

});

router.put("/:id",checkAuth, (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    picture: req.body.picture
  });
  Post.updateOne({ _id: req.params.id }, post).then(result => {
    console.log(result);
    res.status(200).json({ message: "Update successful" });
  });
})
module.exports = router;

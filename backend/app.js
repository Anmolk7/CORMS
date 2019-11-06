const express = require("express");
const bodyParser = require("body-parser");
const app = express(); //big chain of middleware we apply to incoming requests. Like a big funnel where each part of the funnel that can do something with the request
const mongoose = require("mongoose");
const Post = require("./model/post");

mongoose
  .connect("mongodb+srv://anmolk7:lespaul59@cluster0-2wdwj.mongodb.net/CORMSNEW?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Connection Failed!");
  });

app.use(bodyParser.json()); //extracts the incoming request and converts the stream of data in request and adds it to the post request object.
app.use(bodyParser.urlencoded({ extended: false }));

//CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //allow access to all resource
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,PUT,OPTIONS"
  );
  next();
});

// app.use((req, res, next) => {
//   console.log("First middleware");
//   next(); // allows to go to the next middleware
// }); // uses a use() middleware
// external IP : 47.12.78.4
app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    name: req.body.name,
    description: req.body.description,
    picture:req.body.picture
  });

  post.save();// saving document to collection of MongoDB.

  console.log(post);
  res.status(201).json({
    message: "Posts Added Successfully"
  }); //201 new resource was created
});

app.get("/api/posts", (req, res, next) => {
  // '/api/ indicates this is a rest API.
  //res.send("Hello from Express.js"); //returns the response

 Post.find().then(documents=>{
console.log("documents :"+JSON.stringify(documents));
  res.status(200).json({
    message: "posts fectched successfully!",
    posts: documents
  });
 });
});
module.exports = app;

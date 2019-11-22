const express = require("express");
const bodyParser = require("body-parser");
const app = express(); //big chain of middleware we apply to incoming requests. Like a big funnel where each part of the funnel that can do something with the request
const mongoose = require("mongoose");
const Post = require("./model/post");
const postRoutes=require("./routes/postRoutes")
const userRoutes=require("./routes/userRoutes")
const rosterRoutes=require("./routes/rosterRoutes")


mongoose
  .connect(
    "mongodb+srv://anmolk7:lespaul59@cluster0-2wdwj.mongodb.net/CORMSNEW?retryWrites=true&w=majority"
  )
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
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,PUT,OPTIONS"
  );
  next();
});


app.use("/api/posts",postRoutes)
app.use("/api/user/",userRoutes)
app.use("/api/join", rosterRoutes)
module.exports=app
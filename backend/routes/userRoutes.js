const express = require("express");
const router = express.Router();
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const checkAuth = require("../middleware/check-auth");
const ImagePath= "../../../../CORMS/CORMS/backend/CORMS/assets/image";

var userId;
var date= new Date;
var dateString;

//console.log(dateString);
//const imagePath= require("../../../CORMS/src/assets/image"

router.post("/signup", (req, res, next) => {

    bcrypt.hash(req.body.password, 10)

        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save().then(result => {
                res.status(201).json({
                    message: 'user added!',
                    result: result
                });
            })
                .catch(err => {

                    res.status(500).json({
                        message: 'Username already exists!'
                    })

                })
        });
})

router.post("/login", (req, res, next) => {
    let fetchedUser;
    User.findOne({ email: req.body.email })
        .then(user => {
            console.log(user)
            if (!user) {

                return res.status(401).json({
                    message: "User not found!"
                });
            }
            this.userId=user;
            fetchedUser = user;
            return bcrypt.compare(req.body.password, user.password);
        }).then(result => {
            console.log(result)
            if (!result) {

                return res.status(401).json({ message: "Invalid username and password" });
            }

            const token = jwt.sign({ email: fetchedUser.email, userId: fetchedUser._id }, 'secret_hash', { expiresIn: "1h" });
            res.status(200).json({ token: token, expiresIn: 3600, userId: fetchedUser._id, username:fetchedUser.email })

        }).catch(err => {
            return res.status(401).json({ message: "User Authentication Failed! Please check your username and password!" })
        })
});


const storage = multer.diskStorage({
    
    destination: (req, file, callBack) => {
      callBack(null, ImagePath)
    },
    filename: (req, file, callBack) => {  
      //callBack(null, `image_${file.originalname}`)
     // this.userId=localStorage.getItem("userId");
      this.dateString=date.getFullYear()+""+date.getDate()+""+""+date.getHours()+""+date.getMinutes()
      callBack(null, this.userId._id+'.'+'jpeg')
    }
  });
  
  const upload = multer({ storage: storage })
  
  router.post("/image", checkAuth, upload.single('file'), (req, res, next) => {
    const file = req.file;
    //console.log(file.filename);
    if (!file) {
      const error = new Error('No File')
      error.httpStatusCode = 400
      return next(error)
    }
    res.send(file);
  });
  

module.exports = router;
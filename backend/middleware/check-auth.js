const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => { //middleware which gets executed to authenticate incoming requests
    try {
        const token = req.headers.authorization.split(" ")[1]; //extracting token from headers
        const decodedToken = jwt.verify(token, "secret_hash");
        req.userData = { email: decodedToken.email, userId: decodedToken.userId };
        next();
    }
    catch (error) {
        res.status(401).json({ message: "Auth failed!" });
    }

};
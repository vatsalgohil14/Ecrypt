// import jwt from "jsonwebtoken";
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").split(" ")[1];
    // console.log('auth middle', token);
    if (!token) {
      return res.status(401).json({ msg: "Access denied , token missing" });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({ msg: "TokenExpiredError!" });
        }
        else if (err.name === "JsonWebTokenError") {
          return res.status(401).json({ msg: "Invalid token!" });
        }
      }

      req.user = user;
      next();
    });
  } catch (error) {
    // console.log("error at auth middleware 2", error);
    return res.status(400).send(error);
  }
};
// export default authNew;
module.exports = auth;

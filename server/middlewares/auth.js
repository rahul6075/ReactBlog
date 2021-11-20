const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const User = require("../models/Users");
exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422);
    throw new Error(errors.array()[0].msg);
  }
  next();
};

exports.protect = async (req, res, next) => {
  // Get token from header
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: "Token is not valid" });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};

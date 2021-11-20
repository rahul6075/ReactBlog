const { check } = require("express-validator");

exports.signupValidator = [
  check("name", "Name is required").notEmpty(),
  check("email").isEmail().withMessage("Email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Need strong password of minimum character 6"),
];

exports.signinValidator = [
  check("email").isEmail().withMessage("Email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Need strong password of minimum character 6"),
];

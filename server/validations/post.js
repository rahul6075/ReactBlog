const { check } = require("express-validator");

exports.postValidator = [
  check("title").not().isEmpty().withMessage("Title is required"),
  check("desc").not().isEmpty().withMessage("Description is required"),
];

const express = require("express");
const { runValidation, protect } = require("../middlewares/auth");
const { postValidator} = require("../validations/post");
const router = express.Router();
const {createPost, deletePost} = require('../controllers/post');

// @desc  POST create new post
// @router POST /api/posts
// @access private


router.post("/createpost",  postValidator, runValidation,protect, createPost );
module.exports = router;
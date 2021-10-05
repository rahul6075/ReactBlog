const express = require("express");
const { runValidation, protect } = require("../middlewares/auth");
const { signupValidator, signinValidator } = require("../validations/auth");
const router = express.Router();
const {registerUser, loginUser, updateUser, deleteUser} = require('../controllers/user');


// @desc  POST register new user
// @router POST /api/users
// @access public


router.post("/register", signupValidator, runValidation, registerUser );
router.post("/login", signinValidator, runValidation, loginUser );
router.put("/update", protect , updateUser );
router.delete("/delete", protect , deleteUser);
module.exports = router;
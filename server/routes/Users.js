const express = require("express");
const multer = require("multer");
const { runValidation, protect } = require("../middlewares/auth");
const { signupValidator, signinValidator } = require("../validations/auth");
const router = express.Router();
const {
  registerUser,
  loginUser,
  updateUser,
  updateprofile,
} = require("../controllers/user");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage: storage });

router.post("/register", signupValidator, runValidation, registerUser);
router.post("/login", signinValidator, runValidation, loginUser);
router.put("/update", protect, updateUser);
router.patch(
  "/updateprofile",
  protect,
  upload.single("profile"),
  updateprofile
);

module.exports = router;

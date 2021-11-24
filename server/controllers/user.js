const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns {token,message}
 */
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email }).exec();
    if (user) {
      return res.status(409).json({ error: "User Already exists." });
    }
    user = new User({
      name,
      email,
      password,
    });
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();
    const payload = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    return res
      .status(200)
      .json({ token, message: "user registred succssfully" });
  } catch (e) {
    return res.status(500).json(e.message);
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email }).exec();
    if (!user) {
      return res
        .status(409)
        .json({ error: "User does not exists first Register the user." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    const { _id, name, profilePic } = user;
    return res.json({
      token,
      user: { _id, name, profilePic },
      message: "Login Sucessfull.",
    });
  } catch (error) {
    return res.status(500).json({
      error: "Server Error",
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).exec();
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password;
      const updateUser = await user.save();

      return res.json({
        _id: updateUser.id,
        name: updateUser.name,
        email: updateUser.email,
        profilePic: updateUser.profilePic,
      });
    }
    res.status(404).json("User not found");
  } catch (error) {
    return res.status(500).json({
      error: "Server Error",
    });
  }
};

exports.updateprofile = async (req, res) => {
  try {
    const profile = await User.findOneAndUpdate(
      { _id: req.user._id },
      { $set: { profilePic: req.file.path } },
      { new: true }
    );
    return res.json(profile);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

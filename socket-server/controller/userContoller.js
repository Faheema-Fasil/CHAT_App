const User = require("../Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.register = async (req, res) => {
  console.log("register");
  console.log(req.body);

  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log(existingUser);
      console.log("user already exists! please login ");

      return res
        .status(400)
        .send({ msg: "User already exists. Please login." });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log(newUser);
    res.status(200).json(newUser);
    
  } catch (error) {
      console.log(error);
    res.status(401).json(error);
  }
};

exports.loginUser = async (req, res) => {
  console.log("inside login");
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      console.log("user doesnot exists please register");
      res.status(400).send("not found");
    }
    const matchPasswword = await bcrypt.compare(password, user.password);
    if (!matchPasswword) {
      console.log("incorrect Password");

      res.status(400).send("incorrect password");
    }
    console.log(user);

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      "shhh",
      { expiresIn: "7d" }
    );
    console.log("token", token);
    res.status(200).send({ token, user });
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

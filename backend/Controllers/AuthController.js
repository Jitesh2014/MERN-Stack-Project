const User = require("../Models/UserModal")
// const { createSecretToken } = require("../util/SecretToken")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const createSecretToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.TOKEN_KEY, { expiresIn: "1h" });
  };

exports.Signup = async (req, res) => {
    try {
        const { fullname, email, password, createdAt } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists" });
        }
        const user = await User.create({ fullname, email, password, createdAt });
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res.status(201).json({
            message: "User signed in successfully",
            success: true,
            user
        });

    } catch (error) {
        console.error(error);
    }
}

  
  exports.Login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required', success: false });
      }
  
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ message: 'Incorrect password or email', success: false });
      }
  
      const auth = await bcrypt.compare(password, user.password);
  
      if (!auth) {
        return res.status(401).json({ message: 'Incorrect password or email', success: false });
      }
  
      const token = createSecretToken(user._id);
  
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: true,  // Set to true
        secure: process.env.NODE_ENV === 'production',  // Use secure cookies in production
        sameSite: 'strict',
      });
  
      res.status(200).json({ message: "User logged in successfully", success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error', success: false });
    }
  };
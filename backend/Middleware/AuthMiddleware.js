const User = require("../Models/UserModal")
require("dotenv").config();
const jwt = require("jsonwebtoken")
module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  console.log("Received token:", token); // Add this log
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      console.log("Token verification error:", err); // Add this log
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user) {
        console.log("User found:", user.fullname); // Add this log
        return res.json({ status: true, user: user.fullname });
      } else {
        return res.json({ status: false });
      }
    }
  });
};


// Example Express.js backend
// app.post('/verifyToken', (req, res) => {
//   const token = req.cookies.token;
  
//   if (!token) {
//     return res.status(401).json({ status: false, message: 'No token provided' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     res.status(200).json({ status: true, user: decoded.username });
//   } catch (error) {
//     res.status(401).json({ status: false, message: 'Invalid token' });
//   }
// });

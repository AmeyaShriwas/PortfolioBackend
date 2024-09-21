const jwt = require("jsonwebtoken");
const User = require("../Models/userModels");

const auth = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    
    if (!authHeader) {
      return res.status(401).json({ message: "Authorization header is missing" });
    }

    const token = authHeader.replace("Bearer ", "").trim();

    if (!token) {
      return res.status(401).json({ message: "Token is missing" });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      console.error("Invalid token:", error);
      return res.status(401).json({ message: "Invalid token" });
    }

    const user = await User.findById(decoded._id);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(401).json({ message: "Please authenticate." });
  }
};

module.exports = auth;

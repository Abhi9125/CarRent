import jwt from "jsonwebtoken";
import User from "../model/User.js";
export const authMiddleWare = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);

    if (!token) {
      return res.json({
        success: false,
        message: "Invalid Authorization",
      });
    }

    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.json({
        success: false,
        message: "Invalid Token",
      });
    }
    const user = await User.findById({
      _id: decode,
    }).select("-password");

    req.user = user;
    next();
  } catch (err) {
    return res.json({
      success: false,
      message: err.message,
    });
  }
};

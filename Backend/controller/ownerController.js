import { success } from "zod";
import User from "../model/User.js";

export const changeRoleToOwner = async (req, res) => {
  try {
    const { _id } = req.user;

    await User.findByIdAndUpdate(
      {
        _id,
      },
      { role: "owner" }
    );

    res.json({
      success: true,
    });
  } catch (err) {
    message: err.message;
  }
};

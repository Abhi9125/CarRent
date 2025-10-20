import z, { success } from "zod";
import bcrypt from "bcrypt";
import User from "../model/User.js";
import jwt from "jsonwebtoken";

const registerUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be 6 digit"),
  name: z.string(),
});

// Token
const generateToken = (userId) => {
  const jwtToken = jwt.sign(userId, process.env.JWT_SECRET);
  return jwtToken;
};

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const registerUserSchemaValiditation = registerUserSchema.safeParse({
    name,
    email,
    password,
  });

  if (!registerUserSchemaValiditation.success) {
    return res.json({
      success: registerUserSchemaValiditation.success,
      message: "Invalid Input",
    });
  }

  try {
    const userExist = await User.findOne({
      email,
    });

    if (userExist) {
      return res.json({
        message: "user already Exist",
      });
    }

    //Hash Password

    const HashPassword = await bcrypt.hash(password, 10);
    const createUser = await User.create({
      name,
      email,
      password: HashPassword,
    });
    console.log(createUser._id);
    const token = generateToken(createUser._id.toString());

    res.json({
      success: "true",
      token,
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

//Login user
const loginUserSchema = z.object({
  email: z.email(),
  password: z.string(6, "Min password length is 6"),
});
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const userSchemaValiditation = loginUserSchema.safeParse({
    email,
    password,
  });

  if (!userSchemaValiditation.success) {
    return res.json({
      success: userSchemaValiditation.success,
      message: "Invalid user",
    });
  }

  try {
    const getUser = await User.findOne({
      email,
    });

    const passwordVerfiy = await bcrypt.compare(password, getUser.password);

    if (!passwordVerfiy) {
      return res.json({
        success: "false",
        message: "Invilid password",
      });
    }
    console.log(passwordVerfiy);

    const token = generateToken(getUser._id.toString());

    res.json({
      success: "done",
      token,
    });
  } catch (err) {
    return res.json({
      message: err.message,
    });
  }
};

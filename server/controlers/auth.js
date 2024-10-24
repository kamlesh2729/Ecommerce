import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import users from "../models/auth.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existinguser = await users.findOne({ email });
    if (existinguser) {
      return res.status(404).json({ message: "User already Exist." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await users.create({
        name,
        email,
        password: hashedPassword,
    });
    const token = jwt.sign({ email: newUser.email, id: newUser._id },process.env.JWT_SECRET,{ expiresIn: "1h" });
    res.status(200).json({ result: newUser, token });
  } catch (error) {
    res.status(500).json("Something went worng...");
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existinguser = await users.findOne({ email });
    if (!existinguser) {
      return res.status(404).json({ message: "User don't Exist." });
    }
    const isPasswordCrt = await bcrypt.compare(password, existinguser.password);
    if (!isPasswordCrt) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { email: existinguser.email, id: existinguser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existinguser, token });
  } catch (error) {
    res.status(500).json("Something went worng...");
  }
};


// export const getUser = async (req, res) => {
//   const { Id: _id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(_id)) {
//     return res.status(404).send(_id);
//   }
//   try {
//     if (mongoose.Types.ObjectId.isValid(_id)) {
//       const User = await users.findOne({_id});
//       console.log(User);
//       res.status(200).json(User);
//     }
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };
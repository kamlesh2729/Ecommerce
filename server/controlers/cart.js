import mongoose from "mongoose";
import users from "../models/auth.js";

export const getAllCartProducts = async (req, res) => {
  try {
    const allCarts = await users.find();
    const allCartDetails = [];
    allCarts.forEach((user) => {
      allUserDetails.push({
        // id: user.cartproducts.id,
        name: user.name,
        email: user.email,
        cartproducts: user.cartproducts,
      });
    });
    res.status(200).json(allCartDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addcartproducts = async (req, res) => {
  const { Id: _id } = req.params;
  const { id, title, image, price, quantity } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send(_id);
  }
  
  try {
    if (mongoose.Types.ObjectId.isValid(_id)) {
      // const Users = await users.findOne({ _id });
      // const existingItem = await Users.cartproducts.find((item) => item.id === id);
      // res.status(201).json(existingItem);
      // const quantity = existingItem.quantity + 1;
      // if (existingItem) {
      //   // const quantity = { oldqty += quantity };
      //   const updatedProfile = await users.findByIdAndUpdate(_id, { $addToSet: { cartproducts: [{quantity}] } },
      //     { new: true }
      //   );
      //   res.status(200).json(updatedProfile);
      // }
      const updatedProfile = await users.findByIdAndUpdate(
        _id,
        { $addToSet: { cartproducts: [{ id, title, image, price, quantity }] } },
        { new: true }
      );
        res.status(200).json(updatedProfile);
      }
  } catch (error) {
    res.status(405).json({ message: error.message, error });
  }
};

export const getAllCarts = async (req, res) => {
  const { _id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send(_id);
  }
  try {
    if (mongoose.Types.ObjectId.isValid(_id)) {
      const Users = await users.findOne({ _id });
      res.status(200).json(Users.cartproducts);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// export const increseQuantity = async (req, res) => {
//   const { id: _id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(_id)) {
//     return res.status(404).send("Question unavailable...");
//   }
//   updateNoOfQuestions(_id, noOfAnswers);
//   try {
//     await Questions.updateOne(
//       { _id },
//       { $pull: { answer: { _id: answerId } } }
//     );
//     res.status(200).json({ message: "Successfully deleted..." });
//   } catch (error) {
//     res.status(405).json(error);
//   }
// };

// export const decreseQuantity = async (req, res) => {
//   const { id: _id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(_id)) {
//     return res.status(404).send("Question unavailable...");
//   }
//   updateNoOfQuestions(_id, noOfAnswers);
//   try {
//     await Questions.updateOne(
//       { _id },
//       { $pull: { answer: { _id: answerId } } }
//     );
//     res.status(200).json({ message: "Successfully deleted..." });
//   } catch (error) {
//     res.status(405).json(error);
//   }
// };

// export const deleteCartproduct = async (req, res) => {
//   const { id: _id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(_id)) {
//     return res.status(404).send("Question unavailable...");
//   }
//   updateNoOfQuestions(_id, noOfAnswers);
//   try {
//     await Questions.updateOne(
//       { _id },
//       { $pull: { answer: { _id: answerId } } }
//     );
//     res.status(200).json({ message: "Successfully deleted..." });
//   } catch (error) {
//     res.status(405).json(error);
//   }
// };

import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String},
  number: { type: Number},
  password: { type: String, required: true },
  about: { type: String },
  cartproducts: [{ id:Number, title: String, image:String, price:Number, quantity: {type: Number, default: 1} }],
  joinedOn: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);

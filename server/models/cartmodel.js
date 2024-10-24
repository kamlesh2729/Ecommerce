import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number },
  quantity: { type: Number, default: 1 },
  addedOn: { type: Date, default: Date.now },
});

export default mongoose.model("Cart", cartSchema);

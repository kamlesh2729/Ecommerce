import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  Title: { type: String, required: true },
  Image: { type: String, required: true },
  Description: { type: String },
  price: { type: Number, required: true },
  Quantity: { type: Number },
  Category: { type: String, required: true},
  updatedOn: { type: Date, default: Date.now },
});

export default mongoose.model("Products", productSchema);

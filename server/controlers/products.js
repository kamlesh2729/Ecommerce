import product from "../models/product.js";

export const addproducts = async (req, res) => {
  const { title, image, description, price, category, quantity} = req.body;
  try {
    const existingproduct = await product.findOne({ title });
    if (existingproduct) {
      return res.status(404).json({ message: "Product already Exist." });
    }

    // const hashedPassword = await bcrypt.hash(password, 12);
    const newProduct = await product.create({
      title, image, description, price, category, quantity,
    });
    // const token = jwt.sign({ email: newUser.email, id: newUser._id }, "test", {
    //   expiresIn: "1h",
    // });
    res.status(200).json({ result: newProduct });
  } catch (error) {
    res.status(500).json("Something went worng...");
  }
};
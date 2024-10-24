import express from "express";

import { login, signup } from "../controlers/auth.js";
import { addcartproducts, getAllCarts } from "../controlers/cart.js";
// import { addcartproducts, getAllCartProducts } from "../controlers/cart.js";
// import { updateProfile } from "../controlers/users.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.patch("/addtocart/:Id", auth, addcartproducts);
router.get("/getAllCarts", getAllCarts);
// router.get("/getAllCarts", getAllCartProducts);
// router.patch("/update/:id", auth, updateProfile);

export default router;

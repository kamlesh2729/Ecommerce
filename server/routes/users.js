import express from "express";

import { login, signup } from "../controlers/auth.js";
import { addcartproducts, getAllCarts, getAllCart } from "../controlers/cart.js";
// import { getAllCartProducts } from "../controlers/cart.js";
import { updateProfile, getAllUsers } from "../controlers/users.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.patch("/addtocart/:Id", auth, addcartproducts);
router.post("/getAllCarts", getAllCarts);
router.get("/getAllCart", getAllCart);
router.get("/getAllUsers", getAllUsers);
router.patch("/update/:id", auth, updateProfile);

export default router;

import express from "express";

import { addproducts } from "../controlers/products.js";
// import { getAllProducts } from "../controlers/users.js";
// import { updateProfile } from "../controlers/users.js";

const router = express.Router();

router.post("/addproduct", addproducts);

// router.get("/getAllUsers", getAllUsers);
// router.patch("/update/:id", auth, updateProfile);

export default router;

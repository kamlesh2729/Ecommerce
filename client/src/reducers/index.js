import { combineReducers } from "redux";
import authReducer from "./authreducer";
import { allproducts } from "./product";
import { singleproduct } from "./product";
import cartProducts from "./cartreducer";
import currentUser from "./currentuserreducer";

export default combineReducers({ allproducts, singleproduct, cartProducts, authReducer, currentUser });

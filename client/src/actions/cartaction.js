// import * as api from "../api/Api";

export const AddToCart = ( product, Id) => async (dispatch) => {
  try {
    // const { data } = await api.addCart(Id, product);
    dispatch({ type: "ADD_TO_CART", payload: product });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCart = (id) => async (dispatch) => {
  try {
    // const { data } = await api.deleteCart(Id, product);
    dispatch({ type: "DELETE_CART", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const increseQty = (id, quantity) => async (dispatch) => {
  try {
    // const { data } = await api.addQuantity(Id, quantity);
    dispatch({ type: "INCRESE_QUANTITY", payload: { id, quantity } });
  } catch (error) {
    console.log(error);
  }
};
export const decreseQty = (id, quantity) => async (dispatch) => {
  try {
    // const { data } = await api.decresQuantityCart(Id, quantity);
    dispatch({ type: "DECRESE_QUANTITY", payload: { id, quantity } });
  } catch (error) {
    console.log(error);
  }
};

// export const getcartProducts = (Id) => async (dispatch) => {
//   try {
//     // const { data } = await api.AllCarts(Id);
//     // console.log(data);
//     dispatch({ type: "FETCH_CARTS", payload: Id });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const fetchAllUsers = (userId) => async (dispatch) => {
//   try {
//     const { data } = await api.getAllUsers(userId);
//     console.log(data);
//     dispatch({ type: "FETCH_USERS", payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };
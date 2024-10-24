const initialState = {
  products: [],
};


export const allproducts = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHALL_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const singleproduct = (state = {}, action) => {
  switch (action.type) {
    case "SINGLE_PRODUCT":
      return { ...state, product: action.payload };
    default:
      return state;
  }
};



export const fetchAllproducts = (products) =>{
  return { type: "FETCHALL_PRODUCTS", payload: products };
};

export const fetchSingleproduct = (product) => {
  return { type: "SINGLE_PRODUCT", payload: product };
};
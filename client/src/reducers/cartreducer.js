import { loadFromLocalStorage} from '../utils/localstorage';

const initialState = {
  products: loadFromLocalStorage(),
};

const cartProducts = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "ADD_TO_CART":
      const Cart = state.products.find((item) => item.id === action.payload.id);
      if (Cart) {
        newState = {
          ...state,
          products: state.products.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
        localStorage.setItem("Cartitem", JSON.stringify(newState.products));
        return newState;
      };

      newState = {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };
      localStorage.setItem("Cartitem", JSON.stringify(newState.products));
      return newState;
    case "DELETE_CART":
      newState = {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
      };
      localStorage.setItem("Cartitem", JSON.stringify(newState.products));
      return newState;
    case "INCRESE_QUANTITY":
      newState = {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
      localStorage.setItem("Cartitem", JSON.stringify(newState.products));
      return newState;
    case "DECRESE_QUANTITY":
      newState = {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
      localStorage.setItem("Cartitem", JSON.stringify(newState.products));
      return newState;
    // case "FETCH_CARTS":
    // return action.payload;
    default:
      return state;
  }
};

export default cartProducts;

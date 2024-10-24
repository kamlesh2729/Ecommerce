import Axios from "axios";

const API = Axios.create({baseURL:'http://localhost:5000'});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});

export const logIn = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup", authData);
export const addCart = (Id, product) => API.patch(`/user/addtocart/${Id}`, product);
export const AllCarts = (Id) => API.get("/user/getAllCarts", Id);



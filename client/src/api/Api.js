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
export const AllCarts = (Id) => API.post("/user/getAllCarts", Id);
export const getAllCart = (userId) => API.get("/user/getAllCart/", userId);

export const getAllUsers = () => API.get("/user/getAllUsers");
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData);



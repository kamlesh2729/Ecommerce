import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import AllProducts from "./Pages/Allproducts";
import Sproduct from "./Components/Productspage/Singleproduct";
import Testimonials from "./Components/Testimonials";
import Contact from "./Pages/Contact";
import Auth from "./Pages/Auth";
import Profile from "./Pages/profile/Profile";
import Userprofile from "./Pages/profile/UserDetails";
import UserOrder from "./Pages/profile/UserOrder";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/About" element={<About />} />
      <Route exact path="/Product/:Id" element={<AllProducts />} />
      <Route exact path="/Sproduct/:id" element={<Sproduct />} />
      <Route exact path="/Testimonials" element={<Testimonials />} />
      <Route exact path="/Contact" element={<Contact />} />
      <Route exact path="/Auth" element={<Auth />} />
      <Route path="Profile" element={<Profile />}>
        <Route path="UserProfile/:Id" element={<Userprofile />} />
        <Route path="UserOrder/:Id" element={<UserOrder />} />
      </Route>
      AllRoutes
    </Routes>
  );
}

export default AllRoutes
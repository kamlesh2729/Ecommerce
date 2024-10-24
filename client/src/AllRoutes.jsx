import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import AllProducts from "./Pages/Allproducts";
import Sproduct from "./Components/Productspage/Singleproduct";
import Testimonials from "./Components/Testimonials";
import Contact from "./Pages/Contact";
import Auth from "./Pages/Auth";
import Profile from "./Pages/Profile";

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
      <Route exact path="/Profile/:Id" element={<Profile />} />
      AllRoutes
    </Routes>
  )
}

export default AllRoutes
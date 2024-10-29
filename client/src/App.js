import {useEffect, useState } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";

import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import AllRoutes from "./AllRoutes";
import Footer from "./Components/Footer";
import {fetchAllUsers} from "./actions/useraction"

function App() {
  const [isOpen, setIsOpen] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  })

  const isClose = () => {
    setIsOpen(!isOpen);
  }
  return (
    <SkeletonTheme baseColor="#76b5c5">
      <Router>
        <Navbar isOpen={isOpen} setIsOpen={ setIsOpen} />
        <Cart isClose={isClose} isOpen={isOpen} />
        <AllRoutes />
        <Footer />
      </Router>
    </SkeletonTheme>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import { Link, useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setCurrentUser } from "../actions/currentuseraction";
import { TbMenu2, TbLetterX, TbShoppingCart } from "react-icons/tb";
import { IoPersonSharp } from "react-icons/io5";
import { HiMiniHome } from "react-icons/hi2";
import { FcAbout } from "react-icons/fc";
import { FaCarSide } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";


const Navbar = ({ isOpen, setIsOpen }) => {
  const [navB, setNavb] = useState(false);
  const User = useSelector((state) => state.currentUser);
  const Products = useSelector((state) => state.cartProducts.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const {Id} = useParams();

    const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
      navigate("/");
      dispatch(setCurrentUser(null));
    };

    useEffect(() => {
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    }, [dispatch]);


  const openMenu = () => {
    setNavb(!navB);
  };
  return (
    <nav>
      <div
        className={`flex flex-col w-full h-full fixed top-0 -left-full bg-white z-9/6 justify-center items-center transition-all duration-1/5 ease-in-out 
          ${navB ? "left-0" : ""}`}
      >
        <button
          className=" text-bh2 absolute top-14 right-14 hover:text-blue-500 lg:hidden xl:hidden 2xl:hidden cursor-pointer transition duration-all"
          onClick={openMenu}
        >
          <TbLetterX />
        </button>
        <ul className=" flex flex-col gap-12 text-h3 text-center font-semibold list-none lg:hidden">
          <li>
            <Link
              to="/Auth"
              onClick={openMenu}
              className="font-text flex items-center gap-4 font-semibold text-black no-underline cursor-pointer transition-best duration-all hover:text-blue-500"
            >
              <IoPersonSharp /> Login or Signup
            </Link>
          </li>

          <li>
            <Link
              to="/"
              onClick={openMenu}
              className="font-text flex items-center gap-4 font-semibold text-black no-underline cursor-pointer transition-best duration-all hover:text-blue-500"
            >
              <HiMiniHome /> Home
            </Link>
          </li>

          <li>
            <Link
              to="/About"
              onClick={openMenu}
              className="font-text flex items-center gap-4 font-semibold text-black no-underline cursor-pointer hover:text-blue-500"
            >
              <FcAbout /> About
            </Link>
          </li>

          <li>
            <Link
              to="/Product"
              onClick={openMenu}
              className="font-text flex items-center gap-4 font-semibold text-black no-underline cursor-pointer hover:text-blue-500"
            >
              <FaCarSide /> Products
            </Link>
          </li>

          <li>
            <Link
              to="/Contact"
              onClick={openMenu}
              className="font-text flex items-center gap-4 font-semibold text-black no-underline cursor-pointer hover:text-blue-500"
            >
              <RiContactsFill /> Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-full Lp-l:max-w-8lx bg-transparent top-0 left-0 right-0 h-auto mx-auto my-0 px-8 py-11 flex justify-between items-center z-50">
        <div className="w-57">
          <Link to="/">
            {/* <img src={Logo} alt="regalo-logo" className="w-full h-full" /> */}
          </Link>
        </div>

        <ul className="hidden gap-9 font-semibold list-none mb:hidden sm:hidden lg:flex">
          <li>
            <Link
              to="/"
              className="text-pn font-text font-semibold text-black no-underline cursor-pointer transition-best duration-all hover:text-blue-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="text-pn font-text font-semibold text-black no-underline cursor-pointer hover:text-blue-500"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={`/Product/${User?.result?._id}`}
              className="text-pn font-text font-semibold text-black no-underline cursor-pointer hover:text-blue-500"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="text-pn font-text font-semibold text-black no-underline cursor-pointer hover:text-blue-500"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="h-8 gap-10 font-semibold text-p font-text hidden items-center lg:flex">
          {User === null ? (
            <Link
              to="/Auth"
              className="bg-blue-500 text-white py-4 px-10 rounded shadow-3xt shadow-blue-300 hover:shadow-3xr hover:shadow-blue-500 hover:bg-blue-500"
            >
              <span>Log In</span>
            </Link>
          ) : (
            <>
              <ul className="bg-blue-500 group text-white py-5 px-5 rounded-round shadow-3xt shadow-blue-300 hover:shadow-3xr hover:shadow-blue-500">
                <li className="relative cursor-pointer">
                  {User.result.name.charAt(0).toUpperCase()}
                  <ul className="group-block absolute top-14 -left-16 hidden group-hover:block rounded-xl py-2 px-8 bg-blue-500 z-50">
                    <Link to="/Profile" className="cursor-pointer">
                      <li className="py-2 px-7 hover:bg-blue-300 hover:text-black">
                        Profile
                      </li>
                    </Link>
                    <Link
                      to="/Auth"
                      className="cursor-pointer"
                      onClick={handleLogout}
                    >
                      <li className=" py-2 px-4 hover:bg-blue-300 hover:text-black">
                        Log Out
                      </li>
                    </Link>
                  </ul>
                </li>
              </ul>
            </>
          )}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" absolute right-32 Lp-l:right-[21rem] cursor-pointer text-bh2 hover:text-blue-500"
        >
          <TbShoppingCart />
          <span className="absolute right-32 Lp-l:right-[1rem] Lp-l:-top-1 text-p font-bold text-red-600">
            {Products.length}
          </span>
        </button>

        <button className=" text-bh2 absolute top-14 right-14 cursor-pointer hover:text-blue-500 lg:hidden xl:hidden 2xl:hidden transition duration-all">
          <TbMenu2 />
        </button>
      </div>
    </nav>
  );
};

export default Navbar
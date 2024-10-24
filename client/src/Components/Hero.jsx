import React from 'react'
import { Link } from "react-router-dom";

import Men from "../assets/Menshopping.jpg";
import Women from "../assets/women2.jpg";
import Jewelery from "../assets/jewelery.jpg";
import Electronics from "../assets/electronic.jpg";

const Hero = () => {
  return (
    <>
      <section className="w-[90%] Lp-l:max-w-8lx mx-auto">
        <div className=" h-[60vh] Lp-l:h-[80vh] grid grid-cols-con2 Lp-l:grid-cols-hero Lp-l:grid-rows-hero gap-1 Lp-l:gap-4 gc">
          <div className=" overflow-hidden cursor-pointer relative go">
            <Link to="/Product">
              <div className="absolute w-full h-full top-0 left-0 bg-[#0000003a] hover:bg-[#0000005f]"></div>
              <img
                src={Men}
                alt="Men's-shopping"
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
              <p className="font-bold text-white text-bh2 absolute bottom-4 left-6 z-5">
                Men's Clothing
              </p>
            </Link>
          </div>

          <div className=" overflow-hidden cursor-pointer relative gt">
            <Link to="/Product">
              <div className="absolute w-full h-full top-0 left-0 bg-[#0000003a] hover:bg-[#0000005f]"></div>
              <img
                src={Women}
                alt="women's-shopping"
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
              <p className="font-bold text-white text-bh2 absolute bottom-4 left-6 z-5">
                Women's Clothing
              </p>
            </Link>
          </div>

          <div className=" overflow-hidden cursor-pointer relative gtu">
            <Link to="/Product">
              <div className="absolute w-full h-full top-0 left-0 bg-[#0000003a] hover:bg-[#0000005f]"></div>
              <img
                src={Jewelery}
                alt="Jewelery-img"
                className="w-full h-full hover:scale-110 transition duration-300"
              />
              <p className="font-semibold text-white text-bh2 absolute bottom-4 left-2 Lp-l:left-6 z-5">
                Jewelery
              </p>
            </Link>
          </div>

          <div className=" overflow-hidden cursor-pointer relative gtl">
            <Link to="/Product">
              <div className="absolute w-full h-full top-0 left-0 bg-[#0000003a] hover:bg-[#0000005f]"></div>
              <img
                src={Electronics}
                alt="Jewelery-img"
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
              <p className="font-semibold text-white text-bh2 absolute bottom-4 left-2 Lp-l:left-6 z-5">
                Electronics
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero
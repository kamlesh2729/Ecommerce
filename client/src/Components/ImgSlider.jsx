import React, { useState, useEffect } from 'react'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

import Banner1 from "../assets/banner/women4.jpg"
import Banner2 from "../assets/banner/home-img-4.jpg"
import Banner3 from "../assets/banner/Jewelery1.jpg"

const Images = [Banner1, Banner2, Banner3];

const ImgSlider = () => {

const [currentIndex, setCurrentIndex] = useState(0);

const nextImage = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
};

const prevImage = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + Images.length) % Images.length);
};

  useEffect(() => {
    setTimeout(() => { 
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 5000);
  }, [currentIndex]);
  return (
    <section className="w-full h-[70vh] mb-2 flex justify-center items-center relative">
      <button
        type="button"
        alt="buttuon-left"
        onClick={prevImage}
        className="w-bt h-nav bg-[#ffffff63] text-h3 absolute left-4 z-10 cursor-pointer hover:bg-[#ffffff78]"
      >
        <IoIosArrowDropleftCircle />
      </button>
      <img
        src={Images[currentIndex]}
        alt="banner1"
        className="w-full h-full object-center imgSlide"
      />
      <button
        type="button"
        alt="buttuon-right"
        onClick={nextImage}
        className="w-bt h-nav bg-[#ffffff63] text-h3 absolute right-4 z-10 cursor-pointer hover:bg-[#ffffff78]"
      >
        <IoIosArrowDroprightCircle />
      </button>
      <div className="w-test h-[4vh] mb-4 flex items-center justify-center gap-8 absolute z-10 bottom-0">
        <span
          className="w-[15px] h-[15px] mx-[2px] bg-yellow-500 rounded cursor-pointer"
          onClick={Images}
        ></span>
        <span
          className="w-[15px] h-[15px] mx-[2px] bg-yellow-500 rounded cursor-pointer"
          onClick={Images}
        ></span>
        <span
          className="w-[15px] h-[15px] mx-[2px] bg-yellow-500 rounded cursor-pointer"
          onClick={Images}
        ></span>
      </div>
    </section>
  );
}

export default ImgSlider
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Axio from "axios";
// import { useSelector } from "react-redux";

import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";

const Trendingslider = () => {

  // const products = useSelector((state) => state.allproducts.products);

  // const ProudProduct = products.filter((item) => item.id >= 8);

    let [data, setData] = useState([]);

    const api = "https://fakestoreapi.com/products";

    const GetAllproducts = async () => {
      try {
        const products = await Axio.get(api);
        setData(products.data);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      GetAllproducts();
    }, []);

    const ProudProduct = data.filter((item) => item.id >= 8);

  const slideLeft = () => {
    let Slider = document.getElementById("slider");
    Slider.scrollLeft = Slider.scrollLeft - 230;
  };

  const slideRight = () => {
    let Slider = document.getElementById("slider");
    Slider.scrollLeft = Slider.scrollLeft + 231;
  };

  return (
    <section className=" w-[90%] Lp-l:max-w-8lx my-16 mx-auto py-8">
      <div className="flex items-center justify-between">
        <h3 className=" py-8 text-h3 font-semibold">Trending Now</h3>
        <div className=" text-h3 font-semibold flex gap-8">
          <button
            title="scroll-left"
            className="text-blue-500  text-bh2"
            onClick={slideLeft}
          >
            <BsArrowLeftSquareFill />
          </button>
          <button
            title="scroll-right"
            className="text-blue-500 text-bh2"
            onClick={slideRight}
          >
            <BsArrowRightSquareFill />
          </button>
        </div>
      </div>
      <div
        className=" w-full h-auto Lp-l:h-[60vh] flex overflow-x-scroll overflow-y-hidden relative scroll-smooth whitespace-nowrap gap-9 scrollbarh"
        id="slider"
      >
        {ProudProduct.map((product) => {
          const { id, image, price, title } = product;
          return (
            <div
              key={id}
              className=" w-[210px] Lp-l:w-[210px] cursor-pointer border-2 border-gray-400 hover:border-slate-500 rounded-md items-center"
            >
              <Link to={`/Sproduct/${id}`}>
                <div className=" text-center py-8">
                  <img
                    src={image}
                    alt="product images"
                    className=" h-[150px] w-[150px] mx-auto hover:scale-110 transition duration-300"
                  />
                </div>
                <div className=" text-4h p-4 w-[21rem]">
                  <p className=" font-medium overflow-hidden w-full text-3xl h-10 my-4 pr-2">
                    {title}
                  </p>
                  <p className=" font-semibold text-4h w-full">{price}$</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Trendingslider;

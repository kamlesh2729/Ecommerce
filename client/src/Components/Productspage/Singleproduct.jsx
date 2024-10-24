import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Axios from "axios";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleproduct } from "../../actions/productaction";
import { AddToCart } from "../../actions/cartaction";

import Trending from "./Trendingslider"

const Singleproduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const Api = `https://fakestoreapi.com/products/${id}`;
      try {
        const response = await Axios.get(Api);
        dispatch(fetchSingleproduct(await response.data));
        setLoading(false);
      } catch (error) {
        console.log("Error", error);
        setLoading(true);
      }
    };

    fetchData();
  }, [dispatch, id]);

    const increase = () => {
      if (quantity >= 1) {
        setQuantity(quantity + 1);
      }
    };

    const decrease = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
  };
  
  const addTocart = (singleprod) => {
   dispatch(AddToCart(singleprod)); 
  }

  const SkeletonLoading = () => {
    return (
      <>
        <div className=" w-[90%] Lp-l:w-1/2 h-auto Lp-l:h-[80vh] mx-auto">
          <div className=" w-full h-[40vh] Lp-l:h-[80vh] inline-flex justify-center items-center">
            <Skeleton height={200} width={200} />
          </div>
        </div>
        <div className=" w-[90%] Lp-l:w-1/2 h-auto Lp-l:h-[80vh] mx-auto px-8 Lp-l:px-16 bg-gray-300">
          <Skeleton height={50} width={400} />
          <div className=" h-auto Lp-l:h-[20vh] overflow-hidden">
            <Skeleton height={20} width={400} count={5} />
          </div>
          <Skeleton height={30} width={400} />
          <div className=" flex flex-col Lp-l:flex-row items-center justify-evenly Lp-l:justify-between Lp-l:mt-3 py-3">
            <Skeleton height={30} width={500} />
          </div>
          <div className=" flex flex-col Lp-l:flex-row items-center Lp-l:justify-between Lp-l:mt-4">
          <Skeleton height={40} width={500} />
          </div>
        </div>
      </>
    );
  };

  const SingleCard = () => {
    const singleprod = useSelector((state) => state.singleproduct.product);
    const { title, price, description, image } = singleprod;
    return (
      <>
        <div className=" w-[90%] Lp-l:w-1/2 h-auto Lp-l:h-[80vh] mx-auto">
          <div className=" w-full h-[40vh] Lp-l:h-[80vh] inline-flex justify-center items-center">
            <img
              src={image}
              alt="product"
              className=" h-[30vh] w-[60vw] Lp-l:w-[30vw] Lp-l:h-[50vh] hover:scale-110 hover: transition duration-300"
            />
          </div>
        </div>
        <div className=" w-[90%] Lp-l:w-1/2 h-auto Lp-l:h-[80vh] mx-auto px-8 Lp-l:px-16 bg-gray-300">
          <h2 className=" text-bh2 font-semibold mt-2 mb-2 pb-4">{title}</h2>
          <div className=" h-auto Lp-l:h-[20vh] overflow-hidden">
            <p className=" text-4h font-medium overflow-hidden">{description}</p>
          </div>
          <h2 className="text-h3 font-semibold my-4">${price }</h2>
          <div className=" flex flex-col Lp-l:flex-row items-center justify-evenly Lp-l:justify-between Lp-l:mt-3 py-3">
            <h2 className="text-h3 font-semibold my-4">Quantity</h2>
            <div className=" Lp=l:w-36 Lp-l:h-20 flex justify-center items-center text-h3 border border-black">
              <button
                onClick={decrease}
                className=" w-20 Lp-l:h-20 text-bh2 border-r Lp-l:border-y border-black bg-gray-200"
              >
                -
              </button>
              <p className=" w-20 text-center text-bh2 bg-transparent">
                {quantity}
              </p>
              <button
                onClick={increase}
                className=" w-20 Lp-l:h-20 text-bh2 border-l Lp-l:border-y border-black bg-gray-200"
              >
                +
              </button>
            </div>
          </div>
          <div className=" flex flex-col Lp-l:flex-row items-center Lp-l:justify-between Lp-l:mt-4">
            <button
              onClick={() => addTocart(singleprod)}
              className="w-[230px] text-4h font-semibold p-3 my-4 rounded-md border-2 border-black border-solid bg-transparent text-black hover:bg-black hover:text-white hover:border-black"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <section>
      <div className="w-full Lp-l:max-w-8lx h-auto mx-auto flex flex-col Lp-l:flex-row justify-center items-center">
        {loading ? <SkeletonLoading /> : <SingleCard/>}
      </div>
      <Trending />
    </section>
  );
}

export default Singleproduct
import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { useSelector, useDispatch } from "react-redux";
import { fetchAllproducts } from "../../actions/productaction";

import Productlist from "./ProductList"

const Products = () => {
  const products = useSelector((state) => state.allproducts.products);
  const [productcat, setProductCat] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  

  const filterProduct = (cat) => {
    const productCat = products.filter((item) => item.category === cat);
    setProductCat(productCat);
  };

  useEffect(() => {
    const fetchData = async () => {
      const Api = "https://fakestoreapi.com/products";
      try {
        const response = await Axios.get(Api);
        dispatch(fetchAllproducts(await response.data));
        setLoading(false);
        setProductCat(await response.data);
      } catch (error) {
        console.log("Error", error);
        setLoading(true);
      }
    };

    fetchData();
  }, [dispatch]);

  const SkeletonLoading = () => {
    return (
      <>
        <div className="py-6 Lp-l:mx-0 flex flex-col justify-center items-center gap-6">
          <Skeleton height={200} width={200} />
          <Skeleton height={20} width={200} />
          <Skeleton height={20} width={200} />
          <Skeleton height={30} width={200} />
        </div>
      </>
    );
  }
  

  return (
    <section className=" w-full Lp-l:max-w-8lx h-auto mx-auto">
      <div className=" max-w-81x Lp-l:w-full h-36 Lp-l:h-16 grid grid-cols-cona grid-rows-mod Lp-l:flex justify-center items-center gap-4">
        <button
          className=" text-4h font-medium px-2 rounded-md bg-gray-100 text-black hover:bg-gray-200 hover:text-black"
          onClick={() => setProductCat(products)}
        >
          All
        </button>

        <button
          className=" text-4h font-medium px-2 rounded-md bg-gray-100 text-black hover:bg-gray-200 hover:text-black"
          onClick={() => filterProduct("men's clothing")}
        >
          men's clothing
        </button>

        <button
          className=" text-4h font-medium px-2 rounded-md bg-gray-100 text-black hover:bg-gray-200 hover:text-black"
          onClick={() => filterProduct("women's clothing")}
        >
          women's clothing
        </button>

        <button
          className=" text-4h font-medium px-2 rounded-md bg-gray-100 text-black hover:bg-gray-200 hover:text-black"
          onClick={() => filterProduct("jewelery")}
        >
          jewelery
        </button>

        <button
          className=" text-4h font-medium px-2 rounded-md bg-gray-100 text-black hover:bg-gray-200 hover:text-black"
          onClick={() => filterProduct("electronics")}
        >
          electronics
        </button>
      </div>
      <div className="h-auto Lp-l:w-full mx-auto justify-center items-center grid grid-cols-com Lp-l:grid-cols-mod Lp-l:grid-rows-aut3 gap-6 py-8 mt-8">
        {productcat.map((product, i) => {
          return (
            loading ? <SkeletonLoading /> : <Productlist product={product} key={i}/>
        )
      })}
      </div>
    </section>
  );
}

export default Products
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Skeleton from "react-loading-skeleton";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllproducts } from "../../actions/productaction";

import Producard from "./Producard";

const Proudproducts = () => {

  const products = useSelector((state) => state.allproducts.products);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

    useEffect(() => {
      const fetchData = async () => {
        const Api = "https://fakestoreapi.com/products";
        try {
          const response = await Axios.get(Api);
          dispatch(fetchAllproducts(await response.data));
          setLoading(false);
        } catch (error) {
          console.log("Error", error);
          setLoading(true);
        }
      };

      fetchData();
    }, [dispatch]);

  const ProudProduct = products.filter((item) => item.id <= 8);

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
  };


  return (
    <section className=" w-[90%] Lp-l:max-w-8lx my-16 mx-auto py-8">
      <h3 className=" py-8 text-h3 font-semibold">Products We are Proud of</h3>
      <div className="h-auto">
        <div className="w-[90vw] h-auto mx-auto pl-[0.18rem] grid grid-cols-com Lp-l:grid-cols-mod Lp-l:grid-rows-proud gap-7 py-4">
          {ProudProduct.map((product, i) => {
            return ( loading ? <SkeletonLoading /> : < Producard product={product} key={i} /> )
          })}
        </div>
      </div>
    </section>
  );
};

export default Proudproducts;

import React, { useRef } from 'react'
import { Link, useParams} from "react-router-dom";
import { useDispatch } from 'react-redux';
import gsap from "gsap";
import { useGSAP } from "@gsap/react"

import { AddToCart } from "../../actions/cartaction"
import { FaParachuteBox, FaCartArrowDown } from "react-icons/fa";

const ProductList = ({ product }) => {

  const carttext = useRef();

  useGSAP(() => {
    gsap.fromTo("#CartBox",
      {y: -100,duration: 4,delay: 0.5,opacity: 1,},
      {y: 1,duration: 4,opacity: 0,}
    );});
  useGSAP(() => {
    gsap.fromTo("#CartCar",
      { x: 1, duration: 2, delay: 3.5, opacity: 1 },
      { x: 140, duration: 2, delay: 3.5, opacity: 0 }
    );
  });
  useGSAP(()=>{gsap.fromTo(
    carttext.current,
    { duration: 2.9, delay: 4, opacity: 0 },
    { duration: 2.9, delay: 4.3, opacity: 1 }
  );})

  const { Id } = useParams();
  const dispatch = useDispatch();

  const addToCart = (product, Id) => {
    dispatch(AddToCart( product, Id ));
  };

    return (
      <section className="w-full Lp-l:max-w-8lx h-auto mx-auto flex">
        <div
          className="w-full h-auto py-6 Lp-l:mx-0 flex flex-col justify-center items-center gap-6 border-2 hover:border-black rounded-md"
          key={product.id}
        >
          <div className="w-[280px] h-[160px] inline-flex justify-center">
            <img
              src={product.image}
              alt="product-img"
              className=" h-[140px] w-[140px] my-2 mix-blend-multiply hover:scale-110 transition duration-300"
            />
          </div>
          <Link to={`/Sproduct/${product.id}`}>
            <div className="text-black w-[250px] h-10 my-2 text-4h text-center overflow-hidden">
              {product.title}
            </div>
          </Link>
          <span className="text-black my-1 text-bh2">${product.price}</span>
          <button
            onClick={() => addToCart(product, Id)}
            className="w-[250px] Lp-l:w-[200px] relative text-4h font-semibold p-3 rounded-md bg-white border-2 border-black border-solid text-black hover:bg-blue-500 hover:text-white hover:border-blue-500"
          >
            <FaParachuteBox id="CartBox" className=" absolute top-1" />
            <FaCartArrowDown id="CartCar" className=" absolute top-4" />
            <span ref={carttext}>Add to Cart</span>
          </button>
        </div>
      </section>
    );
}

export default ProductList
import React from 'react'
import { Link } from "react-router-dom";

const Producard = ({product}) => {
  const { id, image, price, title } = product;
  return (
      <div
        key={id}
        className=" bg-white h-auto px-2 py-1 flex flex-col border-2 border-gray-400 hover:border-slate-500 rounded-md items-center cursor-pointer"
      >
        <img
          src={image}
          alt="product images"
          className=" h-[160px] w-[120px] mt-4 object-center hover:scale-110 transition duration-300"
        />
        <Link
          to={`/Sproduct/${id}`}
          className=" w-full h-10 mt-8 pl-4 overflow-hidden"
        >
          <span className=" font-medium text-3xl">{title}</span>
        </Link>
        <h2 className=" font-semibold text-4h w-full mt-6 pl-4">{price}$</h2>
      </div>
  );
}

export default Producard
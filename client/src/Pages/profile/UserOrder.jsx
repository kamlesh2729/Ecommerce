import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserOrder = () => {
  const User = useSelector((state) => state.currentUser);
  const carts = User?.result?.cartproducts;

  return (
    <div className="w-full h-full gap-8 py-16">
      <div className="w-full flex items-center justify-center text-h2 mb-6">
        <span className="w-28 h-28 flex items-center justify-center bg-purple-500 font-bold">
          {User?.result?.name.charAt(0).toUpperCase()}
        </span>
      </div>
      <div className=" border-b-2 ml-4 text-4h">
        <span>Order</span>
      </div>
      <div className="border-2 mt-4 ml-4 rounded-3xl">
        <div className="bg-gray-300 h-24 text-2xl flex items-center rounded-t-2xl px-4">
        <div className="w-[20vw] flex flex-col"><span className=" uppercase">order placed</span><span>29 May 2023</span></div>
        <div className="w-[20vw] flex flex-col"><span className=" uppercase">total</span><span>1234</span></div>
        <div className="w-[20vw] flex flex-col"><span className=" uppercase">Ship To</span><span>User Name</span></div>
        <div className="w-[40vw] flex flex-col items-end"><span>ORDER # 123-456789-023987</span> <div className="flex justify-center items-start gap-8"><span className="border-r-2 border-gray-500 pr-4">View order details</span><span>Invice</span></div></div>
        </div>
          {carts.map((cart, i) => {
            return (
              <div
                key={i}
                className=" w-auto h-[17.2vh] Lp-l:h-[22vh] mx-2 Lp-l:mx-1 px-8 flex justify-between relative mb-4"
              >
                <div className=" w-[25vw] h-[13vh] Lp-l:w-[10vw] Lp-l:h-[18vh] my-auto">
                  <img
                    src={cart.image}
                    alt="product"
                    className="w-full h-full object-center"
                  />
                </div>

                <div className=" w-[74vw] Lp-l:w-[24vw] h-[17vh] Lp-l:h-[20vh] text-center">
                  <div className="w-full h-[6vh] Lp-l:h-[8vh] my-4 text-left pl-2 pr-6 Lp-l:pr-4">
                    <Link
                      to={`/Sproduct/${cart.id}`}
                      className="text-p font-normal"
                    >
                      {cart.title}
                    </Link>
                  </div>
                    {/* final price div  */}
                    <div className="mt-4 pt-5">
                      <h3 className=" text-p font-medium mt-2 mb-2">
                        {`$ ${parseFloat(cart.price * cart.quantity).toFixed(
                          2
                        )}`}
                      </h3>
                    </div>
                </div>

                <div className=" Lp-l:w-auto Lp-l:h-[20vh] flex justify-evenly Lp-l:flex-col gap-4">
                  <button className="bg-yellow-400 rounded-full">
                    Get product support
                  </button>
                  <button className="rounded-full border-[1px] border-black">
                    Write a Product review{" "}
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserOrder;

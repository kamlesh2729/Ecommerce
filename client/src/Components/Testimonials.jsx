import React from 'react'

import { TbQuote } from "react-icons/tb";
import Pep1 from "../assets/people02.png";
import Pep2 from "../assets/people03.png";

const Testimonials = () => {
  return (
            <section className=" w-[90%] Lp-l:max-w-8lx mx-auto bg-bg-gray py-40 text-text-black">
        <main className="my-0 mx-auto max-w-8lx py-0 px-10">
          <article className="flex flex-col">
            <div className="flex flex-col my-0 mx-auto text-center max-w-6xl mb-20">
              <h4 className="text-h4 font-text font-medium">
                Reviewwed by People
              </h4>
              <h2 className="text-h2 mb-6">Client's Testimonials</h2>
              <p className="text-p font-text text-text-gray leading-normal">
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and result, and they're eager to share their
                positive experiences with you.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 w-full justify-center">
              <div className="bg-white shadow-3ts w-full lg:w-54 p-20 relative">
                <span className=" text-qi text-blue-500 absolute bottom-[33px] right-[60px]">
                  <TbQuote width={60} height={60} />
                </span>
                <p className="text-h4 font-medium">
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental car rates were
                  very affordable."
                </p>
                <div className="flex">
                  <div className="flex gap-8 items-center mt-12">
                    <img src={Pep1} alt="testimonials-people" className=" w-28 h-28 rounded-full" />
                    <span>
                      <h4 className=" text-spn">Ron Rizzly</h4>
                      <p className=" text-p font-text font-normal">Mumbai</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-3ts w-full lg:w-54 p-20 relative">
                <span className=" text-qi text-blue-500 absolute bottom-[33px] right-[60px]">
                  <TbQuote width={60} height={60} />
                </span>
                <p className="text-h4 font-medium">
                  "Booked a car for a family trip which was very comfortable and
                  in great condition, Most trustable car rental. Looking forward
                  to using Zoomcar rental again."
                </p>
                <div className="flex">
                  <div className="flex gap-8 items-center mt-12">
                    <img src={Pep2} alt="testimonal-people" className="w-28 h-28 rounded-full" />
                    <span>
                      <h4 className="text-spn">Himanshu</h4>
                      <p className="text-p font-text font-normal">Bengaluru</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>
      </section>
  )
}

export default Testimonials
import React from 'react'
import { Link } from "react-router-dom";

import Flogo from "../assets/logo/regalo_logo.png";
import { TbMail } from "react-icons/tb";
import { TbPhone } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="mt-16 py-4">
      <section className="Lp-l:max-w-8lx mx-auto py-0">
        <article className=" grid grid-cols-com lg:grid-cols-inp sm:grid-cols-ft2t sm:text-left gap-32 justify-center text-center lg:text-left text-black">
          <ul className="list-none">
            <li className=" text-h3 mb-6 text-center">
              <Link to="/">
                <img
                  src={Flogo}
                  alt="regalo-footer-logo"
                  className=" h-32 Lp-l:h-16 mx-auto"
                />
              </Link>
            </li>
            <li className=" mb-12 leading-7 text-slate-500 text-p">
              We offer a big range of products for all your needs. We have the
              perfect product to meet your needs.
            </li>
            <li className="text-p font-text font-medium mb-8">
              <a
                href="tel:9988776600"
                className=" no-underline flex items-center justify-center sm:justify-start lg:justify-start text-text-black transition-all hover:text-blue-500"
              >
                <TbPhone className="text-bt" /> &nbsp; +91 9988776600
              </a>
            </li>
            <li className=" text-p font-text text-center font-medium mb-8">
              <a
                href="mailto:Zoomcarrental@gmail.com"
                className=" no-underline flex items-center justify-center sm:justify-start lg:justify-start text-text-black transition-all hover:text-blue-500"
              >
                <TbMail className="text-bt" /> &nbsp; Regaloworld@gmail.com
              </a>
            </li>
            <li></li>
          </ul>
          <ul className=" list-none">
            <li className=" text-h3 font-bold mb-6 uppercase font-titles">
              Company
            </li>
            <li className="text-text-black mb-4 text-p cursor-pointer transition-all hover:text-blue-500">
              India
            </li>
            <li className="text-text-black mb-4 text-p cursor-pointer transition-all hover:text-blue-500">
              Careers
            </li>
            <li className="text-text-black mb-4 text-p cursor-pointer transition-all hover:text-blue-500">
              Mobile
            </li>
            <li className="text-text-black mb-4 text-p cursor-pointer transition-all hover:text-blue-500">
              Blog
            </li>
            <li className="text-text-black mb-4 text-p cursor-pointer transition-all hover:text-blue-500">
              How we work
            </li>
          </ul>
          <ul className="list-none">
            <li className="text-h3 font-bold mb-6 uppercase font-titles cursor-auto">
              Working Hours
            </li>
            <li className="mb-4 text-p">Mon - Fri:9:00AM - 9:00PM</li>
            <li className="mb-4 text-p">Sat: 9:00AM - 6:00PM</li>
            <li className="mb-4 text-p">Sun: Closed</li>
          </ul>
          <ul className="list-none">
            <li className="text-h3 font-bold mb-6 uppercase font-titles cursor-auto">
              Subscription
            </li>
            <li className="mb-4 text-p">
              Subscribe your Email address for latest news & updates.
            </li>
            <li className="mb-4 text-p">
              <input
                className="font-text text-input font-normal leading-6 bg-slate-200 border border-transparent py-in px-in2 outline-0 mt-4"
                type="email"
                name="email"
                placeholder="Enter Email Address"
              />
            </li>
            <li className="mb-4 text-p">
              <button
                className="no-underline text-white font-bold bg-blue-500 py-6 px-10 rounded-md shadow-3xt transition-all border-2 border-solid border-blue-500 text-p cursor-pointer w-full hover:shadow-3xr hover:bg-blue-500"
                type="submit"
              >
                Submit
              </button>
            </li>
          </ul>
        </article>
      </section>
    </footer>
  );
}

export default Footer
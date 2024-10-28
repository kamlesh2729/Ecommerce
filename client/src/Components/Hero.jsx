import React, { useRef } from 'react'
import { Link } from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Men from "../assets/Menshopping.jpg";
import Women from "../assets/women2.jpg";
import Jewelery from "../assets/jewelery.jpg";
import Electronics from "../assets/electronic.jpg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  const Mensref = useRef();
  const Womenref = useRef();
  const Jeweleryref = useRef();
  const Electronicref = useRef();
  const mainref = useRef();

  useGSAP(() => {
    gsap.fromTo(Mensref.current, {
      x: -100,scrollTrigger: { trigger: Mensref.current, start: "10% bottom", end:"bottom bottom", scrub: true, toggleActions: "restart none none none" },
      opacity:0
    },
    {x: 1, scrollTrigger: { trigger: Mensref.current, start: "10% bottom", end:"bottom bottom", scrub: true, toggleActions: "restart none none none" },
  opacity:1
    }
    )
  },{scope:mainref}
  )
  useGSAP(() => {
    gsap.fromTo(Womenref.current, {
      scrollTrigger: { trigger: Womenref.current, start: "10% bottom", end: "bottom bottom", scrub: true, toggleActions: "restart none none none" },
      x: 100, opacity: 0
    },
      {
        scrollTrigger: { trigger: Womenref.current, start: "10% bottom", end: "bottom bottom", scrub: true, toggleActions: "restart none none none" },
        x: 1, opacity: 1
      }
    )
  }, { scope: mainref });
  useGSAP(() => {
    gsap.from(Jeweleryref.current, {
      scrollTrigger: { trigger: Jeweleryref.current, start: "bottom bottom", end: "top 20%", scrub: true,},
      y: -100, opacity: 0
    }
    )
  });
  useGSAP(() => {
    gsap.fromTo(Electronicref.current, {
      scrollTrigger: { trigger: Electronicref.current, start: "top bottom", end:"bottom bottom", scrub: true, toggleActions: "restart none none none" },
      y: 150, opacity:0
    },
    {scrollTrigger: { trigger: Electronicref.current, start: "top bottom", end:"bottom bottom", scrub: true, toggleActions: "restart none none none" },
      y: 1, opacity:1
    }
    )
  },{scope:mainref})

  return (
    <>
      <section className="w-[90%] Lp-l:max-w-8lx mx-auto mt-12 pt-8">
        <div ref={mainref} className=" h-[60vh] Lp-l:h-[80vh] grid grid-cols-con2 Lp-l:grid-cols-hero Lp-l:grid-rows-hero gap-1 Lp-l:gap-4 gc">
          <div ref={Mensref} className=" overflow-hidden cursor-pointer relative go">
            <Link to="/Product">
              <div className="absolute w-full h-full top-0 left-0 bg-[#0000003a] hover:bg-[#0000005f]"></div>
              <img
                src={Men}
                alt="Men's-shopping"
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
              <p className="font-bold text-white text-bh2 absolute bottom-4 left-6 z-5">
                Men's Clothing
              </p>
            </Link>
          </div>

          <div ref={Womenref} className=" overflow-hidden cursor-pointer relative gt">
            <Link to="/Product">
              <div className="absolute w-full h-full top-0 left-0 bg-[#0000003a] hover:bg-[#0000005f]"></div>
              <img
                src={Women}
                alt="women's-shopping"
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
              <p className="font-bold text-white text-bh2 absolute bottom-4 left-6 z-5">
                Women's Clothing
              </p>
            </Link>
          </div>

          <div ref={Jeweleryref} className=" overflow-hidden cursor-pointer relative gtu">
            <Link to="/Product">
              <div className="absolute w-full h-full top-0 left-0 bg-[#0000003a] hover:bg-[#0000005f]"></div>
              <img
                src={Jewelery}
                alt="Jewelery-img"
                className="w-full h-full hover:scale-110 transition duration-300"
              />
              <p className="font-semibold text-white text-bh2 absolute bottom-4 left-2 Lp-l:left-6 z-5">
                Jewelery
              </p>
            </Link>
          </div>

          <div ref={Electronicref} className=" overflow-hidden cursor-pointer relative gtl">
            <Link to="/Product">
              <div className="absolute w-full h-full top-0 left-0 bg-[#0000003a] hover:bg-[#0000005f]"></div>
              <img
                src={Electronics}
                alt="Jewelery-img"
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
              <p className="font-semibold text-white text-bh2 absolute bottom-4 left-2 Lp-l:left-6 z-5">
                Electronics
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero
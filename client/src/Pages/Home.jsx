import React from 'react'

import ImgSlider from "../Components/ImgSlider"
import Hero from "../Components/Hero";
import Proudproducts from "../Components/Productspage/Proudproducts";
import TrendingSlider from "../Components/Productspage/Trendingslider";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
      <div className="relative">
      <ImgSlider/>
      <Hero />
      <Proudproducts />
      <TrendingSlider />
      <Testimonials />
    </div>
  )
}

export default Home
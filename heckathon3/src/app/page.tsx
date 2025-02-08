"use client";
import React from "react";
import FeaturedProducts from "./components/FeaturedProducts";
import HeroSection from "./components/HeroSection";
// import LatestProducts from "./components/LatestProducts";
// import TrendingProducts from "./components/TrendingProducts";
import Shopex from "./components/Shopex";
import Blog from "./components/Blog";
import TopCategories from "./components/TopCategories";

export default function HektoHeader() {
  return (
   <>

<HeroSection/>
<FeaturedProducts />
{/* <LatestProducts/> */}
<Shopex/>
{/* <TrendingProducts/> */}
<TopCategories/>
<Blog/>

  
   
   
   </>

    


  );
}


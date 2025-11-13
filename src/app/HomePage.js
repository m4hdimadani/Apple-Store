"use client";

import AdvertisingBanner from "@/components/AdvertisingBanner";
import Banner from "@/components/Banner";
import BestProductsSwiper from "@/components/BestProductsSwiper";
import Category from "@/components/Category";
import CountDownPage from "@/components/CountDownPage";
import Header from "@/components/Header";
import InformationBanner from "@/components/InformationBanner";
import { Bestp } from "@/productsId/Bestp";
import { products } from "@/productsId/ProductsId";
import React from "react";

function HomePage() {

  
  return (
    <>
      <Header />
      <Category />
      <Banner />
      <CountDownPage /> 
      <AdvertisingBanner />
      <BestProductsSwiper />
      <InformationBanner />
    </>
  );
}

export default HomePage;

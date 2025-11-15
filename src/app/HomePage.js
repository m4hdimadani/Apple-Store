"use client";

import AdvertisingBanner from "@/components/AdvertisingBanner";
import Banner from "@/components/Banner";
import BestProductsSwiper from "@/components/BestProductsSwiper";
import Category from "@/components/Category";
import CountDownPage from "@/components/CountDownPage";
import Header from "@/components/Header";
import InformationBanner from "@/components/InformationBanner";
import WatchList from "@/components/WatchList";

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
      <WatchList />
    </>
  );
}

export default HomePage;

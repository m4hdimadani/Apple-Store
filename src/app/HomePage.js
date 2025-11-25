"use client";

import AdvantagesOfTheWebsite from "@/components/AdvantagesOfTheWebsite";
import AdvertisingBanner from "@/components/AdvertisingBanner";
import Banner from "@/components/Banner";
import BannerTow from "@/components/BannerTow";
import BestProductsSwiper from "@/components/BestProductsSwiper";
import Category from "@/components/Category";
import CountDownPage from "@/components/CountDownPage";
import Footer from "@/components/Footer";
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
      <BannerTow />
      <AdvantagesOfTheWebsite />
      <Footer />
    </>
  );
}

export default HomePage;

"use client";

import AdvertisingBanner from "@/components/AdvertisingBanner";
import Banner from "@/components/Banner";
import Category from "@/components/Category";
import CountDownPage from "@/components/CountDownPage";
import Header from "@/components/Header";
import React from "react";

function HomePage() {
  return (
    <>
      <Header />
      <Category />
      <Banner />
      <CountDownPage /> 
      <AdvertisingBanner />
    </>
  );
}

export default HomePage;

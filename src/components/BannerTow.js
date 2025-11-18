import Image from "next/image";

import banner from "../assets/images/banner-headphone.webp";
import apple from "../assets/svg/apple.svg"

function BannerTow() {
  return (
    <div className="container m-auto px-6 my-14 lg:my-28 ">
      <div className="flex items-end justify-end h-40 lg:h-147 overflow-hidden rounded-xl relative">
        <Image src={banner} alt="banner" className="absolute w-full left-2 bottom-0 scale-105 lg:left-28 xl:left-37 lg:scale-125"/>
        <div className="relative z-10 flex flex-col  items-center lg:items-start gap-1 lg:gap-3 px-5 lg:px-20 py-3 lg:py-12 ">
            <div className="flex items-center gap-0.5 lg:gap-1">
                <p className="text-lg lg:text-5xl text-white font-medium h-4 lg:h-7">AirPodsMax</p>
                <Image src={apple} alt="apple" className="size-3 lg:size-10"/>
            </div>
            <p className="text-white font-medium lg:text-[44px]">متفاوت گوش کن</p>
            <button className="text-[#581719] bg-white w-26 lg:w-38 h-7.5 lg:h-11 text-sm lg:text-xl font-semibold rounded-full mt-1 hover:bg-[#c66b6e43] hover:text-white cursor-pointer  transition-colors ">خرید کنید</button>
        </div>
      </div>
    </div>
  );
} 

export default BannerTow;
 